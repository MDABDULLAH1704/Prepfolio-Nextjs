'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './SeeDemoButton.module.css';
import { FaArrowDown } from 'react-icons/fa';


const SeeDemoButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/courses-demo');
    };

    return (
        <>
            <div className={styles.SeeDemoButton} onClick={handleClick}>
                <FaArrowDown /> <span>See Demo</span>
            </div>
        </>
    )
}

export default SeeDemoButton
