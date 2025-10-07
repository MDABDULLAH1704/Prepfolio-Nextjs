'use client';
import React, { useEffect } from 'react'
import styles from './CourseItem.module.css'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/navigation';

const CourseItem = (props) => {
    const router = useRouter();

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 600,
            delay: 100
        });
    }, []);

    const handleViewCourse = () => {
        router.push(`/courses/${props.id}`); // navigate to dynamic course page
    }

    return (
        <>
            <div className={styles.CourseItem} data-aos='slide-up'>
                <h4 className={styles.CourseItem_h4}>{props.offer}% OFF</h4>
                <Image
                    src={props.image}
                    alt='Course Img'
                    width='280'
                    height='150'
                    className={styles.CourseItem_img}
                    priority
                />
                <h3 className={styles.CourseItem_h3}>{props.title}</h3>
                <p className={styles.CourseItem_p}>&#8377;{props.newPrice} <span>&#8377;{props.oldPrice}</span></p>
                <button className={styles.CourseItem_btn1} onClick={handleViewCourse}>
                    View Course
                </button>
                <button className={styles.CourseItem_btn2}>Buy Course</button>
            </div>
        </>
    )
}

export default CourseItem
