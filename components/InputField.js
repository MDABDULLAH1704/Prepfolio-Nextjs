'use client'
import React from 'react'
import styles from './InputField.module.css'

const InputField = ({ label, type, name, value, onChange }) => {
    return (
        <>
            <div className={styles.InputField}>
                <label className={styles.InputField_label} htmlFor={name}>{label}</label>
                <input
                    className={styles.InputField_input}
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                />
            </div>
        </>
    )
}

export default InputField
