'use client'
import React, { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const oneThirdPoint = window.innerHeight / 2.5; // Changed to 2.5 point
            if (scrollPosition > oneThirdPoint) {
                setIsVisible(false); // Hide the component when scrolled past the 2.5 point   
            } else {
                setIsVisible(true); // Show the component when scrolled back to the top 2.5
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section className={styles.sectionOne}>
                <div className={styles.sectionOne_videoWrapper}>
                    <video
                        className={styles.sectionOne_backgroundVideo}
                        controls={false}
                        autoPlay
                        loop
                        muted
                    >
                        <source src='/HeroVideo.mp4' type='video/mp4' />
                    </video>
                </div>
            </section>

            {isVisible && (
                <section className={styles.sectionTwo}>
                    <h1 className={styles.sectionTwo_h1}>
                        Welcome to
                        <span className={styles.sectionTwo_span1}> Prep</span>
                        <span className={styles.sectionTwo_span2}>folio</span>
                    </h1>
                    <h2 className={styles.sectionTwo_h2}>Learn Smarter, Not Harder</h2>
                    <h3 className={styles.sectionTwo_h3}>Your All-in-One Learning Platform For Notes, Practice Questions & Audio Lessons</h3>

                    <Link href='/courses' className={styles.sectionTwo_btn_link}>
                        <button className={styles.sectionTwo_btn}>
                            Explore Courses
                        </button>
                    </Link>
                </section >
            )}
        </>
    )
}

export default Hero
