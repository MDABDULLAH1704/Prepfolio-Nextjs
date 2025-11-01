import React from 'react'
import Navbar from '@/components/Navbar'
import CoursePage from '@/components/CoursePage'
import SeeDemoButton from '@/components/SeeDemoButton';


export const metadata = {
  title: 'Courses | Prepfolio',
  description:
    'Explore Prepfolio courses offering high-quality PDF Notes, Practice Questions, and Audio Lessons. Learn smarter and prepare better with our affordable, expert-curated digital learning materials.',
  keywords: [
    'Prepfolio courses',
    'online learning platform',
    'PDF notes',
    'practice questions',
    'audio lessons',
    'exam preparation',
    'digital learning',
    'affordable courses',
    'study materials',
  ],
  openGraph: {
    title: 'Courses | Prepfolio',
    description:
      'Browse all Prepfolio courses with PDF Notes, Practice Questions, and Audio Lessons designed for students and self-learners.',
    url: 'https://prepfolio.xyz/courses',
    siteName: 'Prepfolio',
    type: 'website',
  },
};


const page = () => {
  return (
    <>
      <Navbar />
      <CoursePage />
      <SeeDemoButton />
    </>
  )
}

export default page
