'use client';
import { useState, useEffect } from 'react';
import styles from './Alert.module.css'

const Alert = ({ message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 20000);
        return () => clearTimeout(timer); // cleanup to avoid memory leaks
    }, []);

    if (!visible) return null;

    return (
        <div className={styles.alertBox}>
            <span>{message}</span>
            <button className={styles.alertBox_closeBtn} onClick={() => setVisible(false)}>✖</button>
        </div>
    );
};

export default Alert;
