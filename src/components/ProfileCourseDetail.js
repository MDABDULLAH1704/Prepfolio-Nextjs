'use client';
import React from 'react';
import styles from './ProfileCourseDetail.module.css';
import PDFNotes from './PDFNotes';
import PracticeQuestion from './PracticeQuestion';

const ProfileCourseDetail = ({ id, course }) => {
    const courseTitles = {
        '6900ad49d3212038af1cd2c3': 'BCA 1st Semester',
        '6900ad49d3212038af1cd2c4': 'BCA 3rd Semester',
        '6900ad49d3212038af1cd2c5': 'BCA 5th Semester',
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
