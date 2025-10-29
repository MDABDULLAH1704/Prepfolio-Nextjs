'use client';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './SignupDataShow.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'


const SignupDataShow = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loggingOut, setLoggingOut] = useState(false);

    /**
    * ✅ Auto logout helper
    * Clears localStorage, optionally alerts, and redirects to /login
    */
    const autoLogout = useCallback((showAlert = false) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        if (showAlert) {
            alert('You were logged out automatically because your account was accessed from another device.');
        }
        router.push('/login');
    }, [router]);

    /**
     * ✅ Fetch profile and handle session expiration / invalid token
     */
    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) return autoLogout();

            try {
                const res = await fetch('/api/auth', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                // ⚠️ Handle unauthorized / invalid token
                if (res.status === 401) {
                    return autoLogout(true);
                }

                const data = await res.json();

                if (!res.ok) {
                    // Detect custom session expiration message
                    if (data.message?.includes('Session expired')) {
                        return autoLogout(true);
                    }
                    throw new Error(data.message || 'Failed to fetch profile');
                }

                setUser(data.user);
            } catch (err) {
                console.error('Profile fetch error:', err);
                setError('Something went wrong while loading your profile.');
                // Fallback auto-logout for any auth-related errors
                if (err.message.includes('Session expired') || err.message.includes('401')) {
                    autoLogout(true);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [autoLogout]);

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 600,
            delay: 100
        });
    }, []);

    // Logout function
    const handleLogout = () => {
        setLoggingOut(true);
        localStorage.clear();
        setTimeout(() => {
            setLoggingOut(false);
            router.push('/login');
        }, 1000);
    };

    if (loading) return <p className={styles.SignupDataShow_loading}>Loading Profile Data ...</p>;
    if (error) return <p className={styles.SignupDataShow_error}>{error}</p>;
    if (!user) return null;

    return (
        <>
            <div className={styles.SignupDataShow} data-aos='fade'>
                <div className={styles.SignupDataShow_left}>
                    Pro<span>file</span>
                </div>
                <div className={styles.SignupDataShow_right}>
                    <p><b>Name :</b> {user.name}</p>
                    <p><b>Email :</b> {user.email}</p>
                    <p><b>Phone :</b> {user.phone}</p>
                    <p><b>Gender :</b> {user.gender}</p>
                    <p><b>Course :</b> {user.course}</p>
                    <p><b>College/University :</b> {user.college}</p>
                </div>
            </div>

            <div className={styles.SignupDataShow_2} data-aos='fade' data-aos-delay='150'>
                <button className={styles.SignupDataShow_2_btn}>
                    <Link href='/courses' className={styles.SignupDataShow_2_link}>
                        Explore Courses <FaArrowRight />
                    </Link>
                </button>
            </div>

            <div className={styles.SignupDataShow_3} data-aos='fade' data-aos-delay='300'>
                <button className={styles.SignupDataShow_3_btn} onClick={handleLogout} disabled={loggingOut}>
                    {loggingOut ? 'Logging out...' : 'Logout'}
                </button>
            </div>
        </>
    );
};

export default SignupDataShow;
