'use client'
import React from 'react'
import styles from './FAQsDetail1.module.css'
import Accordion from './Accordion'
import Link from 'next/link'
import SeeDemoButton from './SeeDemoButton'

const FAQsDetail1 = ({ marginTopValue }) => {
    return (
        <>
            <section className={styles.FAQsDetail1One} style={{ marginTop: marginTopValue }}>
                <h2 className={styles.FAQsDetail1One_h2}  >Your Future <span>Awaits</span></h2>
                <h3 className={styles.FAQsDetail1One_h3}>Take the First Step <span>Towards Success!</span></h3>
                <Link href='/signup' className={styles.FAQsDetail1One_btn_link}>
                    <button className={styles.FAQsDetail1One_btn}>SignUp</button>
                </Link>
            </section>

            <section className={styles.FAQsDetail1Two}>
                <h2 className={styles.FAQsDetail1Two_h2}>How It <span>Works</span></h2>
                <Accordion
                    isOpen={true}
                    question='Step 1 - SignUp'
                    answer='Create your account in seconds and start exploring courses designed for students. Our mission is to provide quality courses at an affordable price, making education accessible to everyone.'
                />
                <Accordion
                    question='Step 2 - Explore & Enroll in Courses'
                    answer='Start by browsing our semester-wise courses to find the perfect fit for your academic goals. Once you have made your selection, our secure and easy-to-use payment system ensures your transaction is smooth and protected. After payment, you will receive instant access to the course, so you can begin learning immediately without any delays.'
                />
                <Accordion
                    question='Step 3 - Get Flexible Learning Resources'
                    answer='Gain instant access to a comprehensive suite of learning materials you can use anytime, anywhere. Your course includes detailed PDF notes, a wide range of practice questions to test your knowledge, and insightful voice lessons to deepen your understanding.'
                />
            </section>

            <section className={styles.FAQsDetail1Three}>
                <h2 className={styles.FAQsDetail1Three_h2}>Feature <span>Highlights</span></h2>
                <Accordion
                    isOpen={true}
                    question='1. PDF Notes'
                    answer='Get clean, semester-wise notes for your courses, all ready to download for easy offline study.'
                />
                <Accordion
                    question='2. Practice Questions'
                    answer='Sharpen your skills and test your knowledge with a wide range of practice questions to help you prepare for exams.'
                />
                <Accordion
                    question='3. Audio Lessons'
                    answer='Master complex topics and learn efficiently while on the go with our engaging audio lessons.'
                />
                <Accordion
                    question='4. Secure Access'
                    answer='Get secure, uninterrupted access to the course for a full 6 months with a single, one-time payment. This small fee helps us cover the costs of maintaining the platform and ensures a seamless, high-quality learning experience for you. Our mission is to make quality education accessible and affordable for everyone.'
                />
            </section>
        </>
    )
}

export default FAQsDetail1
