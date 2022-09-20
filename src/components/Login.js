import React, { useState } from 'react';
import { useRef } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminHome from './AdminHome';
import Button from 'react-bootstrap/Button';
import { signup, login, logout, useAuth } from '../firebase';
import pic from './foodie.png';
const Login = () => {
    const[loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();

    async function handleSignUp()
    {
        setLoading(true);
        try{
            await signup(emailRef.current.value,passwordRef.current.value);
        } catch{
            alert("Error");
        }
    }
    async function handleLogIn()
    {
        setLoading(true);
        try{
            await login(emailRef.current.value,passwordRef.current.value);
        } catch{
            alert("Incorrect Email/Password");
        }
    }
    async function handleLogout() {
        setLoading(true);

        try {
            await logout();
        } catch{
            alert("Error!");
        }
        setLoading(false);
    }
    return (
        <>
          
          <div>{currentUser ? (<AdminHome />) : Text}</div>
          {!currentUser ?
            <section class=" text-center text-lg-start">
              <div class="card mb-3">
                <div class="row g-0 d-flex align-items-center">
                  <div class="col-lg-4 d-none d-lg-flex">
                    <img src={pic} alt="Trendy Pants and Shoes"
                      class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
                  </div>
                  <div class="col-lg-8">
                    <div class="card-body py-5 px-md-5">
    
                      <form>
    
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Email address</label>
                          <input type="email" ref={emailRef} placeholder='Email' class="form-control" />
                          
                        </div>
    
    
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                          <input ref={passwordRef} type="password" placeholder='Password' id="form2Example2" class="form-control" />
                         
                        </div>
    
    
                        <div class="row mb-4">
                          <div class="col d-flex justify-content-center">
    
    
                          </div>
    
    
                        </div>
                        <button type="button" class="btn btn-primary btn-block mb-4" disabled={currentUser} onClick={handleLogIn}>Log In</button>
    
                      </form>
    
                    </div>
                  </div>
                </div>
              </div>
            </section>
            : <text> </text>
          }
    
        </>
      )
    }
export default Login;