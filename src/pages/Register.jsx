// basic skeleton for register / sign up page

export default function Login() {
    return (
        <div>
            <h1>Sign Up Form</h1>
            <form action="">
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required /> <br /> <br />

                <label htmlFor="username">Username</label> <br />
                <input type="text" id="username" name="username" required /> <br /> <br />

                <label htmlFor="password">Password</label> <br />
                <input type="password" id="password" name="password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" required /> <br /> <br />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}