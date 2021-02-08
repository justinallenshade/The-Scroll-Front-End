import React from 'react';
import { Link } from 'react-router-dom'

export default function Account(props) {
    return (
        <div>
            <h1>Create account</h1>
            <form action="/login/" method="post" id="loginForm">
                <input type="text" placeholder="ussername"></input>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="submit" value="Submit"></input>
                <Link to={'/login'} className='accountButton'><button>Back</button></Link>
            </form>
        </div>
    );
}
