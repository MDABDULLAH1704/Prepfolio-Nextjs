'use client';
import React, { useState } from 'react';
import styles from './PracticeQuestion.module.css';
import { BCAFirstSemesterPracticeQuestions } from '../data/BCA1stSem';
import { BCAThirdSemesterPracticeQuestions } from '../data/BCA3rdSem';
import { BCAFifthSemesterPracticeQuestions } from '../data/BCA5thSem';
import Accordion2 from './Accordion2';


const PracticeQuestion = ({ _id }) => {
    const [speakingIndex, setSpeakingIndex] = useState(null); // To track which explanation is playing
    const [isPaused, setIsPaused] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // To handle modal image

    const firstSemQuestions = BCAFirstSemesterPracticeQuestions[_id];
    const thirdSemQuestions = BCAThirdSemesterPracticeQuestions[_id];
    const fifthSemQuestions = BCAFifthSemesterPracticeQuestions[_id];

    const questions =
        firstSemQuestions || thirdSemQuestions || fifthSemQuestions || [];

    // Function to handle text-to-speech
    const handleSpeak = (text, index) => {
        if (!text) return;
        // Stop any ongoing speech before starting new
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-IN'; // You can change accent (e.g., 'en-US', 'en-GB')
        utterance.rate = 1; // Speed (0.5–2)
        utterance.pitch = 1; // Tone (0–2)
        utterance.onend = () => setSpeakingIndex(null);
        setSpeakingIndex(index);
        setIsPaused(false);
        window.speechSynthesis.speak(utterance);
    };

    // Pause the current speech
    const handlePause = () => {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    // Resume paused speech
    const handleResume = () => {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        }
    };

    // Stop all speech
    const handleStop = () => {
        window.speechSynthesis.cancel();
        setSpeakingIndex(null);
        setIsPaused(false);
    };

    // Open image modal
    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    // Close image modal
    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className={styles.PracticeQuestion}>
                <h2 className={styles.PracticeQuestion_h2}>Practice Questions</h2>

                {questions.length > 0 ? (
                    questions.map((q, index) => (
                        <div key={index} className={styles.PracticeQuestion_div}>
                            <h4 className={styles.PracticeQuestion_div_h4}>{q.subject}</h4>
                            <p className={styles.PracticeQuestion_div_question}>
                                <b>Q{index + 1}.</b> {q.question}
                            </p>
                            <p className={styles.PracticeQuestion_div_answer}>
                                <b>Ans:</b> {q.answer}
                            </p>
                            <div className={styles.PracticeQuestion_div_points}>
                                <p>{q.point1}</p>
                                <p>{q.point2}</p>
                                <p>{q.point3}</p>
                                <p>{q.point4}</p>
                                <p>{q.point5}</p>
                                <p>{q.point6}</p>
                                <p>{q.point7}</p>
                                <p>{q.point8}</p>
                                <p>{q.point9}</p>
                                <p>{q.point10}</p>
                            </div>

                            {/* View Image Answer */}
                            {q.image && (
                                <div
                                    className={styles.PracticeQuestion_div_img}
                                    onClick={() => openImageModal(q.image.src)} // ✅ access .src
                                >
                                    <p>🖼️ View Image Answer</p>
                                </div>
                            )}

                            <div className={styles.ExplanationContainer}>
                                <Accordion2
                                    question='Explanation'
                                    answer={q.explanation}
                                />
                                <div className={styles.ExplanationContainer_TTSButtons}>
                                    {speakingIndex === index ? (
                                        <>
                                            {isPaused ? (
                                                <button
                                                    onClick={handleResume}
                                                    className={styles.ExplanationContainer_resumeButton}
                                                >
                                                    ▶ Resume
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={handlePause}
                                                    className={styles.ExplanationContainer_pauseButton}
                                                >
                                                    ⏸ Pause
                                                </button>
                                            )}
                                            <button
                                                onClick={handleStop}
                                                className={styles.ExplanationContainer_stopButton}
                                            >
                                                ⏹ Stop
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => handleSpeak(q.explanation, index)}
                                            className={styles.ExplanationContainer_speakButton}
                                        >
                                            🔊 Listen Explanation
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className={styles.PracticeQuestion_NoQuestion}>
                        Practice questions not available for this course.
                    </p>
                )}
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div className={styles.ImageModal}>
                    <div className={styles.ImageModal_content}>
                        <button onClick={closeImageModal} className={styles.ImageModal_close}>
                            ❌
                        </button>
                        <img src={selectedImage} alt='Answer' className={styles.ImageModal_img} />
                    </div>
                </div>
            )}
        </>
    )
}

export default PracticeQuestion
