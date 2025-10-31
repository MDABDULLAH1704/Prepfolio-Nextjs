'use client'
import React, { useState, useEffect } from 'react'
import styles from './Testimonial.module.css'
import { API_BASE_URL } from '@/server/utils/apiBase';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Testimonial = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchFeedbacks() {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE_URL}/feedback`);
            const data = await res.json();
            if (data.ok) setFeedbacks(data.feedbacks || []);
        } catch (err) {
            console.error("Failed to fetch feedbacks", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    return (
        <>
            <div className={styles.Testimonial}>
                <h2 className={styles.Testimonial_h2}>Student <span>Testimonials</span></h2>

                {loading && <div className={styles.Testimonial_loading}>Loading...</div>}

                {feedbacks.length === 0 && !loading && (
                    <div className={styles.Testimonial_feedback}>No feedback yet. Be the first!</div>
                )}

                {!loading && feedbacks.length > 0 && (
                    <div className={styles.Testimonial_wrapper}>
                        <p className={styles.scrollHint}>
                            <FaArrowLeft className={styles.scrollArrow} />
                            Swipe to see more
                            <FaArrowRight className={styles.scrollArrow} />
                        </p>
                        <ul className={styles.Testimonial_ul}>
                            {feedbacks.map((fb) => (
                                <li key={fb._id || fb.createdAt} className={styles.Testimonial_li}>
                                    <div className={styles.Testimonial_li_div1}>
                                        <strong>— @{fb.name || 'Anonymous'}</strong>
                                    </div>
                                    <p className={styles.Testimonial_li_p}>{fb.message}</p>
                                    <div className={styles.Testimonial_li_div2}>
                                        {new Date(fb.createdAt).toLocaleString()}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div >
        </>
    )
}

export default Testimonial
