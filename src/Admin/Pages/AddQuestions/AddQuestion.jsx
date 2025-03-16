import React, { useEffect, useState } from "react";
import styles from "./AddQuestion.module.css";
import { useNavigate } from "react-router-dom";
const AddQuestion = () => {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ title: "", category: "", difficulty: "", answers: "" });

  const addQuestion = async (e) => {
    e.preventDefault()
    if (!newQuestion.title) return
    const response = await fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    });
    if (response.ok) {
      const addedQuestion = await response.json()
      setQuestions([...questions, addedQuestion]);
      setNewQuestion({ title: "", category: "", difficulty: "", answers: "" })

    }
  }
  return (
    <div className={styles.addQuestionContainer}>
      <div className={styles.container}>
        <button className={styles.backButton}>← Back to Questions</button>
        <h2 className={styles.heading}>Add New Question</h2>
        <p className={styles.subText}>
          Create a new question for the DevQuiz platform.
        </p>

        <form onSubmit={addQuestion} className={styles.form}>
          <label>Question Title</label>
          <input
            type="text"
            placeholder="Enter the question title"
            value={newQuestion.title}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, title: e.target.value })
            }
            className={styles.input}
          />

          <div className={styles.row}>
            <div className={styles.column}>
              <label>Category</label>
              <select
                value={newQuestion.category}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, category: e.target.value })
                }
                className={styles.select}
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
                value={newQuestion.difficulty}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, difficulty: e.target.value })
                }
                className={styles.select}
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
            placeholder="Enter the answer to the question"
            value={newQuestion.answers}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, answers: e.target.value })
            }
            className={styles.textarea}
          ></textarea>

          <div className={styles.buttonRow}>
            <button onClick={() => {
              setNewQuestion({ title: "", category: "", difficulty: "", answers: "" })
              navigate("/admin/adminQuestions")
            }} type="button" className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.saveButton}>
              Save Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddQuestion