'use client';
import React, { useState, useEffect } from 'react';
import styles from './SignupDataShow.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';


const SignupDataShow = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('User not logged in');
                setLoading(false);
                router.push('/login');
                return;
            }
            try {
                const res = await fetch('http://localhost:5000/api/auth/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                console.log('Fetch response status:', res.status); // For debugging
                if (!res.ok) {
                    const errorData = await res.json().catch(() => ({}));
                    throw new Error(errorData.message || 'Failed to fetch profile');
                }
                const data = await res.json();
                console.log('Profile API response:', data); // For debugging
                setUser(data.user);
            } catch (err) {
                console.error('Profile fetch error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [router]);

    if (loading) return <p className={styles.SignupDataShow_loading}>Loading Profile Data ...</p>;
    if (error) return <p className={styles.SignupDataShow_error}>{error}</p>;

    return (
        <>
            <div className={styles.SignupDataShow}>
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

            <div className={styles.SignupDataShow_2}>
                <button className={styles.SignupDataShow_2_btn}>
                    <Link href='/courses' className={styles.SignupDataShow_2_link}>
                        Explore Courses <FaArrowRight />
                    </Link>
                </button>
            </div>
        </>
    );
};

export default SignupDataShow;
