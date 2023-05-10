import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa"

const loginButton = {
    body: {
        height: '3.5rem',
        width: '10rem',
        border: '1px solid rgba(0, 0, 0, 0.125)',
        boxShadow: '0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
        cursor: "pointer",
        margin: "0 10px 0 10px",
        padding: "0.1rem 0.5rem",
    },
    
    button: {
        border: 'none',
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
        textDecoration: "underline",
        cursor: "pointer",
    }
}

function LoginCard() {

    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleUser = (event) => {
        event.preventDefault();
        navigate('/favourites')
    };

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/LoginPage')
    };

    const handleLogout = (event) => {
        event.preventDefault();
        setIsLoggedIn(false);
    };

    return (
        <div className="login-button" style={loginButton.body}>
            {isLoggedIn ? (
                <div style={{display: 'flex', flexDirection: 'row', gap: 15}}>
                    <button onClick={handleUser} style={loginButton.button}>
                    <FaRegUserCircle size={30}/>
                    </button>
                    <div>
                    <p style={{margin: '0'}}>Hi' user,</p>
                    <button onClick={handleLogout} style={loginButton.button}>Logout</button>
                    </div>
                </div>
            ) : (
                <div>
                    <button onClick={handleLogin} style={loginButton.button}>Login</button>
                    <p>or Sign Up</p>
                </div>
            )}
        </div>
    );
}

export default LoginCard;
