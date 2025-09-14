'use client';
import React, { useState } from 'react'
import styles from './LoginPage.module.css'
import InputField from './InputField'
import Link from 'next/link';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // handleChange Function 
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', formData);
        // Implement further login logic
    };

    return (
        <>
            <div className={styles.LoginPage}>
                <h1 className={styles.LoginPage_h1}>Log<span>in</span></h1>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Email"
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                    />

                    <button className={styles.LoginPage_btn} type="submit">Login</button>

                    <p className={styles.LoginPage_p}>Don't have an account?
                        <span><Link href='/signup' className={styles.LoginPage_p_link} > SingUp </Link></span>
                    </p>
                </form>
            </div>
        </>
    )
}

export default LoginPage
