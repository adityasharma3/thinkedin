import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginToApp = (e) => {
        e.preventDefault();
    };

    const register = () => {
        if (!name) {
            return alert("Please enter full name");
        }


    };

    return (
        <div className='login'>
            {/* <h2>You are not logged in</h2> */}
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="Linkedin logo" />

            <form>
                <input type="text" placeholder='Full name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Profile picture (url)' />
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? <span>Register now</span></p>
        </div>
    )
}

export default Login