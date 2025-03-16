import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    categories: {},
    difficulties: {},
  });

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        calculateStats(data);
      });
  }, []);

  const calculateStats = (data) => {
    const total = data.length;

    const categories = data.reduce((acc, question) => {
      acc[question.category] = (acc[question.category] || 0) + 1;
      return acc;
    }, {});

    const difficulties = data.reduce((acc, question) => {
      acc[question.difficulty] = (acc[question.difficulty] || 0) + 1;
      return acc;
    }, {});

    setStats({ total, categories, difficulties });
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <h3>Total Questions</h3>
          <p className={styles.statNumber}>{stats.total}</p>
          <span>Questions in the database</span>
        </div>
        <div className={styles.statCard}>
          <h3>Categories</h3>
          <p className={styles.statNumber}>{Object.keys(stats.categories).length}</p>
          <span>Different question categories</span>
        </div>
        <div className={styles.statCard}>
          <h3>Easy Questions</h3>
          <p className={styles.statNumber}>{stats.difficulties.easy || 0}</p>
          <span>Beginner-friendly questions</span>
        </div>
        <div className={styles.statCard}>
          <h3>Hard Questions</h3>
          <p className={styles.statNumber}>{stats.difficulties.hard || 0}</p>
          <span>Advanced difficulty questions</span>
        </div>
      </div>
      <section className={styles.panel}>
  <h2>Welcome to the Admin Panel</h2>
  <p>
    Manage your developer quiz questions from this central dashboard.
  </p>
  <p>
    From here, you can add new questions, edit existing ones, and manage the content of your DevQuiz application. Use the sidebar navigation to access different sections of the admin panel.
  </p>
  <div className={styles.panelContent}>
    <div className={styles.quickActions}>
      <h3>Quick Actions</h3>
      <ul>
        <li>• Add a new question</li>
        <li>• View and edit existing questions</li>
        <li>• Filter questions by category or difficulty</li>
      </ul>
    </div>
    <div className={styles.tips}>
      <h3>Tips</h3>
      <ul>
        <li>• Use clear, concise language for questions</li>
        <li>• Balance difficulty levels for a better user experience</li>
        <li>• Regularly update content to keep it relevant</li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
};

export default Dashboard;
