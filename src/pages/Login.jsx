// basic skeleton for login

export default function Login() {
    return (
        <div>
            <h1>Login Form</h1>
            <form action="">
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required /> <br /> <br />

                <label htmlFor="password">Password</label> <br />
                <input type="password" id="password" name="password" pattern="" required /> <br /> <br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}