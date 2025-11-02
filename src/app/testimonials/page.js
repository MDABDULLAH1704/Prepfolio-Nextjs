import React from 'react'
import Navbar from '@/components/Navbar'
import Testimonial from '@/components/Testimonial'
import SeeDemoButton from '@/components/SeeDemoButton'


export const metadata = {
    title: 'Testimonials | Prepfolio',
    description:
        'Discover what learners say about Prepfolio. Read authentic student testimonials and success stories that highlight the impact of our AI-powered learning platform and interactive courses.',
    keywords: [
        'Prepfolio testimonials',
        'Prepfolio student reviews',
        'Prepfolio feedback',
        'Prepfolio success stories',
        'AI learning reviews',
        'online course testimonials',
        'Prepfolio learner experience',
    ],
    openGraph: {
        title: 'Student Testimonials | Prepfolio',
        description:
            'Explore real student testimonials and experiences with Prepfolio’s interactive learning platform — see how our courses help learners achieve academic and career success.',
        url: 'https://prepfolio.xyz/testimonials',
        siteName: 'Prepfolio',
        type: 'article',
    },
};


const page = () => {
    return (
        <>
            <Navbar />
            <Testimonial />
            <SeeDemoButton />
        </>
    )
}

export default page
