'use client'
import React from 'react'
import styles from './PrivacyPolicy.module.css'

const PrivacyPolicy = () => {
    return (
        <>

            <div className={styles.PrivacyPolicyContainer}>
                <h2 className={styles.PrivacyPolicy_h2}>Privacy Policy</h2>
                <p><strong>Effective Date:</strong> October 26, 2025</p>

                <section>
                    <h3>1. Introduction</h3>
                    <p>
                        Welcome to <strong>Prepfolio</strong> (“we,” “our,” “us”). Prepfolio is an online learning platform
                        that provides PDF notes, practice questions, and audio lessons to students.
                        We respect your privacy and are committed to protecting your personal data.
                        This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or mobile services.
                    </p>
                </section>

                <section>
                    <h3>2. Information We Collect</h3>
                    <p>We collect the following information from users during registration or while using our services:</p>

                    <h4>a. Personal Information</h4>
                    <ul>
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Gender</li>
                        <li>Course Name</li>
                        <li>College/University Name</li>
                        <li>Password (encrypted before storage)</li>
                    </ul>

                    <h4>b. Payment Information</h4>
                    <p>
                        When you make a payment, we collect necessary details through <strong>Razorpay</strong>, our secure payment gateway.
                        We do not store your credit/debit card or bank details on our servers.
                        Razorpay may collect and process this data as per its own <a href='https://razorpay.com/privacy/'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ color: '#035096', textDecoration: 'underline' }}
                        >
                            Privacy Policy
                        </a>.
                    </p>
                </section>

                <section>
                    <h3>3. How We Use Your Information</h3>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Create and manage your Prepfolio account</li>
                        <li>Provide access to study materials and features</li>
                        <li>Process payments securely through Razorpay</li>
                        <li>Improve our website and services</li>
                        <li>Send important updates, newsletters, and offers (you can opt out anytime)</li>
                        <li>Prevent fraud and ensure platform security</li>
                    </ul>
                </section>

                <section>
                    <h3>4. Data Storage and Security</h3>
                    <p>
                        We use secure servers and encryption techniques to store your information.
                        Your password is hashed before saving in our database.
                        We take reasonable measures to prevent unauthorized access, alteration, or destruction of your data.
                    </p>
                </section>

                <section>
                    <h3>5. Sharing Your Information</h3>
                    <p>We do not sell or rent your personal information. We may share limited information with:</p>
                    <ul>
                        <li>Razorpay (for processing payments)</li>
                        <li>Service Providers (for hosting, analytics, or communication)</li>
                        <li>Legal Authorities (if required by law or to prevent fraud)</li>
                    </ul>
                </section>

                <section>
                    <h3>6. Your Rights</h3>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access and update your information</li>
                        <li>Request deletion of your data</li>
                        <li>Withdraw consent for promotional emails</li>
                        <li>Contact us for any privacy-related concerns</li>
                    </ul>
                    <p>
                        To exercise these rights, contact us at <strong>ansarimdali010@gmail.com</strong>.
                    </p>
                </section>

                <section>
                    <h3>7. Third-Party Links</h3>
                    <p>
                        Our website may include links to third-party websites or payment portals (like Razorpay).
                        We are not responsible for their content or privacy practices.
                    </p>
                </section>

                <section>
                    <h3>8. Updates to This Policy</h3>
                    <p>
                        We may update this Privacy Policy from time to time.
                        Any changes will be reflected with a new “Effective Date” on this page.
                    </p>
                </section>

                <section>
                    <h3>9. Contact Us</h3>
                    <p>
                        If you have any questions or concerns about this Privacy Policy, please contact us:
                    </p>
                    <p style={{marginTop: '3px'}}>
                        📧 <strong>Email:</strong> ansarimdali010@gmail.com
                    </p>
                </section>
            </div>
        </>
    )
}

export default PrivacyPolicy
