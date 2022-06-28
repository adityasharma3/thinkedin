import React, { useState } from 'react'
import { projectAuth } from './firebaseConfig';
import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import userSlice from './features/userSlice';

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        projectAuth
            .signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoURL: userAuth.user.photoURL,
                    })
                )
            })
            .catch(error => alert(error));

    };

    const register = () => {
        if (!name) {
            return alert("Please enter full name");
        }

        projectAuth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }));
                    });
            })
            .catch(error => alert(error));
    };

    return (
        <div className='login'>
            {/* <h2>You are not logged in</h2> */}
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="Linkedin logo" />

            <form>
                <input
                    type="text"
                    placeholder='Full name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Profile picture (url)'
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />

                <input
                    type="email"
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? <span onClick={register}>Register now</span></p>
        </div>
    )
}

export default Login