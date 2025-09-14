'use client'
import React, { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import HeroVideoSection from './HeroVideoSection'
import Loader from './Loader'


const Hero = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

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

    // isLoading useEffect
    useEffect(() => {
        const fallbackTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(fallbackTimer);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <HeroVideoSection />
            )}

            {isVisible && !isLoading && (
                <section className={styles.Hero}>
                    <h1 className={styles.Hero_h1}>
                        Welcome to
                        <span className={styles.Hero_span1}> Prep</span>
                        <span className={styles.Hero_span2}>folio</span>
                    </h1>
                    <h2 className={styles.Hero_h2}>Learn Smarter, Not Harder</h2>
                    <h3 className={styles.Hero_h3}>Your All-in-One Learning Platform For PDF Notes, Practice Questions, Audio Lessons & More</h3>
                    <Link href='/courses' className={styles.Hero_btn_link}>
                        <button className={styles.Hero_btn}>
                            Explore Courses <FaArrowRight />
                        </button>
                    </Link>
                </section >
            )}
        </>
    )
}

export default Hero
