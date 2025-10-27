'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../../../components/Navbar';
import { useParams, useRouter } from 'next/navigation';
import ProfileCourseDetail from '../../../../components/ProfileCourseDetail';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchCourseData } from '../../../../utils/fetchCourseDataClient';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = () => {
    const { id } = useParams();
    const router = useRouter();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        const fetchProfileCourse = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('Not logged in');

                // 1️⃣ Check user's purchased courses
                const resPurchased = await fetch(`${baseURL}/payment/active-courses`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const purchasedData = await resPurchased.json();
                if (!resPurchased.ok || !purchasedData.success)
                    throw new Error(purchasedData.message || 'Failed to fetch user courses');

                const userCourses = purchasedData.courses || [];
                const isPurchased = userCourses.some(
                    (c) => c._id === id || c.urlCourseDetail === id
                );

                if (!isPurchased) {
                    setHasAccess(false);
                    throw new Error('You have not purchased this course. Please buy it to access.');
                }

                setHasAccess(true);

                // 2️⃣ Fetch actual course detail (protected)
                const { course, error } = await fetchCourseData(id, true);
                if (error) throw new Error(error);
                setCourse(course);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileCourse();
    }, [id]);

    // ✅ set page title and description dynamically
    useEffect(() => {
        document.title = 'My Course | Prepfolio';

        const description =
            'View your purchased or enrolled courses on Prepfolio, including PDF Notes, Practice Questions, and Audio Lessons — all accessible in your profile dashboard.';

        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', description);
    }, []);


    if (error)
        return (
            <>
                <Navbar />
                <div style={{ marginTop: '90px', textAlign: 'center' }}>
                    <h2 style={{ color: 'red', fontSize: '22px', fontFamily: 'monospace' }}>{error} ❌</h2>
                    {!hasAccess && (
                        <button
                            onClick={() => router.push('/courses')}
                            style={{
                                marginTop: '20px',
                                background: '#035096',
                                color: '#ffffff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '2px',
                                fontFamily: 'monospace',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'all 0.2s ease-in-out',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderRadius = '10px';
                                e.currentTarget.style.background = '#1f66a8';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderRadius = '2px';
                                e.currentTarget.style.background = '#035096';
                            }}
                        >
                            Go to Buy Course <FaArrowLeft style={{ marginTop: '2px', marginLeft: '5px' }} />
                        </button>
                    )}
                </div>
            </>
        );

    return (
        <>
            <Navbar />
            <ProfileCourseDetail course={course} id={id} />
        </>
    );
};

export default Page;
