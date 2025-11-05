import React from 'react'
import Navbar from '@/components/Navbar'
import PrivacyPolicy from '@/components/PrivacyPolicy'


export const metadata = {
    title: 'Privacy Policy | Prepfolio',
    description:
        'Read Prepfolio’s Privacy Policy to understand how we collect, use, and protect your personal data including name, email, phone number, and course information. Your privacy and data security are our top priorities.',
    keywords: [
        'Prepfolio privacy policy',
        'data protection',
        'user information',
        'Razorpay privacy',
        'online learning privacy',
        'student data security',
        'personal data policy',
        'privacy statement',
    ],
    openGraph: {
        title: 'Privacy Policy | Prepfolio',
        description:
            'Learn how Prepfolio safeguards your personal data and ensures a secure experience when using our learning platform and Razorpay payments.',
        url: 'https://prepfolio.co.in/privacy-policy',
        siteName: 'Prepfolio',
        type: 'article',
    },
};


const page = () => {
    return (
        <>
            <Navbar />
            <PrivacyPolicy />
        </>
    )
}

export default page
