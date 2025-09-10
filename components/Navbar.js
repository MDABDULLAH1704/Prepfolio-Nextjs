'use client'
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Link href='/' className={styles.navbarLeftLink}>
                        <Image
                            src='/Prepfolio_logo.png'
                            alt='Logo'
                            width={150}
                            height={45}
                            priority
                        />
                    </Link>
                </div>

                <div className={styles.navbarRight}>
                    <Link href='/courses' className={styles.navbarRightLink}>
                        <p>Courses</p>
                    </Link>
                    <Link href='/signup' className={styles.navbarRightLink}>
                        <p>SignUp</p>
                    </Link>
                    <Link href='/profile' className={styles.navbarRightLink}>
                        <p>Profile</p>
                    </Link>
                    <Link href='/faq' className={styles.navbarRightLink}>
                        <p>FAQ</p>
                    </Link>
                    <Link href='/contact' className={styles.navbarRightLink}>
                        <p>Contact</p>
                    </Link>
                </div>

                <div className={`${styles.menu} ${showMenu ? styles.active : ''}`} onClick={handleShowMenu}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {showMenu && (
                <div className={styles.menuList}>
                    <Link href='/' className={styles.menuLink} onClick={handleShowMenu}>
                        <p>Home</p>
                    </Link>
                    <Link href='/courses' className={styles.menuLink} onClick={handleShowMenu}>
                        <p>Courses</p>
                    </Link>
                    <Link href='/signup' className={styles.menuLink} onClick={handleShowMenu}>
                        <p>SignUp</p>
                    </Link>
                    <Link href='/profile' className={styles.menuLink} onClick={handleShowMenu}>
                        <p>Profile</p>
                    </Link>
                    <Link href='/faq' className={styles.menuLink} onClick={handleShowMenu}>
                        <p>FAQ</p>
                    </Link>
                    <Link href='/contact' className={styles.menuLink} onClick={handleShowMenu}>
                        <p>Contact</p>
                    </Link>
                </div>
            )}
        </>
    )
}

export default Navbar
