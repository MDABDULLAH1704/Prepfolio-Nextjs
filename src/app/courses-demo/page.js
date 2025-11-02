import Navbar from '@/components/Navbar'
import React from 'react'


export const metadata = {
    title: 'Courses Demo | Prepfolio',
    description:
        'Experience Prepfolio in action! Explore our interactive demo to see how learners access AI-guided lessons, practice questions, PDF notes, and voice-based study assistance before enrolling.',
    keywords: [
        'Prepfolio demo',
        'Prepfolio interactive learning',
        'AI-powered education demo',
        'Prepfolio course preview',
        'online learning platform demo',
        'Prepfolio features',
        'Prepfolio study assistant',
    ],
    openGraph: {
        title: 'Interactive Demo | Prepfolio Learning Platform',
        description:
            'Try Prepfolio’s interactive demo to explore how our AI-based learning platform helps students study smarter with PDF notes, voice lessons, and practice tests.',
        url: 'https://prepfolio.xyz/see-demo',
        siteName: 'Prepfolio',
        type: 'website',
    },
};


const page = () => {
    return (
        <>
            <Navbar />
        </>
    )
}

export default page
