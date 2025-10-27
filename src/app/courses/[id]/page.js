'use client';
import React, { useState, useEffect } from 'react'
import Navbar from '../../../../components/Navbar'
import { useParams } from 'next/navigation';
import CourseDetail from '../../../../components/CourseDetail';
import { fetchCourseData } from '../../../../utils/fetchCourseDataClient';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;


const Page = () => {
    const { id } = useParams(); // get dynamic param
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCourse = async () => {
            const { course, error } = await fetchCourseData(id, false);
            setCourse(course);
            setError(error);
            setLoading(false);
        };
        getCourse();
    }, [id]);

    // ✅ set page title and description dynamically
    useEffect(() => {
        document.title = 'Course Details | Prepfolio';

        const description =
            'Explore detailed information about each Prepfolio course including PDF Notes, Practice Questions, Audio Lessons, and secure Razorpay payments.';

        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', description);
    }, []);

    if (loading) return (
        <>
            <Navbar />
            <p style={{ marginTop: '90px', textAlign: 'center', fontSize: '22px', fontFamily: 'monospace' }}>Loading Course Detail...</p>
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

export default Page
