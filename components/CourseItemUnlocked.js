// 
'use client';
import React from 'react';
import styles from './CourseItemUnlocked.module.css';
import { useRouter } from 'next/navigation';

const CourseItemUnlocked = (props) => {
    const router = useRouter();

    const handleViewCourses = () => {
        const normalizedId = props.id.replace('-detail', '');
        router.push(`/profile/${normalizedId}`);
    };

    return (
        <div className={styles.CourseItemUnlocked} onClick={handleViewCourses}>
            <h3 className={styles.CourseItemUnlocked_h3_1}>Course Unlocked! ✅</h3>
            <h3 className={styles.CourseItemUnlocked_h3_2}>{props.title}</h3>
            <h5 className={styles.CourseItemUnlocked_h5}>{props.description}</h5>
            <button className={styles.CourseItemUnlocked_btn}>
                View Course
            </button>
        </div>
    );
};

export default CourseItemUnlocked;

