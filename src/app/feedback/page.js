'use client';
import React from 'react'
import Navbar from '@/components/Navbar';
import Feedback from "@/components/Feedback";
import SeeDemoButton from '@/components/SeeDemoButton';


const page = () => {
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

export default page
