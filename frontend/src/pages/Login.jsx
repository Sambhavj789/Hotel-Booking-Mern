import "./Login.css";
import { Link } from "react-router-dom"
function Login() {
    return (
        <section id="login-section">
            <form id="login-form">
                <h1>Login Page</h1>
                <div className="login-input-container">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </div>
                <div className="login-input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div id="login-new-user">
                    <p>New User?</p>
                    <Link to="/register">Register Here</Link>
                </div>
                <div id="login-btn">
                    <button>Login</button>
                </div>
            </form>
        </section>
    )
}

export default Login