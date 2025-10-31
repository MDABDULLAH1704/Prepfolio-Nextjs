'use client';
import React, { useState, useEffect } from 'react';
import styles from './Feedback.module.css';
import { API_BASE_URL } from '@/server/utils/apiBase';
import { useRouter } from 'next/navigation';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa'

/**
 * Utility to decode a JWT (no verification) to read "id" and "name" claims.
 */
function decodeJwt(token) {
    try {
        const payload = token.split('.')[1];
        const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
        return decoded;
    } catch {
        return null;
    }
}

const Feedback = ({ onFeedbackSubmit }) => {
    const router = useRouter();
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getToken = () => (typeof window === 'undefined' ? null : localStorage.getItem('token'));

    // 🟢 Fetch user info (via /auth or JWT decode)
    useEffect(() => {
        const token = getToken();
        if (!token) {
            setIsLoggedIn(false);
            return;
        }

        fetch(`${API_BASE_URL}/auth`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(async (r) => {
                if (!r.ok) throw new Error('no server session');
                const data = await r.json();

                // if backend returns user object
                if (data?.user?._id) setUserId(data.user._id);
                else if (data?._id) setUserId(data._id);

                if (data?.user?.name) setName(data.user.name);
                else if (data?.name) setName(data.name);

                setIsLoggedIn(true);
            })
            .catch(() => {
                // fallback: decode token directly
                const decoded = decodeJwt(token);
                if (decoded?.id || decoded?._id) {
                    setUserId(decoded.id || decoded._id);
                    setName(decoded.name || '');
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            });
    }, []);

    // 🟢 Count words
    useEffect(() => {
        const wc =
            message.trim().length === 0 ? 0 : message.trim().split(/\s+/).filter(Boolean).length;
        setWordCount(wc);
    }, [message]);

    // 🟢 Submit feedback
    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        if (!isLoggedIn) {
            setError('Please login or signup to submit feedback.');
            return;
        }
        if (wordCount === 0) {
            setError('Please write your feedback before submitting.');
            return;
        }
        if (wordCount > 100) {
            setError('Feedback cannot exceed 100 words.');
            return;
        }

        setSubmitting(true);
        try {
            const token = getToken();
            const payload = { userId, name, message };

            const res = await fetch(`${API_BASE_URL}/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok || data.error) throw new Error(data.error || 'Failed to submit feedback.');

            setMessage('');
            setError('');
            setWordCount(0);

            if (onFeedbackSubmit) onFeedbackSubmit(data.feedback);

            alert('Thank you for your feedback!');
        } catch (err) {
            setError(err.message || 'Submit failed.');
        } finally {
            setSubmitting(false);
        }
    }

    // 🟢 Handlers
    const handleSignupLogin = () => {
        router.push('/login');
    };

    const handleDisabledClick = () => {
        if (!isLoggedIn && !submitting) {
            alert('Please signup or login to submit feedback.');
        }
    };

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 600,
            delay: 100
        });
    }, []);

    return (
        <>
            <div className={styles.Feedback} data-aos='zoom-in'>
                <h2 className={styles.Feedback_h2}>Share Your <span>Feedback</span></h2>

                <form onSubmit={handleSubmit} className={styles.Feedback_form}>
                    <label className={styles.Feedback_form_label1}>Name</label>
                    <input
                        type='text'
                        className={styles.Feedback_form_input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Your Name'
                        readOnly={isLoggedIn}
                    />

                    <label className={styles.Feedback_form_label2}>Feedback (Max 100 words)</label>
                    <textarea
                        className={styles.Feedback_form_textarea}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Share what you liked, what could be improved, or any suggestions to make Prepfolio better...'
                    />

                    <div className={styles.Feedback_form_div1}>
                        <div>{wordCount}/100 <span>Words</span></div>
                        <div>{message.length} <span>Chars</span></div>
                    </div>

                    {error && <div className={styles.Feedback_form_div2_error}>{error}</div>}

                    <div className={styles.Feedback_form_div3}>
                        <button
                            type='submit'
                            disabled={submitting}
                            onClick={handleDisabledClick}
                            className={`${styles.Feedback_form_div3_btnSubmit} ${!isLoggedIn || submitting
                                ? styles.Feedback_form_div3_btnSubmit_disabled
                                : ''
                                }`}
                        >
                            {submitting ? 'Submitting...' : 'Submit Feedback'}
                        </button>

                        {!isLoggedIn && (
                            <button
                                type='button'
                                onClick={handleSignupLogin}
                                className={styles.Feedback_form_div3_btn2}
                            >
                                Signup/Login
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <Link href='/testimonials' className={styles.Feedback_testimonial_btn_link}>
                <button className={`${styles.Hero_btn} ${styles.Feedback_testimonial_btn}`}>
                    Read Testimonials <FaArrowRight />
                </button>
            </Link>
        </>
    );
};

export default Feedback;
