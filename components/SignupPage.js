'use client';
import React, { useState, useEffect } from 'react'
import styles from './SignupPage.module.css'
import InputField from './InputField';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;


const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        course: '',
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

    // handleSubmit Function 
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!/^\d{10}$/.test(formData.phone)) {
            alert('Phone number must be exactly 10 digits');
            return;
        }
        if (!/^(?=.*[!@#$%^&*])(?=.{6,15})/.test(formData.password)) {
            alert('Password must be 6-15 characters and include a special character');
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(`${baseURL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                localStorage.setItem('token', data.token);
                window.location.href = '/login';
            } else {
                console.error('Signup error:', data.message);
                alert(data.message || 'Signup failed');
            }
        } catch (err) {
            console.error('Server error:', err);
            alert('Server error. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 600,
            delay: 100
        });
    }, []);

    return (
        <>
            <div className={styles.SignupPage} data-aos='zoom-in'>
                <h1 className={styles.SignupPage_h1}>Sign<span>Up</span></h1>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label='Name'
                        type='text'
                        value={formData.name}
                        name='name'
                        onChange={handleChange}
                        placeholder='Enter Your Full Name'
                    />
                    <InputField
                        label='Email'
                        type='email'
                        value={formData.email}
                        name='email'
                        onChange={handleChange}
                        placeholder='Enter Your Email'
                    />
                    <InputField
                        label='Phone Number'
                        type='tel'
                        value={formData.phone}
                        name='phone'
                        onChange={handleChange}
                        placeholder='Enter Your Phone Number'
                    />
                    <div className={styles.SignupPage_gender_course}>
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
                        <label htmlFor='course'>Course</label>
                        <select
                            name='course'
                            id='course'
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value=''>Select Course</option>
                            <option value='bca'>BCA</option>
                        </select>
                    </div>
                    <InputField
                        label='College/University Name'
                        type='text'
                        value={formData.college}
                        name='college'
                        onChange={handleChange}
                        placeholder='Enter Your Full College or University Name'
                    />
                    <label className={styles.SignupPage_passwordLabel} htmlFor='password'>Password</label>
                    <div className={styles.SignupPage_passwordLabel_div}>
                        <input
                            className={styles.SignupPage_passwordLabel_div_input}
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            name='password'
                            onChange={handleChange}
                            placeholder='Enter Your Password'
                            required
                        />
                        <span
                            className={styles.SignupPage_passwordLabel_div_span}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <button
                        className={styles.SignupPage_btn}
                        type='submit'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing...' : 'SignUp'}
                    </button>

                    <p className={styles.SignupPage_p}>Already have an Account?
                        <span><Link href='/login' className={styles.SignupPage_p_link} >Login</Link></span>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignupPage
