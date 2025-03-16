import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditQuestion.module.css";

const EditQuestion = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [question, setQuestion] = useState({
        title: "",
        category: "",
        difficulty: "",
        answers: "",
    });

    useEffect(() => {
        fetch(`http://localhost:3000/questions/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched question:", data);
                setQuestion({
                    ...data,
                    difficulty: data.difficulty.charAt(0).toUpperCase() + data.difficulty.slice(1).toLowerCase() 
                });
            })
            .catch((error) => console.error("Error fetching question:", error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestion((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/questions/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(question),
        })
            .then((response) => response.json())
            .then(() => navigate("/admin/adminQuestions"))
            .catch((error) => console.error("Error updating question:", error));
    };

    return (
        <div className={styles.addQuestionContainer}>
            <div className={styles.container}>
                <button
                    className={styles.backButton}
                    onClick={() => navigate("/admin/adminQuestions")}
                >
                    ← Back to Questions
                </button>
                <h2 className={styles.heading}>Edit Question</h2>
                <p className={styles.subText}>Update the question details.</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>Question Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter the question title"
                        value={question.title}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />

                    <div className={styles.row}>
                        <div className={styles.column}>
                            <label>Category</label>
                            <select
                                name="category"
                                value={question.category}
                                onChange={handleChange}
                                className={styles.select}
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="React">React</option>
                                <option value="GIT">GIT</option>
                                <option value="CSS">CSS</option>
                                <option value="HTML">HTML</option>
                            </select>
                        </div>

                        <div className={styles.column}>
                            <label>Difficulty Level</label>
                            <select
                                name="difficulty"
                                value={question.difficulty}
                                onChange={handleChange}
                                className={styles.select}
                                required
                            >
                                <option value="">Select a level</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                    </div>

                    <label>Answer</label>
                    <textarea
                        name="answers"
                        placeholder="Enter the answer to the question"
                        value={question.answers}
                        onChange={handleChange}
                        className={styles.textarea}
                        required
                    ></textarea>

                    <div className={styles.buttonRow}>
                        <button
                            type="button"
                            onClick={() => navigate("/admin/adminQuestions")}
                            className={styles.cancelButton}
                        >
                            Cancel
                        </button>
                        <button type="submit" className={styles.saveButton}>
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditQuestion;
