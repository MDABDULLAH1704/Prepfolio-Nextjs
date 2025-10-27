'use client'
import React, { useState, useEffect } from 'react'
import styles from './Accordion2.module.css'
import { FiPlus, FiMinus } from 'react-icons/fi'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Accordion2 = ({ question, answer }) => {
    const [open, setOpen] = useState(false)

    const toggleAccordion = () => {
        setOpen(!open)
    }

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100
        });
    }, []);

    return (
        <div className={styles.accordion2}>
            <button
                className={styles.accordionHeader2}
                onClick={toggleAccordion}
                aria-expanded={open}
            >
                <span className={styles.question2}>{question}</span>
                {open ? <FiMinus size={25} /> : <FiPlus size={25} />}
            </button>

            {open && (
                <div className={styles.accordionContent2}>
                    <p data-aos='fade'>{answer}</p>
                </div>
            )}
        </div>
    )
}

export default Accordion2
