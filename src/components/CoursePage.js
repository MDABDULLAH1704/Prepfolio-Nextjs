'use client';
import React, { useEffect, useState } from 'react'
import styles from './CoursePage.module.css'
import CourseItem from './CourseItem';
import { API_BASE_URL } from '@/server/utils/apiBase';


const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // const res = await fetch(`/api/courses/all`);
                const res = await fetch(`${API_BASE_URL}/courses/all`);
                const data = await res.json();

                if (!res.ok || !data.success) {
                    throw new Error(data.message || 'Failed to load courses');
                }

                setCourses(data.courses);
            } catch (err) {
                console.error('Error fetching courses:', err);
                setError(err.message || 'Something went wrong while fetching courses.');
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) return <p className={styles.CoursePage_loading}>Loading Courses...</p>;

    if (error) return (
        <>
            <h2 className={styles.CoursePage_h2}>Learning Made <span>Easy</span></h2>
            <p className={styles.CoursePage_error}>{error}</p>
            <p className={styles.CoursePage_courseNotFound}>Courses Not Found ❌</p>
        </>
    )

    return (
        <>
            <h2 className={styles.CoursePage_h2}>Learning Made <span>Easy</span></h2>
            <div className={styles.CoursePage}>
                {courses.map((course) => (
                    <CourseItem
                        key={course._id}
                        id={course._id}
                        urlCourseDetail={course.urlCourseDetail}
                        offer={course.offer}
                        title={course.title}
                        description={course.description}
                        newPrice={course.newPrice}
                        oldPrice={course.oldPrice}
                    />
                ))}
            </div>
        </>
    )
}

export default CoursePage
