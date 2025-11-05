import React from 'react'
import Navbar from '@/components/Navbar'
import RefundPolicy from '@/components/RefundPolicy'


export const metadata = {
    title: 'Refund & Cancellation Policy | Prepfolio',
    description:
        'Review Prepfolio’s Refund & Cancellation Policy for courses, PDF Notes, Practice Questions, and Audio Lessons. Understand our terms for digital content and secure Razorpay transactions before purchase.',
    keywords: [
        'Prepfolio refund policy',
        'cancellation policy',
        'Razorpay refund',
        'digital product policy',
        'online course refund',
        'Prepfolio payments',
        'e-learning refund rules',
        'no refund policy',
    ],
    openGraph: {
        title: 'Refund & Cancellation Policy | Prepfolio',
        description:
            'Read Prepfolio’s Refund & Cancellation Policy outlining terms for digital course content and Razorpay payments. Please review carefully before making a purchase.',
        url: 'https://prepfolio.co.in/refund-policy',
        siteName: 'Prepfolio',
        type: 'article',
    },
};


const page = () => {
    return (
        <>
            <Navbar />
            <RefundPolicy />
        </>
    )
}

export default page
