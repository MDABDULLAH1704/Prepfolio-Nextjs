'use client';
import React from 'react'
import Navbar from '../../../../components/Navbar'
import { useParams } from 'next/navigation';
import CourseDetail from '../../../../components/CourseDetail';
import All_Course from '../../../../public/course.js';

const page = () => {
    const { id } = useParams(); // get dynamic param
    const course = All_Course.find(c => c.id === id); // find course by id

    if (!course) return <p>Course Not Found</p>;

    return (
        <>
            <Navbar />
            <CourseDetail {...course} />
        </>
    )
}

export default page
