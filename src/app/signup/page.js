import React from 'react'
import Navbar from '../../../components/Navbar'
import SignupPage from '../../../components/SignupPage'
import Alert from '../../../components/Alert'

const page = () => {
  return (
    <>
      <Navbar />
      <SignupPage />
      <Alert message='All fields are required. Enter accurate details to ensure smooth signup and course access.' />
    </>
  )
}

export default page
