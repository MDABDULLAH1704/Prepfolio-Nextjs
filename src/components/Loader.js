'use client'
import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';

const Loader = () => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => {
                setCount(prev => prev - 1);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [count]);

    return (
        <div className={styles.Loader_loaderWrapper}>
            <div className={styles.Loader_count}>{count > 0 && count}</div>
            <div className={styles.Loader_loader}></div>
        </div >
    );
};

export default Loader;