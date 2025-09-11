'use client';
import React, { useState } from 'react'
import styles from './SignupPage.module.css'
import InputField from './InputField';
import Link from 'next/link';


const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Implement further signup logic
    };

    return (
        <>
            <div className={styles.SignupPage}>
                <h1 className={styles.SignupPage_h1}>Sign<span>Up</span></h1>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label='Name'
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <InputField
                        label='Email'
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputField
                        label='Phone Number'
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <InputField
                        label='Password'
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <InputField
                        label='Confirm Password'
                        type='password'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <button className={styles.SignupPage_btn} type='submit'>SignUp</button>

                    <p className={styles.SignupPage_p}>Already have an Account?
                        <span><Link href='/login' className={styles.SignupPage_p_link} > Login </Link></span>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignupPage
