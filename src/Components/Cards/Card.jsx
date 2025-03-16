import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, subtitle, description }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
