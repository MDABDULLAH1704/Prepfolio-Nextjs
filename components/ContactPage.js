'use client';
import React from 'react'
import styles from './ContactPage.module.css'
import { FaEnvelopeOpen, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
    // openEmail Function
    const openEmail = () => {
        window.open('mailto:ansarimdali010@gmail.com');
    };

    // openWhatsApp Function 
    const openWhatsApp = () => {
        window.open('https://chat.whatsapp.com/EPvgaxBIcwzHkyCwesx7XJ', '_blank');
    };


    return (
        <>
            <section className={styles.contactPageSec1}>
                <h2 className={styles.contactPageSec1_h2}>Contact <span>Us</span></h2>
                <div className={styles.contactPageSec1_div}>
                    <p className={styles.contactPageSec1_div_p1}>Need help with a Course, have a Question, or want to provide Feedback. Join our WhatsApp Group or Contact us via Email, We will get back to you as soon as possible.</p>
                    <p className={styles.contactPageSec1_div_p2}> You can also suggest a New Course you'd like to see added to our platform.</p>
                </div>
            </section>

            <section className={styles.contactPageSec2}>
                <h2 className={styles.contactPageSec2_h2}>Contact <span>Information</span></h2>
                <div className={styles.contactPageSec2_div}>
                    <div className={styles.contactPageSec2_div_email}>
                        <FaEnvelopeOpen className={styles.contactPageSec2_div_email_icon} />
                        <div className={styles.contactPageSec2_div_email_p}>
                            <p className={styles.contactPageSec2_div_email_p1}>Email Us</p>
                            <p className={styles.contactPageSec2_div_email_p2} onClick={openEmail}>ansarimdali010@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.contactPageSec2_div_whatsapp}>
                        <FaWhatsapp className={styles.contactPageSec2_div_whatsapp_icon} />
                        <div className={styles.contactPageSec2_div_whatsapp_p}>
                            <p className={styles.contactPageSec2_div_whatsapp_p1}>Join WhatsApp Community</p>
                            <p className={styles.contactPageSec2_div_whatsapp_p2} onClick={openWhatsApp}>Join</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage
