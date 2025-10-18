'use client'
import React from 'react'
import styles from './FAQsDetail2.module.css'
import Accordion from './Accordion'


const FAQsDetail2 = () => {
    return (
        <>
            <section className={styles.FAQsDetail2}>
                <h2 className={styles.FAQsDetail2_h2}>Common <span>Questions</span></h2>
                <Accordion
                    isOpen={true}
                    question='Q1. What if my colleges syllabus is slightly different?'
                    answer='IF you notice a difference in the syllabus, you can suggest new topics or subjects in the comment section. We welcome your feedback and use it to continuously improve our content and align with various university requirements. IF you have already purchased a course, you will receive updates that are made based on your feedback.'
                />
                <Accordion
                    question='Q2. Are all semester courses free or paid?'
                    answer='Paid, because our Courses require a small fee to cover the platforms maintenance and operating costs. Our vision is to provide high-quality learning materials at a very affordable price, making education accessible to all students.'
                />
                <Accordion
                    question='Q3. Are the semester courses separate or bundled together?'
                    answer='Our courses are structured individually on a semester-by-semester basis. This allows you the flexibility to enroll only in the specific semester you need.'
                />
                <Accordion
                    question='Q4. How do I access the semester-wise notes?'
                    answer='Once you have enrolled in a course, all course materials, including the semester-wise notes, will be available in your Profile section.'
                />
                <Accordion
                    question='Q5. Are the notes updated according to the latest syllabus?'
                    answer='Yes, our notes are regularly updated to align with the latest university and college syllabus. You can also suggest subjects or topics based on your college and university in the Comment section.'
                />
                <Accordion
                    question='Q6. Can I download the notes as PDF files?'
                    answer='Yes, notes are available for download in PDF format for easy offline access.'
                />
                <Accordion
                    question='Q7. How are the practice questions structured by topic?'
                    answer='The practice questions are structured by topic to help you focus on specific concepts as you study.'
                />
                <Accordion
                    question='Q8. Do practice questions include solutions or explanations?'
                    answer='Yes, all practice questions include detailed solutions and explanations to help you understand the concepts thoroughly.'
                />
                <Accordion
                    question='Q9. What materials are provided in each semester course?'
                    answer='PDF Notes, Practice Questions, Voice Lessons.'
                />
                <Accordion
                    question='Q10. Can I study at my own pace or is there a fixed schedule?'
                    answer='Yes, all of our courses are designed for self-paced learning. You can access all materials at any time and work through them on your own schedule. There is no fixed schedule or deadline.'
                />
                <Accordion
                    question='Q11. What is the purpose of voice lessons?'
                    answer='The voice lessons are designed to make learning easier by explaining difficult concepts in a simple, conversational way. This helps you grasp and retain the information more effectively.'
                />
            </section>
        </>
    )
}

export default FAQsDetail2
