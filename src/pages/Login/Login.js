import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "admin" && password === "1512") {
            localStorage.setItem("loggedIn", "true"); // Store login status
            alert("Login Successful!");
            navigate("/"); // Redirect to Home Page
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            {/* Forgot Password & Create Account Links */}
            <div className="login-links">
                <p onClick={() => navigate("/forgot-password")} className="forgot-password">
                    Forgot Password?
                </p>
                <p onClick={() => navigate("/signup")} className="create-account">
                    Create a New Account
                </p>
            </div>
        </div>
    );
};

export default Login;
