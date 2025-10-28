'use client'
import React from 'react'
import styles from './TermsConditions.module.css'

const TermsConditions = () => {
    return (
        <>
            <div className={styles.termsContainer}>
                <h2 className={styles.Terms_h2}>Terms & Conditions</h2>
                <p><strong>Effective Date:</strong> October 26, 2025</p>

                <section>
                    <h3>1. Introduction</h3>
                    <p>
                        Welcome to <strong>Prepfolio</strong> (“we,” “our,” “us”). By accessing or using our website, mobile app,
                        or any of our services, you (“user,” “student,” or “you”) agree to comply with these Terms and Conditions.
                        Please read them carefully before using Prepfolio.
                    </p>
                </section>

                <section>
                    <h3>2. About Prepfolio</h3>
                    <p>Prepfolio is an online learning platform that provides students with:</p>
                    <ul>
                        <li>PDF Notes</li>
                        <li>Practice Questions</li>
                        <li>Audio Lessons and other study materials</li>
                    </ul>
                    <p>Our goal is to help learners enhance their knowledge and prepare effectively for exams.</p>
                </section>

                <section>
                    <h3>3. Acceptance of Terms</h3>
                    <p>By registering, accessing, or using Prepfolio, you:</p>
                    <ul>
                        <li>Agree to be bound by these Terms & Conditions.</li>
                        <li>Confirm that the information you provide (name, email, phone number, etc.) is accurate and true.</li>
                        <li>
                            Acknowledge that Prepfolio reserves the right to modify these terms at any time. Continued use of
                            the website after any changes means you accept those updates.
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>4. User Account & Responsibilities</h3>
                    <p>
                        To access our learning materials, you must create an account by providing your name, email, phone number,
                        password, gender, college name, and course name.
                    </p>
                    <p>You agree to:</p>
                    <ul>
                        <li>Keep your account credentials confidential.</li>
                        <li>Be responsible for all activities under your account.</li>
                        <li>Notify us immediately if you suspect any unauthorized use.</li>
                        <li>Not share your login credentials with others (single user per account policy).</li>
                    </ul>
                    <p>
                        Prepfolio reserves the right to suspend or terminate accounts found violating these terms.
                    </p>
                </section>

                <section>
                    <h3>5. Use of Platform</h3>
                    <p>You agree not to misuse the Prepfolio platform. Specifically, you shall not:</p>
                    <ul>
                        <li>Copy, share, or redistribute our content (PDFs, audio, questions, etc.) without permission.</li>
                        <li>Use the platform for commercial or illegal activities.</li>
                        <li>Attempt to hack, reverse-engineer, or harm our systems.</li>
                        <li>Post abusive, misleading, or harmful content.</li>
                    </ul>
                    <p>Violation of these rules may result in suspension or legal action.</p>
                </section>

                <section>
                    <h3>6. Intellectual Property Rights</h3>
                    <p>
                        All content available on Prepfolio — including study materials, text, graphics, logos, videos, and audio —
                        is the property of Prepfolio and protected under applicable copyright laws.
                    </p>
                    <p>
                        You may access materials only for personal learning purposes. Unauthorized distribution, copying, or resale
                        of content is strictly prohibited.
                    </p>
                </section>

                <section>
                    <h3>7. Payments & Subscriptions</h3>
                    <p>
                        All payments for courses or materials are securely processed through <strong>Razorpay</strong>.
                        By making a payment, you agree to:
                    </p>
                    <ul>
                        <li>Provide valid and accurate payment details.</li>
                        <li>Authorize Razorpay to process your transaction.</li>
                        <li>Acknowledge that Prepfolio does not store any card or banking details.</li>
                    </ul>
                    <p>
                        Once a payment is confirmed, access to the course or content is automatically granted as per your plan.
                    </p>
                </section>

                <section>
                    <h3>8. Refunds & Cancellations</h3>
                    <p>
                        Refunds are governed by our <a 
                        href='/refund-policy' 
                        target='_blank'
                        style={{ color: '#035096', textDecoration: 'underline' }}
                        >Refund & Cancellation Policy</a>.
                        We encourage users to review it before making a purchase.
                        In general, once digital content is accessed or downloaded, it is non-refundable unless otherwise stated.
                    </p>
                </section>

                <section>
                    <h3>9. Privacy</h3>
                    <p>
                        Your use of Prepfolio is also governed by our <a 
                        href='/privacy-policy'
                        target='_blank'
                        style={{ color: '#035096', textDecoration: 'underline' }}
                        > Privacy Policy</a>, which explains how we collect, use, and protect your personal data.
                        By agreeing to these Terms, you also accept our Privacy Policy.
                    </p>
                </section>

                <section>
                    <h3>10. Third-Party Services</h3>
                    <p>
                        Prepfolio may use third-party tools or services such as:
                    </p>
                    <ul>
                        <li>Razorpay for payments</li>
                        <li>Analytics tools for performance tracking</li>
                    </ul>
                    <p>
                        We are not responsible for the actions or policies of these third parties. Please refer to their respective
                        terms and privacy policies.
                    </p>
                </section>

                <section>
                    <h3>11. Limitation of Liability</h3>
                    <p>Prepfolio is not responsible for:</p>
                    <ul>
                        <li>Any loss of data or service interruption.</li>
                        <li>Any indirect or consequential damages arising from use of our platform.</li>
                        <li>Errors in content, or delays in content updates.</li>
                    </ul>
                    <p>
                        We strive to ensure all content is accurate and updated, but we do not guarantee complete error-free material.
                    </p>
                </section>

                <section>
                    <h3>12. Termination of Access</h3>
                    <p>We may suspend or permanently terminate user access if:</p>
                    <ul>
                        <li>You violate any terms of this agreement.</li>
                        <li>Fraudulent or illegal activity is detected.</li>
                        <li>Payment disputes or chargebacks occur.</li>
                    </ul>
                    <p>
                        You may delete your account at any time by contacting
                        <strong> ansarimdali010@gmail.com</strong>.
                    </p>
                </section>

                <section>
                    <h3>13. Governing Law & Jurisdiction</h3>
                    <p>
                        These Terms are governed by and construed in accordance with the laws of India.
                    </p>
                </section>

                <section>
                    <h3>14. Contact Us</h3>
                    <p>For any questions, complaints, or clarifications regarding these Terms, contact us:</p>
                    <p style={{ marginTop: '3px' }}>📧 <strong>Email:</strong> ansarimdali010@gmail.com</p>
                </section>
            </div>
        </>
    )
}

export default TermsConditions
