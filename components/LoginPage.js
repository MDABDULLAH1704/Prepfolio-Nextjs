'use client';
import React, { useState } from 'react'
import styles from './LoginPage.module.css'
import InputField from './InputField'
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
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

    // handleSubmit Function 
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic frontend validation
        if (!formData.email || !formData.password) {
            alert('Please fill in both email and password');
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                console.log('Login successful:', data);
                localStorage.setItem('token', data.token);
                window.location.href = '/courses';
            } else {
                console.error('Login error:', data.message);
                alert(data.message || 'Email or password is incorrect');
            }
        } catch (err) {
            console.error('Server error:', err);
            alert('Server error. Please try again later.');
        }
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
                        placeholder='Enter Your Email'
                    />
                    <label className={styles.LoginPage_passwordLabel} htmlFor='password'>Password</label>
                    <div className={styles.LoginPage_passwordLabel_div}>
                        <input
                            className={styles.LoginPage_passwordLabel_div_input}
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            name='password'
                            onChange={handleChange}
                            placeholder='Enter Your Password'
                            required
                        />
                        <span
                            className={styles.LoginPage_passwordLabel_div_span}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

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
