### Andrew's Contributioin to Team B's react code
Andew worked primarily on the backend code for the login and sign up pages. He also worked on the admin login page.
## Login Contributioin
# Login.jsx page
```js
import styles from "../styles/UserForms.module.css";
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className={styles.Form}>
            <div className={styles.Brand}>
                <img className={styles.Logo} src="/MECAZON_logo.svg" alt="MECAZON LOGO" /> MECAZON
            </div>
            <h1 className={styles.Header}>Log in</h1>
            <form action="">
                <label className={styles.Label} htmlFor="email">Email Address:</label> <br />
                <input className={styles.Input} type="email" id="email" name="email" required /> <br /> <br />

                <label className={styles.Label} htmlFor="password">Password:</label> <br />
                <input className={styles.Input} type="password" id="password" name="password" pattern="" required /> <br /> <br />

                <button type="submit">Login</button>

                <p className={styles.RegisterText}>New to MECAZON?</p>
                <Link to="/register">Sign Up</Link>
            </form>
        </div>
    );
}
```
![Picture of Andrew's login page](../contribution-images/login.png)
## Sign Up Contribution
# Signup.jsx page
```js
import styles from "../styles/UserForms.module.css";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className={styles.Form}>
            <div className={styles.Brand}>
                <img className={styles.Logo} src="/MECAZON_logo.svg" alt="MECAZON LOGO" /> MECAZON
            </div>
            <h1 className={styles.Header}>Sign Up</h1>
            <form action="">
                <label className={styles.Label} htmlFor="email">Email Address:</label> <br />
                <input className={styles.Input} type="email" id="email" name="email" required /> <br /> <br />

                <label className={styles.Label} htmlFor="password">Password:</label> <br />
                <input className={styles.Input} type="password" id="password" name="password" pattern="" required /> <br /> <br />

                <label className={styles.Label} htmlFor="confirmPassword">Confirm Password:</label> <br />
                <input className={styles.Input} type="text" id="confirmPassword" name="confirmPassword" pattern="" required /> <br/> <br/>

                <button type="submit">Sign Up</button>

                <p className={styles.LoginText}>Existing account?</p>
                <Link to="/login">Sign in</Link>
            </form>
        </div>
    );
}
```
![Picture of Andrew's sign up page](../contribution-images/signup.png)
## Admin Login Contribution
Unfortunately, due to merge conflicts and time constraints, I couldn't exactly get the code from Andrew's admin contribution. However, I will say that Andrew did indeed contribute to this segment of the project, and all due credit should go to him for that.