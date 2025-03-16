import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, List, PlusCircle, LogOut } from "lucide-react";
import styles from "./AdminHeader.module.css";
import { useAuth } from "../../../Services/Context/Context";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsAdmin } = useAuth();

  const isActive = (path) => (location.pathname === path ? styles.active : "");

  const handleLogout = () => {
    setTimeout(() => {
      setIsAdmin(false);
    }, 1000);
    navigate("/");
    localStorage.removeItem("isAdmin");
  };


  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <span className={styles.symbol}>&lt; &gt;</span>
        <span className={styles.brand}>DevQuiz</span>
      </div>

      <nav className={styles.nav}>
        <button className={`${styles.navLink} ${isActive("/dashboard")}`} onClick={() => navigate("/admin")}>
          <Home size={18} className={styles.icon} /> Dashboard
        </button>
        <button className={`${styles.navLink} ${isActive("/adminQuestions")}`} onClick={() => navigate("/admin/adminQuestions")}>
          <List size={18} className={styles.icon} /> Admin Questions
        </button>
        <button className={styles.navLink} onClick={() => navigate("/admin/addQuestions")}>
          <PlusCircle size={18} className={styles.icon} /> Add Question
        </button>
        <button className={styles.adminBtn} onClick={handleLogout}>
          <LogOut size={18} className={styles.icon} /> Log Out
        </button>
      </nav>
    </header>
  );
};

export default Header;
