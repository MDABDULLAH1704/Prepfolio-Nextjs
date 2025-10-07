'use client';
import React from 'react'
import styles from './CourseDetail.module.css'

const CourseDetail = ({ title, subject1, topic1, subject2, topic2, subject3, topic3, subject4, topic4, }) => {
    return (
        <>
            <div className={styles.CourseDetail}>
                <h2 className={styles.CourseDetail_h2}>{title}</h2>
                <h3 className={styles.CourseDetail_h3}>Course Content</h3>
                <div className={styles.CourseDetail_div}>
                    <h3>{subject1}</h3>
                    <p><b>Topics -</b> {topic1}</p>
                </div>
                <div className={styles.CourseDetail_div}>
                    <h3>{subject2}</h3>
                    <p><b>Topics -</b> {topic2}</p>
                </div>
                <div className={styles.CourseDetail_div}>
                    <h3>{subject3}</h3>
                    <p><b>Topics -</b> {topic3}</p>
                </div>
                <div className={styles.CourseDetail_div}>
                    <h3>{subject4}</h3>
                    <p><b>Topics -</b> {topic4}</p>
                </div>
            </div>
        </>
    )
}

export default CourseDetail
