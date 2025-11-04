'use client';
import React from 'react'
import styles from './CourseDetail.module.css'

const CourseDetail = ({ title, subjects }) => {
    return (
        <>
            <div className={styles.CourseDetail}>
                <h2 className={styles.CourseDetail_h2}>{title}</h2>
                <h3 className={styles.CourseDetail_h3}>Course Content</h3>
                {subjects.map((s, i) => (
                    <div key={i} className={styles.CourseDetail_div}>
                        <h3>{s.subjectTitle}</h3>
                        <p><b>Topics -</b> {s.topicContent}</p>
                    </div>
                ))}
                <h4 className={styles.CourseDetail_h4}>👉 Practice Questions <span>200+</span></h4>
            </div>
        </>
    )
}

export default CourseDetail
