'use client';
import React, { useState, useEffect } from 'react';
import styles from './SignupDataShow.module.css';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '../server/utils/tokenUtils';


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

    if (loading) return <p style={{ margin: '150px' }}>Loading profile...</p>;
    if (error) return <p style={{ color: 'red', margin: '150px' }}>{error}</p>;

    return (
        <div className={styles.SignupDataShow}>
            <h1>Profile</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Gender:</strong> {user.gender || 'Not provided'}</p>
            <p><strong>College/University:</strong> {user.college || 'Not provided'}</p>
        </div>
    );
};

export default SignupDataShow;
