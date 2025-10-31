'use client';
import React from 'react'
import Navbar from '@/components/Navbar';
import Feedback from "@/components/Feedback";


const page = () => {
    const handleFeedbackSubmit = () => {
        alert('Thank you for your feedback!');
    };

    return (
        <>
            <Navbar />
            <Feedback onFeedbackSubmit={handleFeedbackSubmit} />
        </>
    )
}

export default page
