import React from 'react';
import { Link } from 'react-router-dom'

export default function Account(props) {
    return (
        <div>
            <h1>Create account</h1>
            <form action="https://the-scroll-back-end.herokuapp.com/login/create" method="post" id="loginForm">
                <input type="text" placeholder="ussername" name="username"></input>
                <input type="email" placeholder="email" name="email"></input>
                <input type="password" placeholder="Password" name="password"></input>
                <input type="submit" value="Submit"></input>
                <Link to={'/login'} className='accountButton'><button>Back</button></Link>
            </form>
        </div>
    );
}
