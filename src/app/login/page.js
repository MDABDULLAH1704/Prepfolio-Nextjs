import React from 'react'
import Navbar from '@/components/Navbar'
import LoginPage from '@/components/LoginPage'
import Alert from '@/components/Alert'
import SeeDemoButton from '@/components/SeeDemoButton';


export const metadata = {
    title: 'Login | Prepfolio',
    description:
        'Login to your Prepfolio account to access purchased courses, PDF Notes, Practice Questions, and Audio Lessons securely. Only one device can stay logged in for your account safety.',
    keywords: [
        'Prepfolio login',
        'student login',
        'secure login',
        'online learning platform',
        'exam preparation',
        'study materials access',
        'PDF notes',
        'practice questions',
        'audio lessons',
    ],
    openGraph: {
        title: 'Login | Prepfolio',
        description:
            'Sign in to Prepfolio to access your courses, study materials, and audio lessons securely with single-device protection.',
        url: 'https://prepfolio.co.in/login',
        siteName: 'Prepfolio',
        type: 'website',
    },
};


const page = () => {
    return (
        <>
            <Navbar />
            <LoginPage />
            <Alert message='For your account security, Only one device can stay logged in. Logging in elsewhere will logout your current device.' />
            <SeeDemoButton />
        </>
    )
}

export default page
