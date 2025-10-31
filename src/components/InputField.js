'use client'
import React from 'react'
import styles from './InputField.module.css'

const InputField = ({ label, type, name, value, placeholder, onChange }) => {
    return (
        <>
            <div className={styles.InputField}>
                <label className={styles.InputField_label} htmlFor={name}>{label}</label>
                <input
                    className={styles.InputField_input}
                    type={type}
                    value={value}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                />
            </div>
        </>
    )
}

export default InputField
