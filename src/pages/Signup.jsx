// basic skeleton for login
import styles from "../styles/UserForms.module.css";
import { Link } from "react-router-dom";

export default function Signup() {
    const form = document.getElementById("form");

    function pushSessionData() {

        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        localStorage.setItem('email', email)
        localStorage.setItem("password", password);
    }

    return (
        <div className={styles.Form}>
            <div className={styles.Brand}>
                <img className={styles.Logo} src="/MECAZON_logo.svg" alt="MECAZON LOGO" /> MECAZON
            </div>
            <h1 className={styles.Header}>Sign Up</h1>
            <form action="" id="form">
                <label className={styles.Label} htmlFor="email">Email Address:</label> <br />
                <input className={styles.Input} type="email" id="email" name="email" required /> <br /> <br />

                <label className={styles.Label} htmlFor="password">Password:</label> <br />
                <input className={styles.Input} type="password" id="password" name="password" required /> <br /> <br />

                <button onClick={pushSessionData} type="submit">Sign Up</button>

                <p className={styles.LoginText}>Existing account?</p>
                <Link to="/login">Sign in</Link>
            </form>
        </div>
    );
}