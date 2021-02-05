import React from 'react';

export default function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <form id="loginForm">
                <input type="text" placeholder="ussername"></input>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}
