'use client';
import React, { useEffect, useRef } from 'react';
import styles from './MatrixBackground.module.css'


const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Resize canvas to fit screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        // const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
        const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%'.split('');
        const words = ['Learn', 'Smart', 'Prepfolio', 'PDF', 'Note'];

        // Combine both letters and words
        const matrixChars = [...lettersArray, ...words];

        const fontSize = 8;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // subtle trail
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00FF00'; // bright green matrix effect
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                // const text = letters.charAt(Math.floor(Math.random() * letters.length));
                const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];

                ctx.fillText(text, i * fontSize, y * fontSize);

                // reset drop
                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        };

        const interval = setInterval(draw, 30);
        window.addEventListener('resize', resizeCanvas);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <>
            <section className={styles.MatrixBackground}>
                <div className={styles.MatrixBackground_div}>
                    <canvas ref={canvasRef} className={styles.MatrixBackground_canvas} />
                </div>
            </section>
        </>
    )
}

export default MatrixBackground
