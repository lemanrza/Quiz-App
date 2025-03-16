import React, { useEffect, useState } from "react";
import styles from "./Questions.module.css";
import { Navigate, useNavigate } from "react-router-dom";

const Questions = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [showAnswer, setShowAnswer] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/questions")
            .then((response) => response.json())
            .then((data) => setQuestions(data));
    }, []);
    const handleViewDetails = (questionId) => {
        navigate(`/questions/${questionId}`);
    };
    const showAnswers = (id) => {
        setShowAnswer(id);
        setTimeout(() => {
            setShowAnswer(null);
        }, 5000);
    };

    return (
        <>
            <h1 className={styles.heading}>Questions List</h1>
            <div className={styles.questionsContainer}>
                {questions.map((question) => (
                    <div key={question.id} className={styles.questionCard}>
                        <h2 className={styles.questionTitle}>{question.title}</h2>
                        <span className={styles.questionDifficulty}>
                            Difficulty: {question.difficulty}
                        </span>
                        <p className={styles.questionCategory}>
                            Category: {question.category}
                        </p>

                        <div className={styles.answerContainer}>
                            {showAnswer === question.id ? (
                                <p className={styles.questionAnswer}>Answer: {question.answers}</p>
                            ) : (
                                <p className={styles.answerHidden}>Answer is hidden</p>
                            )}
                        </div>

                        <div className={styles.buttonGroup}>
                            <button
                                className={styles.showAnswerBtn}
                                onClick={() => showAnswers(question.id)}
                            >
                                {showAnswer === question.id ? "Hidding in 5s" : "👁 Show Answer"}
                            </button>
                            <button onClick={() =>
                                handleViewDetails(question.id)
                            } className={styles.viewDetailsBtn}>View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Questions;
