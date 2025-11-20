import React from 'react'
import Navbar from '@/components/Navbar'
import ContactPage from '@/components/ContactPage'
import SeeDemoButton from '@/components/SeeDemoButton';


export const metadata = {
  title: 'Contact | Prepfolio',
  description:
    'Need help with Prepfolio? Contact our support team for assistance with PDF Notes, Practice Questions, Audio Lessons, or Razorpay payment issues. We are here to help you learn smarter and resolve any queries quickly.',
  keywords: [
    'Prepfolio contact',
    'Prepfolio support',
    'Prepfolio help',
    'PDF notes help',
    'Practice questions support',
    'Audio lessons issues',
    'Razorpay payment support',
    'learning platform contact',
  ],
  openGraph: {
    title: 'Contact | Prepfolio',
    description:
      'Get in touch with the Prepfolio support team for queries related to your learning materials or payments.',
    url: 'https://prepfolio.co.in/contact',
    siteName: 'Prepfolio',
    type: 'website',
  },
};


const page = () => {
  return (
    <>
      <Navbar />
      <ContactPage />
      {/* <SeeDemoButton /> */}
    </>
  )
}

export default page
