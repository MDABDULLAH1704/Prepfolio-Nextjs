'use client';
import React from 'react'
import styles from './CoursePage.module.css'
import CourseItem from './CourseItem';
import All_Course from '../public/course.js'

const CoursePage = () => {
    return (
        <>
            <h2 className={styles.CoursePage_h2}>Learning Made <span>Easy</span></h2>
            <div className={styles.CoursePage}>
                {All_Course.map((item, i) => {
                    return <CourseItem
                        key={i}
                        id={item.id}
                        offer={item.offer}
                        image={item.image}
                        title={item.title}
                        newPrice={item.newPrice}
                        oldPrice={item.oldPrice}
                    />
                })}
            </div>
        </>
    )
}

export default CoursePage
