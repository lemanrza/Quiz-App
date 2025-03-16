import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, List, Shield } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => (location.pathname === path ? styles.active : "");

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <span className={styles.symbol}>&lt; &gt;</span>
                <span className={styles.brand}>DevQuiz</span>
            </div>

            <nav className={styles.nav}>
                <button className={`${styles.navLink} ${isActive("/")}`} onClick={() => navigate("/")}>
                    <Home size={18} className={styles.icon} /> Home
                </button>
                <button className={`${styles.navLink} ${isActive("/questions")}`} onClick={() => navigate("/questions")}>
                    <List size={18} className={styles.icon} /> Questions
                </button>
                <button className={styles.adminBtn} onClick={() => navigate("/login")}>
                    <Shield size={18} className={styles.icon} /> Admin
                </button>
            </nav>
        </header>
    );
};

export default Header;

