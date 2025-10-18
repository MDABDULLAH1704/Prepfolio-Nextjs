'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../../../components/Navbar';
import { useParams } from 'next/navigation';
import ProfileCourseDetail from '../../../../components/ProfileCourseDetail';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;


const page = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('Not logged in');

                const res = await fetch(`${baseURL}/api/courses/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const data = await res.json(); // read JSON once

                if (!res.ok || !data.success) {
                    throw new Error(data.message || 'Course not found');
                }

                setCourse(data.course);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    if (loading) return (
        <>
            <Navbar />
            <p style={{ marginTop: '90px', textAlign: 'center', fontSize: '22px', fontFamily: 'monospace' }}>Loading Course...</p>
        </>
    )

    if (error) return (
        <>
            <Navbar />
            <h2 style={{ marginTop: '90px', textAlign: 'center', color: 'red', fontSize: '20px', fontFamily: 'monospace' }}>{error} ❌</h2>
        </>
    );

    return (
        <>
            <Navbar />
            <ProfileCourseDetail course={course} id={id} />
        </>
    );
};

export default page;