import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../../Components/Cards/Card";


const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.home}>
            <h1 className={styles.brand}>Welcome to DevQuiz</h1>
            <p className={styles.mainText}>
                Test your knowledge with our collection of developer questions across various categories.
                From HTML to React, we've got you covered.
            </p>
            <div className={styles.buttons}>
                <button className={styles.primaryBtn} onClick={() => navigate("/questions")}>
                    Browse Questions →
                </button>
            </div>

            <div className={styles.cards}>
                <Card
                    title="300+ Questions"
                    subtitle="Covering all major web technologies"
                    description="Our database includes questions on HTML, CSS, JavaScript, React, and more to help you prepare for interviews."
                />
                <Card
                    title="Difficulty Levels"
                    subtitle="From beginner to expert"
                    description="Questions are categorized by difficulty level so you can challenge yourself appropriately."
                />
                <Card
                    title="Save Favorites"
                    subtitle="Create your own study list"
                    description="Save your favorite questions to review later and track your progress over time."
                />
            </div>
        </div>
    );
};

export default Home;
