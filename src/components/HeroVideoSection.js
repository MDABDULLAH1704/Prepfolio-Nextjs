'use client'
import React from 'react';
import styles from './HeroVideoSection.module.css';

const HeroVideoSection = () => {
    console.log('HeroVideoSection loaded');
    return (
        <section className={styles.HeroVideoSection}>
            <div className={styles.HeroVideoSection_videoWrapper}>
                <video
                    className={styles.HeroVideoSection_backgroundVideo}
                    controls={false}
                    autoPlay
                    loop
                    muted
                >
                    <source src='/HeroVideo.mp4' type='video/mp4' />
                </video>
            </div>
        </section>
    );
};

export default HeroVideoSection;
