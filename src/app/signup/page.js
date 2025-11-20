import React from 'react'
import Navbar from '@/components/Navbar'
import SignupPage from '@/components/SignupPage'
import Alert from '@/components/Alert'
import SeeDemoButton from '@/components/SeeDemoButton';


export const metadata = {
  title: 'Signup | Prepfolio',
  description:
    'Create your Prepfolio account to access premium PDF Notes, Practice Questions, and Audio Lessons. Sign up securely to start learning smarter and faster.',
  keywords: [
    'Prepfolio signup',
    'create account',
    'student registration',
    'online learning signup',
    'PDF notes access',
    'practice questions',
    'audio lessons',
    'Prepfolio courses',
    'Razorpay secure signup',
  ],
  openGraph: {
    title: 'Signup | Prepfolio',
    description:
      'Join Prepfolio today and get instant access to expert-curated PDF Notes, Practice Questions, and Audio Lessons for smarter exam preparation.',
    url: 'https://prepfolio.co.in/signup',
    siteName: 'Prepfolio',
    type: 'website',
  },
};


const page = () => {
  return (
    <>
      <Navbar />
      <SignupPage />
      <Alert message='All fields are required. Enter accurate details to ensure smooth signup and course access.' />
      {/* <SeeDemoButton /> */}
    </>
  )
}

export default page
