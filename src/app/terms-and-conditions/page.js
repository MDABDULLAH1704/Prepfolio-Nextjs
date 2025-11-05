import React from 'react'
import Navbar from '@/components/Navbar'
import TermsConditions from '@/components/TermsConditions'


export const metadata = {
    title: 'Terms & Conditions | Prepfolio',
    description:
        'Read Prepfolio’s Terms & Conditions to understand the rules and policies governing the use of our digital learning platform, including course access, payments, and user responsibilities.',
    keywords: [
        'Prepfolio terms and conditions',
        'user agreement',
        'Prepfolio policies',
        'digital learning terms',
        'online course platform rules',
        'Razorpay payments policy',
        'Prepfolio legal information',
    ],
    openGraph: {
        title: 'Terms & Conditions | Prepfolio',
        description:
            'Review the Terms & Conditions of using Prepfolio’s digital learning platform, including course access, payment terms, and user obligations.',
        url: 'https://prepfolio.co.in/terms-and-conditions',
        siteName: 'Prepfolio',
        type: 'article',
    },
};


const page = () => {
    return (
        <>
            <Navbar />
            <TermsConditions />
        </>
    )
}

export default page
