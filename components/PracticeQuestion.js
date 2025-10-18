'use client';
import React from 'react';
import styles from './PracticeQuestion.module.css';
import { BCAFirstSemesterPracticeQuestions } from '../data/BCA1stSem';
import { BCAThirdSemesterPracticeQuestions } from '../data/BCA3rdSem';
import { BCAFifthSemesterPracticeQuestions } from '../data/BCA5thSem';


const PracticeQuestion = ({ _id }) => {
    const firstSemQuestions = BCAFirstSemesterPracticeQuestions[_id];
    const thirdSemQuestions = BCAThirdSemesterPracticeQuestions[_id];
    const fifthSemQuestions = BCAFifthSemesterPracticeQuestions[_id];

    const questions =
        firstSemQuestions || thirdSemQuestions || fifthSemQuestions || [];

    return (
        <>
            <div className={styles.PracticeQuestion}>
                <h2 className={styles.PracticeQuestion_h2}>Practice Questions</h2>

                {questions.length > 0 ? (
                    questions.map((q, index) => (
                        <div key={index} className={styles.PracticeQuestion_div}>
                            <h4 className={styles.PracticeQuestion_div_h3}>{q.subject}</h4>
                            <p className={styles.PracticeQuestion_div_p1}>
                                <b>Q{index + 1}:</b> {q.question}
                            </p>
                            <p className={styles.PracticeQuestion_div_p2}>
                                <b>Answer:</b> {q.answer}
                            </p>
                            <p className={styles.PracticeQuestion_div_p3}>
                                <b>Explanation:</b> {q.explanation}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className={styles.PracticeQuestion_NoQuestion}>
                        Practice questions not available for this course.
                    </p>
                )}
            </div>
        </>
    )
}

export default PracticeQuestion
