import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css"; 

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorMessage}>Oops! Page not found</h2>
      <p className={styles.description}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button className={styles.homeButton} onClick={() => navigate("/")}>
        🔙 Go to Home
      </button>
    </div>
  );
};

export default NotFound;
