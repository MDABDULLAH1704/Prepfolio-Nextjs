'use client';
import { useState, useEffect } from 'react';
import styles from './RazorpayCheckoutButton.module.css';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const RazorpayCheckoutButton = ({ amount, courseId, courseTitle }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem('token'));
        }
    }, []);

    const handlePayment = async () => {
        if (!token) {
            router.push('/signup');
            return;
        }
        setLoading(true);

        try {
            const orderRes = await fetch(`${baseURL}/api/payment/create-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ amount, courseId }),
            });

            let orderData;
            try {
                orderData = await orderRes.json();
            } catch (err) {
                const text = await orderRes.text();
                console.error('create-order returned non-JSON:', text);
                alert('Server error creating payment order. Check server logs.');
                setLoading(false);
                return;
            }

            if (!orderRes.ok || !orderData.success) {
                console.error('create-order failed:', orderData);
                alert(orderData.message || 'Failed to create payment order.');
                setLoading(false);
                return;
            }

            const options = {
                key: orderData.keyId,
                amount: orderData.amount,
                currency: 'INR',
                name: 'Your Learning Platform',
                description: `Purchase Course: ${courseTitle}`,
                order_id: orderData.orderId,
                handler: async function (response) {
                    try {
                        const verifyRes = await fetch(`${baseURL}/api/payment/verify-payment`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`,
                            },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                courseId,
                            }),
                        });

                        const verifyData = await verifyRes.json();
                        if (verifyRes.ok && verifyData.success) {
                            alert('Payment successful! Course unlocked.');
                            router.push('/profile');
                        } else {
                            console.error('verify-payment failed:', verifyData);
                            alert(verifyData.message || 'Payment verification failed.');
                        }
                    } catch (err) {
                        console.error('verify-payment error:', err);
                        alert('Server verification error. Check console.');
                    }
                },
                prefill: { name: '', email: '' },
                theme: { color: '#556cd6' },
            };

            if (!window.Razorpay) {
                alert('Razorpay SDK not loaded. Try reloading the page.');
                setLoading(false);
                return;
            }

            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function (response) {
                console.error('Razorpay payment.failed', response);
                alert('Payment failed. Please try again.');
            });
            rzp.open();
        } catch (err) {
            console.error('Payment error:', err);
            alert('Something went wrong with payment. Check console.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            {/* Load Razorpay script */}
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="afterInteractive"
            />

            <button className={styles.RazorpayCheckoutButton} onClick={handlePayment} disabled={loading}>
                {loading ? 'Processing...' : 'Buy Course'}
            </button>
        </>
    );
};

export default RazorpayCheckoutButton;
