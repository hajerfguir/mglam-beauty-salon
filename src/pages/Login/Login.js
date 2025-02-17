import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "admin" && password === "1512") {
            localStorage.setItem("loggedIn", "true"); 
            alert("Login Successful!");
            navigate("/"); 
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '22rem', backgroundColor: '#f8f8f8' }}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn w-100" style={{ backgroundColor: '#800000', color: 'white' }} onClick={handleLogin}>Login</button>
                <div className="text-center mt-3">
                    <p className="text-dark">Forgot Password?</p>
                    <p className="text-dark">Create a New Account</p>
                </div>
            </div>
        </div>
    );
};

export default Login;