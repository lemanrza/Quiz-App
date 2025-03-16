import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./QuestionsDetail.module.css";

const QuestionsDetail = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/questions/${id}`)
      .then((response) => response.json())
      .then((data) => setQuestion(data));
  }, [id]);

  if (!question) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <>
      <div className={styles.backBtnDiv}>
        <button className={styles.backBtn} onClick={() => history.back()}>  ← Back to Questions</button>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <span className={styles.difficulty}>{question.difficulty}</span>
            <span className={styles.category}>{question.category}</span>
          </div>
          <h2 className={styles.title}>{question.title}</h2>
          <div className={styles.answerSection}>
            <b style={{ fontSize: 20 }}>Answer:</b>
            <p className={styles.answer}>{question.answers}</p>
          </div>
          <div className={styles.additionalInfo}>
            <b style={{ fontSize: 20 }}>Additional Information:</b>
            <p >
              This question is categorized as <b>{question.category}</b> with a
              difficulty level of <b>{question.difficulty}</b>. It's a common
              question asked in developer interviews and technical assessments.
            </p>
          </div>
        </div>
      </div>
    </>

  );
};

export default QuestionsDetail;
