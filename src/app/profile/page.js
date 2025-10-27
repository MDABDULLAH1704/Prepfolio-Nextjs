import React from 'react'
import Navbar from '../../../components/Navbar'
import SignupDataShow from '../../../components/SignupDataShow'
import ProfilePage from '../../../components/ProfilePage'


export const metadata = {
  title: 'Profile | Prepfolio',
  description:
    'Access your Prepfolio profile to view personal information, enrolled courses, and manage your learning preferences.',
  keywords: [
    'Prepfolio profile',
    'user dashboard',
    'online learning profile',
    'my account',
    'course management',
    'student dashboard',
    'Prepfolio login',
    'study profile',
  ],
  openGraph: {
    title: 'Profile | Prepfolio',
    description:
      'View your Prepfolio profile, update your information, and access your enrolled courses in one place.',
    url: 'https://prepfolio.xyz/profile',
    siteName: 'Prepfolio',
    type: 'profile',
  },
};


const page = () => {
  return (
    <>
      <Navbar />
      <SignupDataShow />
      <ProfilePage />
    </>
  )
}

export default page
