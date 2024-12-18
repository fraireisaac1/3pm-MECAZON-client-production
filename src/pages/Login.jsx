// basic skeleton for login
import styles from "../styles/UserForms.module.css";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import baseURL from "../../baseURL";

export default function Login() {
  const api = baseURL();
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    const form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    form.password.value = "";
    let user = {email, password};
    let response = await api.get("/find/3pm-server-MECAZON/users");
    if (response.status == 200) {
      console.log(response.data);
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      navigate('/');
    }
  }

  return (
    <div className={styles.Form}>
      <div className={styles.Brand}>
        <img
          className={styles.Logo}
          src="/MECAZON_logo.svg"
          alt="MECAZON LOGO"
        />{" "}
        MECAZON
      </div>
      <h1 className={styles.Header}>Log in</h1>
      <form onSubmit={login}>
        <label className={styles.Label} htmlFor="email">
          Email Address:
        </label>{" "}
        <br />
        <input
          className={styles.Input}
          type="email"
          id="email"
          name="email"
          required
        />{" "}
        <br /> <br />
        <label className={styles.Label} htmlFor="password">
          Password:
        </label>{" "}
        <br />
        <input
          className={styles.Input}
          type="password"
          id="password"
          name="password"
          required
        />{" "}
        <br /> <br />
        <button type="submit">
          Login
        </button>
        <p className={styles.RegisterText}>New to MECAZON?</p>
        <Link to="/register">Sign Up</Link>
        <p className={styles.RegisterText}>MECAZON Admin?</p>
        <Link to="/admin">Admin</Link>
      </form>
    </div>
  );
}