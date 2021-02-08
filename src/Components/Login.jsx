import React from 'react';
import { Link } from 'react-router-dom'

export default function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <form action="/login/" method="get" id="loginForm">
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="Password"></input>
                <input type="submit" className='loginButton' value="Submit"></input>
                <Link to={'/creatacc'} className='loginButton'><button>Create Account</button></Link>
            </form>
        </div>
    );
}
