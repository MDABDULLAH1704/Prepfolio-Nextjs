'use client';
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import Feedback from "@/components/Feedback";
import SeeDemoButton from '@/components/SeeDemoButton';


const Page = () => {
    useEffect(() => {
        document.title = 'Feedback | Prepfolio';
        const description =
            'Share your learning experience with Prepfolio. Submit your valuable feedback to help us improve courses, study materials, and features for a better learning experience.';

        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', description);
    }, []);

    const handleFeedbackSubmit = () => {
        alert('Thank you for your feedback!');
    };

    return (
        <>
            <Navbar />
            <Feedback onFeedbackSubmit={handleFeedbackSubmit} />
            <SeeDemoButton />
        </>
    )
}

export default Page