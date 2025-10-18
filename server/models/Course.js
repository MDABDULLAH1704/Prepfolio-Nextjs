import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    subjectTitle: { type: String, required: true },
    topicContent: { type: String, required: true },
});

const courseSchema = new mongoose.Schema(
    {
        urlCourse: { type: String, required: true, unique: true, lowercase: true, trim: true },
        urlCourseDetail: { type: String, required: true, unique: true, lowercase: true, trim: true },
        title: { type: String, required: true, trim: true, unique: true },
        description: { type: String, required: true, trim: true },
        offer: { type: Number, default: 0 },
        newPrice: { type: Number },
        oldPrice: { type: Number },
        subjects: [subjectSchema], // ✅ array of objects
    },
    { timestamps: true }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
