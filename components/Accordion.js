'use client'
import React, { useState } from 'react'
import styles from './Accordion.module.css'
import { FiPlus, FiMinus } from 'react-icons/fi'


const Accordion = ({ question, answer, isOpen = false }) => {
    const [open, setOpen] = useState(isOpen)

    const toggleAccordion = () => {
        setOpen(!open)
    }

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
                    <p>{answer}</p>
                </div>
            )}
        </div>
    )
}

export default Accordion
