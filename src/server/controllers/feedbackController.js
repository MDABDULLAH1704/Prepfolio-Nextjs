// controllers/feedbackController.js
import Feedback from '@/server/models/Feedback';
import { connectDB } from '@/server/lib/database';


/**
 * Very lightweight sanitization: remove HTML tags and control characters.
 * If you want robust sanitization, use a library (DOMPurify on server or sanitize-html).
 */
function sanitizeText(text = "") {
    // remove tags
    const noTags = text.replace(/<\/?[^>]+(>|$)/g, "");
    // remove weird control chars
    return noTags.replace(/[\x00-\x1F\x7F]/g, "").trim();
}

function countWords(str = "") {
    const s = str.trim();
    if (!s) return 0;
    // split on whitespace, but collapse multiple spaces
    return s.split(/\s+/).filter(Boolean).length;
}

export async function createFeedback({ name, message, userId }) {
    await connectDB();

    const cleanedName = sanitizeText(name).slice(0, 100); // limit name length
    const cleanedMessage = sanitizeText(message);

    const words = countWords(cleanedMessage);
    if (words === 0) {
        const err = new Error("Feedback cannot be empty.");
        err.status = 400;
        throw err;
    }
    if (words > 100) {
        const err = new Error("Feedback exceeds 100-word limit.");
        err.status = 400;
        throw err;
    }

    const fb = await Feedback.create({
        userId,
        name: cleanedName || "Anonymous",
        message: cleanedMessage,
        wordCount: words,
    });

    return fb;
}

export async function getAllFeedback({ limit = 50, skip = 0 } = {}) {
    await connectDB();
    const feedbacks = await Feedback.find({})
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();
    return feedbacks;
}
