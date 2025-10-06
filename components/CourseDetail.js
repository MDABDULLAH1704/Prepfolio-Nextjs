'use client';
import React from 'react'
import styles from './CourseDetail.module.css'

const CourseDetail = (props) => {
    return (
        <>
            <div className={styles.CourseDetail}>
                <h3>Subject - {subject1}</h3>
                <p>{props.topic1}</p>
                <h3>Subject - {subject2}</h3>
                <p>{props.topic2}</p>
                <h3>Subject - {subject3}</h3>
                <p>{props.topic3}</p>
                <h3>Subject - {subject4}</h3>
                <p>{props.topic4}</p>
            </div>
        </>
    )
}

export default CourseDetail
