import React from 'react'
import Navbar from '../../../components/Navbar'
import FAQsDetail1 from '../../../components/FAQsDetail1'
import FAQsDetail2 from '../../../components/FAQsDetail2'

const page = () => {
  return (
    <>
      <Navbar />
      <FAQsDetail1 marginTopValue='120px' />
      <FAQsDetail2 />
    </>
  )
}

export default page
