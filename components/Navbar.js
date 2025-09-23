'use client'
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaHome, FaUserGraduate, FaUser, FaUserCircle, FaQuestionCircle, FaEnvelope } from 'react-icons/fa'
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
                        <p><FaUserGraduate className={styles.navbarRight_Icon} /> Courses</p>
                    </Link>
                    <Link href='/signup' className={styles.navbarRightLink}>
                        <p><FaUser className={styles.navbarRight_Icon} /> SignUp/Login</p>
                    </Link>
                    <Link href='/profile' className={styles.navbarRightLink}>
                        <p><FaUserCircle className={styles.navbarRight_Icon} /> Profile</p>
                    </Link>
                    <Link href='/faq' className={styles.navbarRightLink}>
                        <p><FaQuestionCircle className={styles.navbarRight_Icon} /> FAQs</p>
                    </Link>
                    <Link href='/contact' className={styles.navbarRightLink}>
                        <p><FaEnvelope className={styles.navbarRight_Icon} /> Contact</p>
                    </Link>
                </div>

                <div className={`${styles.menu} ${showMenu ? styles.active : ''}`} onClick={handleShowMenu}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {showMenu && (
                <div className={styles.menuList}>
                    <Link href='/' className={styles.menuLink} onClick={handleShowMenu}>
                        <p><FaHome className={styles.menuList_Icon} /> Home</p>
                    </Link>
                    <Link href='/courses' className={styles.menuLink} onClick={handleShowMenu}>
                        <p><FaUserGraduate className={styles.menuList_Icon} /> Courses</p>
                    </Link>
                    <Link href='/signup' className={styles.menuLink} onClick={handleShowMenu}>
                        <p><FaUser className={styles.menuList_Icon} /> SignUp/Login</p>
                    </Link>
                    <Link href='/profile' className={styles.menuLink} onClick={handleShowMenu}>
                        <p><FaUserCircle className={styles.menuList_Icon} /> Profile</p>
                    </Link>
                    <Link href='/faq' className={styles.menuLink} onClick={handleShowMenu}>
                        <p><FaQuestionCircle className={styles.menuList_Icon} /> FAQs</p>
                    </Link>
                    <Link href='/contact' className={styles.menuLink} onClick={handleShowMenu}>
                        <p><FaEnvelope className={styles.menuList_Icon} /> Contact</p>
                    </Link>
                </div>
            )}
        </>
    )
}

export default Navbar
