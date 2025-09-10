'use client'
import React from 'react'
import styles from './InputField.module.css'

const InputField = ({ label, type, name, value, onChange }) => {
    return (
        <>
            <div className={styles.input_group}>
                <label className={styles.input_group_label} htmlFor={name}>{label}</label>
                <input
                    className={styles.input_group_input}
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
