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
        gender: '',
        college: '',
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
                        value={formData.name}
                        name='name'
                        onChange={handleChange}
                    />
                    <InputField
                        label='Email'
                        type='email'
                        value={formData.email}
                        name='email'
                        onChange={handleChange}
                    />
                    <InputField
                        label='Phone Number'
                        type='tel'
                        value={formData.phone}
                        name='phone'
                        onChange={handleChange}
                    />
                    <div className={styles.SignupPage_gender}>
                        <label htmlFor='gender'>Gender</label>
                        <select
                            name='gender'
                            id='gender'
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value=''>Select Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <InputField
                        label='College/University'
                        type='text'
                        value={formData.college}
                        name='college'
                        onChange={handleChange}
                    />
                    <InputField
                        label='Password'
                        type='password'
                        value={formData.password}
                        name='password'
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
