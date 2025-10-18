'use client';
import React from 'react';
import styles from './PDFNotes.module.css';
import PDFViewer from './PDFViewer';
import { BCAFirstSemesterNotesPDFs } from '../data/BCA1stSem';
import { BCAThirdSemesterNotesPDFs } from '../data/BCA3rdSem';
import { BCAFifthSemesterNotesPDFs } from '../data/BCA5thSem';


const renderPDFButtons = (pdfGroups, buttonPrefix) => {
    if (!pdfGroups) return null;
    return pdfGroups.map((groupObj, groupIndex) => (
        <div key={groupIndex} className={styles.renderPDFButtons_div}>
            <h4 className={styles.renderPDFButtons_div_h4}>
                {`📝${buttonPrefix} ${groupIndex + 1}`}
            </h4>
            {groupObj.pdfs.map((file, index) => (
                <PDFViewer
                    key={index}
                    fileName={`/pdfs/${file}`}
                    buttonText={`${buttonPrefix} ${String.fromCharCode(65 + index)}`} // A, B, C...
                />
            ))}
        </div>
    ));
};


const PDFNotes = ({ title, _id }) => {
    const FirstSemNotesPDFs = BCAFirstSemesterNotesPDFs[_id];
    const ThirdSemNotesPDFs = BCAThirdSemesterNotesPDFs[_id];
    const FifthSemNotesPDFs = BCAFifthSemesterNotesPDFs[_id];
    return (
        <>
            <div className={styles.PDFNotes}>
                <h2 className={styles.PDFNotes_title}>{title}</h2>
                <div className={styles.PDFNotes_div}>{renderPDFButtons(FirstSemNotesPDFs, 'Download Notes')}</div>
                <div className={styles.PDFNotes_div}>{renderPDFButtons(ThirdSemNotesPDFs, 'Download Notes')}</div>
                <div className={styles.PDFNotes_div}>{renderPDFButtons(FifthSemNotesPDFs, 'Download Notes')}</div>

                {!FirstSemNotesPDFs && !ThirdSemNotesPDFs && !FifthSemNotesPDFs && (
                    <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#555' }}>
                        PDFs not available for this course.
                    </p>
                )}
            </div>
        </>
    )
}

export default PDFNotes
