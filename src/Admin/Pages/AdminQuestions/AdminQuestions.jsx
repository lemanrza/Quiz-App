import React, { useEffect, useState } from "react";
import styles from "./AdminQuestions.module.css";
import { Navigate, useNavigate } from "react-router-dom";

const AdminQuestions = () => {
  const navigate= useNavigate()
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setFilteredQuestions(data);
      });
  }, []);

  useEffect(() => {
    let filtered = questions;

    if (searchQuery) {
      filtered = filtered.filter((question) =>
        question.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((question) =>
        question.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedDifficulty) {
      filtered = filtered.filter((question) =>
        question.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
      );
    }

    setFilteredQuestions(filtered);
  }, [searchQuery, selectedCategory, selectedDifficulty, questions]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/questions/${id}`, { method: "DELETE" })
      .then(() => {
        setQuestions(questions.filter((question) => question.id !== id));
      })
  };
  const handleUpdate = (question) => {
    navigate(`/admin/editQuestion/${question.id}`);
  };

  return (
    <div className={styles.adminQuestions}>
      <h1>All Questions</h1>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search by Title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.selectInput}
        >
          <option value="">All Categories</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="CSS">CSS</option>
          <option value="GIT">GIT</option>
          <option value="HTML">HTML</option>
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className={styles.selectInput}
        >
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <tr key={question.id}>
                <td>{question.id}</td>
                <td>{question.title}</td>
                <td>{question.category}</td>
                <td>{question.difficulty}</td>
                <td className={styles.buttons}>
                  <button
                    onClick={() => handleDelete(question.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                  <button onClick={() => handleUpdate(question)} className={styles.updateButton}>Update</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No questions found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminQuestions;
