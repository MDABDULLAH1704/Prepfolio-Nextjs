'use client';
import React from 'react';
import styles from './ProfileCourseDetail.module.css';
import PDFNotes from './PDFNotes';
import PracticeQuestion from './PracticeQuestion';

const ProfileCourseDetail = ({ id, course }) => {
    const courseTitles = {
        '68e93b977befe575bac0a80b': 'BCA 1st Semester',
        '68e93b977befe575bac0a810': 'BCA 3rd Semester',
        '68e93b977befe575bac0a815': 'BCA 5th Semester',
    };

    const title = courseTitles[id] || course?.title || 'Course Detail';

    return (
        <>
            <PDFNotes title={title} _id={id} />
            <PracticeQuestion _id={id} />
        </>
    );
};

export default ProfileCourseDetail;
