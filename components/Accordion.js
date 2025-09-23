'use client'
import React, { useState, useEffect } from 'react'
import styles from './Accordion.module.css'
import { FiPlus, FiMinus } from 'react-icons/fi'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Accordion = ({ question, answer, isOpen = false }) => {
    const [open, setOpen] = useState(isOpen)

    const toggleAccordion = () => {
        setOpen(!open)
    }

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 600,
            delay: 100
        });
    }, []);

    return (
        <div className={styles.accordion}>
            <button
                className={styles.accordionHeader}
                onClick={toggleAccordion}
                aria-expanded={open}
            >
                <span className={styles.question}>{question}</span>
                {open ? <FiMinus size={25} /> : <FiPlus size={25} />}
            </button>

            {open && (
                <div className={styles.accordionContent}>
                    <p data-aos='fade'>{answer}</p>
                </div>
            )}
        </div>
    )
}

export default Accordion
