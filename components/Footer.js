'use client'
import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className={styles.Footer1}>
                <div>
                    Prep<span>folio</span>
                </div>
                <div>
                    <Link href='/privacy-policy' className={styles.Footer1_link}>
                        Privacy Policy
                    </Link>
                </div>
                <div>
                    <Link href='/terms-and-conditions' className={styles.Footer1_link}>
                        Terms & Conditions
                    </Link>
                </div>
                <div>
                    <Link href='/refund-policy' className={styles.Footer1_link}>
                        Refund Policy
                    </Link>
                </div>
            </div>

            <div className={styles.Footer2}>
                <hr />
                <p className={styles.Footer2_p1}>&copy; {currentYear} Prepfolio. All rights reserved.</p>
                <p className={styles.Footer2_p2}>Made with 💖 by Prepfolio.</p>
            </div>
        </>
    )
}

export default Footer
