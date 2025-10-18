'use client';
import React, { useState, useEffect } from 'react'
import Navbar from '../../../../components/Navbar'
import { useParams } from 'next/navigation';
import CourseDetail from '../../../../components/CourseDetail';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;


const page = () => {
    const { id } = useParams(); // get dynamic param
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await fetch(`${baseURL}/api/courses/${id}`);
                const data = await res.json();

                if (!res.ok) throw new Error(data.message || 'Course not found');

                setCourse(data.course);
            } catch (err) {
                console.error('Error fetching course:', err);
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
            <h2 style={{ marginTop: '90px', textAlign: 'center', color: 'red', fontSize: '20px', fontFamily: 'monospace' }}>
                {error} ❌
            </h2>
        </>
    );

    if (!course) return (
        <>
            <Navbar />
            <h2 style={{ marginTop: '90px', textAlign: 'center', color: 'red' }}>
                Course Not Found ❌
            </h2>
        </>
    );

    return (
        <>
            <Navbar />
            <CourseDetail {...course} />
        </>
    )
}

export default page
