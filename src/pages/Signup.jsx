// basic skeleton for login
import styles from "../styles/UserForms.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from "axios";
export default function Signup() {
  const navigate = useNavigate()
  // async function fetchUserData(userData) {
  //   try {
  //     const data = await axios.get("/dummy-data/users.json");
  //     const users = JSON.stringify(data);
  //     // localStorage.setItem('data', users)


  //     users.push(userData);
  //   } catch (err) {
  //     console.error('There was an error: ', err)
  //   }
  // };
  //     const pushSessionData = () => {
  //       try {
  //         const username = document.getElementById('username').value;
  //         const email = document.getElementById('email').value
  //         const password = document.getElementById('password').value
  //         const matchPass = document.getElementById('confirmPassword').value

  //         const user = {
  //           username: username,
  //           email: email,
  //           password: password,
  //         };
  //         if (password !== matchPass) {
  //           alert('Passwords do not match')
  //         } else {
  //           localStorage.setItem('username', username);
  //           localStorage.setItem('email', email);
  //           localStorage.setItem("password", password);
  //           fetchUserData(user)
  //           navigate('/login')
  //         }
  //       } catch (err) {
  //         console.error('There was in error pushing data: ', err)
  //       }

  //     }

  async function signUp(e) {
    e.preventDefault();
    const form = e.target;
    let username = form.username.value;
    let email = form.email.value;
    let password = form.password.value;
    let confirmPassword = form.confirmPassword.value;

    if (password == confirmPassword) {
      let new_user = {username, email, password};
      let request = await axios.post('/add-user/3pm-server-MECAZON/users', new_user);
      console.log(request, new_user);
    } else {
      alert("Passwords do not match up");
      form.confirmPassword.value = '';
    }
  }

  return (
    <div className={styles.Form}>
      <div className={styles.Brand}>
        <img className={styles.Logo}
          src="/MECAZON_logo.svg"
          alt="MECAZON LOGO"
        />MECAZON
      </div>
      <h1 className={styles.Header}>Sign Up</h1>
      <form onSubmit={signUp} id="form">
        <label className={styles.Label} htmlFor="username">Username:</label><br />
        <input
          className={styles.Input}
          type="input"
          id="username"
          name="username"
          required
        /><br /> <br />
        <label className={styles.Label} htmlFor="email">Email Address:</label><br />
        <input
          className={styles.Input}
          type="email"
          id="email"
          name="email"
          required
        /><br /> <br />
        <label className={styles.Label} htmlFor="password">Password:</label><br />
        <input
          className={styles.Input}
          type="password"
          id="password"
          name="password"
          required
        /><br /> <br />
        <label className={styles.Label} htmlFor="confirmPassword">Confirm Password:</label>
        <br />
        <input
          className={styles.Input}
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          required
        /><br /><br />
        <button type="submit">Sign Up</button>
        <p className={styles.LoginText}>Existing account?</p>
        <Link to="/login">Sign in</Link>
      </form>
    </div>
  );
}