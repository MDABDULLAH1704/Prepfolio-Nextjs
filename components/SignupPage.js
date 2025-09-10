'use client';
import React, { useState } from 'react'
import styles from './SignupPage.module.css'
import InputField from './InputField';


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
            <div className={styles.signup_container}>
                <h1 className={styles.signup_container_h1}>SignUp</h1>
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

                    <button className={styles.signup_container_btn} type='submit'>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignupPage
