'use client';
import React from 'react';
import styles from './PDFViewer.module.css';

const PDFViewer = ({ fileName, buttonText }) => {
    return (
        <>
            <div className={styles.PDFViewer}>
                <a
                    href={fileName}
                    download={fileName.split('/').pop()}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className={styles.pdfButton}>{buttonText}</button>
                </a >
            </div>
        </>
    );
};

export default PDFViewer;