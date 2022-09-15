import React, { useState } from 'react';
import { useRef } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminHome from './AdminHome';
import Button from 'react-bootstrap/Button';
import { signup, login, logout, useAuth } from '../firebase';
const Login = () => {
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();

    async function handleSignUp() {
        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error");
        }
    }
    async function handleLogIn() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Incorrect Email/Password");
        }
    }
    async function handleLogout() {
        setLoading(true);

        try {
            await logout();
        } catch {
            alert("Error!");
        }
        setLoading(false);

    }
    return (
        <>

            <div>{currentUser ? (<AdminHome />) : Text}</div>
            {!currentUser ? <div>  <div>
<input ref={emailRef}placeholder='Email'/>
<br></br>
<input ref={passwordRef} type="password" placeholder='Password'/>

</div>
<div>
<button disabled = {currentUser } onClick={handleLogIn}> Log In</button>
<button disabled ={!currentUser}  onClick={handleLogout}> LogOut</button>
</div>
</div>  : <text> </text>}
        </>
    )
}
export default Login;
