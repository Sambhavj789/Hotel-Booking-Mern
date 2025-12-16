import "./Register.css";
import { Link } from "react-router-dom"
function Register() {
    return (
        <section id="register-section">
            <form id="register-form">
                <h1>Register Page</h1>
                <div className="register-input-container">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" />
                </div>
                <div className="register-input-container">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" />
                </div>
                <div className="register-input-container">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </div>
                <div className="register-input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="register-input-container">
                    <label htmlFor="lname">Phone</label>
                    <input type="text" id="lname" />
                </div>
                <div className="register-input-container">
                    <label htmlFor="lname">Date Of Birth</label>
                    <input type="date" id="lname" />
                </div>
                <div className="register-input-container profile-image-input">
                    <label htmlFor="lname">Profile Image</label>
                    <input type="file" id="lname" />
                </div>
                <div id="register-new-user">
                    <p>Already Registered?</p>
                    <Link to="/register">Login Here</Link>
                </div>
                <div id="register-btn">
                    <button>Register</button>
                </div>
            </form>
        </section>
    )
}

export default Register