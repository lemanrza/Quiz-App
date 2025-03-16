import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Services/Context/Context";
import { Mail, Lock } from "lucide-react"; 
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAdmin } = useAuth();

  if (isAdmin) return <Navigate to="/admin" />;

  const handleLogin = (e) => {
    e.preventDefault(); 
    login({ username: "admin", password: "password" });
    navigate("/admin");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconContainer}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
            <path d="M4 4h16v16H4z"></path>
            <path d="M8 4v16"></path>
            <path d="M16 4v16"></path>
          </svg>
        </div>

        <h2 className={styles.title}>Teacher Login</h2>
        <p className={styles.subtitle}>Enter your credentials to access the admin panel</p>

        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <div className={styles.inputWrapper}>
              <Mail size={18} className={styles.inputIcon} />
              <input type="text" placeholder="admin@gmail.com" className={styles.input} required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <Lock size={18} className={styles.inputIcon} />
              <input type="password" placeholder="********" className={styles.input} required />
            </div>
          </div>

          <button type="submit" className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;