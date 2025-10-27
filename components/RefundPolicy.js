'use client'
import React from 'react'
import styles from './RefundPolicy.module.css'

const RefundPolicy = () => {
    return (
        <div className={styles.refundContainer}>
            <h2 className={styles.Refund_h2}>Refund & Cancellation Policy</h2>
            <p><strong>Effective Date:</strong> October 26, 2025</p>

            <section>
                <h3>1. Introduction</h3>
                <p>
                    At <strong>Prepfolio</strong>, we aim to provide high-quality PDF notes, practice questions, and audio lessons
                    to help students learn effectively. Please read this Refund & Cancellation Policy carefully before
                    making any purchase on our platform.
                </p>
            </section>

            <section>
                <h3>2. Digital Product Nature</h3>
                <p>
                    All products and materials available on Prepfolio are digital in nature. Once a course or content has been
                    purchased and accessed (viewed, downloaded, or listened to), it is considered delivered and non-refundable.
                </p>
                <p>
                    Users are therefore advised to review course details, previews, and descriptions carefully before purchasing.
                </p>
            </section>

            <section>
                <h3>3. No Refund After Access</h3>
                <p>Since the content is instantly accessible after payment:</p>
                <ul>
                    <li>We do not provide refunds, returns, or exchanges once access to the course or content is granted.</li>
                    <li>
                        Refund requests for reasons such as “I didn’t like the content,” “purchased by mistake,” or “changed my mind”
                        will not be accepted.
                    </li>
                </ul>
            </section>

            <section>
                <h3>4. Refunds for Payment Issues</h3>
                <p>Refunds are only applicable in the following limited cases:</p>
                <ul>
                    <li>Duplicate or accidental payment (charged twice for the same course).</li>
                    <li>Payment deducted but access not granted due to a technical error on our side.</li>
                </ul>
                <p>
                    In such cases, please contact our support team within <strong>24–48 hours</strong> of the transaction with your
                    payment receipt and transaction ID. After verification, refunds will be processed within
                    <strong> 7–10 business days</strong> to your original payment method.
                </p>
            </section>

            <section>
                <h3>5. Cancellations</h3>
                <p>
                    Since digital products are delivered instantly, course purchases cannot be canceled once payment is completed.
                </p>
                <p>
                    Users can choose to stop using the platform at any time, but this does not qualify for a refund.
                </p>
            </section>

            <section>
                <h3>6. Payment Gateway (Razorpay)</h3>
                <p>
                    All payments are securely processed through <strong>Razorpay</strong>. In case of any payment failure, delay, or
                    transaction issue, you may also refer to Razorpay’s dispute policy or contact their support at{' '}
                    <a href='https://razorpay.com/support/'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ color: '#035096', textDecoration: 'underline' }}
                    >
                        https://razorpay.com/support/
                    </a>.
                </p>
                <p>
                    Prepfolio does not store or manage your card/bank details — all sensitive information is handled securely
                    by Razorpay.
                </p>
            </section>

            <section>
                <h3>7. User Responsibility</h3>
                <p>Before purchasing any course or material, users are advised to:</p>
                <ul>
                    <li>
                        Carefully read the course description, preview the content (if available), and confirm compatibility
                        with their device.
                    </li>
                    <li>Ensure that their internet connection and device support digital content access.</li>
                    <li>
                        Provide accurate payment details and email ID during checkout to ensure smooth delivery of purchased content.
                    </li>
                </ul>
            </section>

            <section>
                <h3>8. Contact for Refund Queries</h3>
                <p>If you believe you are eligible for a refund under this policy, please contact us at:</p>
                <p>📧 <strong>Email:</strong> ansarimdali010@gmail.com</p>
                <p>🕓 <strong>Response Time:</strong> Within 2 business days</p>
                <p>💬 <strong>Refund Processing Time (if approved):</strong> 7–10 business days</p>
            </section>

            <section>
                <h3>9. Policy Updates</h3>
                <p>
                    Prepfolio reserves the right to modify or update this Refund & Cancellation Policy at any time.
                    Any changes will be reflected on this page with a new <strong>“Effective Date.”</strong>
                </p>
            </section>
        </div>
    )
}

export default RefundPolicy
