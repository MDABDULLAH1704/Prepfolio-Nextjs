// 
'use client'
import React, { useEffect, useState } from 'react'
import styles from './ProfilePage.module.css'
import CourseItemUnlocked from './CourseItemUnlocked.js'
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
import { FaWhatsapp } from 'react-icons/fa';


const ProfilePage = () => {
    const [unlockedCourses, setUnlockedCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        fetchPurchasedCourses();
    }, []);

    const fetchPurchasedCourses = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Not logged in');

            const res = await fetch(`${baseURL}/payment/active-courses`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await res.json();
            if (!res.ok || !data.success) throw new Error(data.message || 'Failed to fetch courses');

            setUnlockedCourses(data.courses || []);
        } catch (err) {
            console.error(err);
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    // openWhatsApp Function 
    const openWhatsApp = () => {
        window.open('https://chat.whatsapp.com/EPvgaxBIcwzHkyCwesx7XJ', '_blank');
    };

    // Toggle hover effect every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            setIsHovered(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    if (loading) return <p className={styles.ProfilePage_loading}>Loading Your Course...</p>;
    if (error) return (
        <>
            <h2 className={styles.ProfilePage_h2}>Your Courses</h2>
            <p className={styles.ProfilePage_p}>No Courses Bought Yet</p>
            <p className={styles.CoursePage_courseNotFound}>No Course ❌</p>
        </>
    )

    return (
        <>
            <div className={styles.ProfilePage}>
                <h2 className={styles.ProfilePage_h2}>Your Courses</h2>
                {unlockedCourses.length > 0 ? (
                    <div className={styles.ProfilePage_h2_div}>
                        {unlockedCourses.map((course) => {
                            return (
                                <CourseItemUnlocked
                                    key={course._id}
                                    id={course._id}
                                    title={course.title}
                                    description={course.description}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <p className={styles.ProfilePage_p}>No Courses Bought Yet</p>
                )}
            </div>

            <div className={`${styles.ProfilePage_whatsapp} 
            ${isHovered ? styles.ProfilePage_whatsapp_hover : ''}`}
                onClick={openWhatsApp}>
                <FaWhatsapp />
                <p>Join</p>
            </div>
        </>
    )
}

export default ProfilePage
