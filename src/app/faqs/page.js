import React from 'react'
import Navbar from '@/components/Navbar'
import FAQsDetail1 from '@/components/FAQsDetail1'
import FAQsDetail2 from '@/components/FAQsDetail2'
import Footer from '@/components/Footer';
import SeeDemoButton from '@/components/SeeDemoButton';


export const metadata = {
  title: 'FAQs | Prepfolio',
  description:
    'Find answers to frequently asked questions about Prepfolio — including payments via Razorpay, course access, PDF Notes, Practice Questions, and Audio Lessons.',
  keywords: [
    'Prepfolio FAQs',
    'Prepfolio help',
    'Prepfolio support',
    'online learning FAQs',
    'course access issues',
    'Razorpay payments',
    'digital learning support',
    'Prepfolio questions',
    'study materials help',
  ],
  openGraph: {
    title: 'FAQs | Prepfolio',
    description:
      'Explore frequently asked questions about Prepfolio courses, payments, study materials, and account access.',
    url: 'https://prepfolio.co.in/faqs',
    siteName: 'Prepfolio',
    type: 'website',
  },
};


const page = () => {
  return (
    <>
      <Navbar />
      <FAQsDetail1 marginTopValue='120px' />
      <FAQsDetail2 />
      <Footer />
      <SeeDemoButton />
    </>
  )
}

export default page
