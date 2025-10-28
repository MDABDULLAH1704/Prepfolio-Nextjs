'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <>
            <Navbar />
            <div
                style={{
                    height: '75vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
                }}
            >
                <h1 style={{ fontSize: '15px', fontWeight: '400' }}>
                    404 | This page could not be found.
                </h1>

                <Link
                    href='/'
                    style={{
                        marginTop: '20px',
                        textDecoration: 'none',
                        color: 'var(--white-color1)',
                        borderRadius: '3px',
                        backgroundColor: 'var(--blue-color1)',
                        padding: '8px 16px',
                        transition: 'background-color  0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--blue-color4)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--blue-color1)')}
                >
                    Go back home ←
                </Link>
            </div>
        </>
    );
}
