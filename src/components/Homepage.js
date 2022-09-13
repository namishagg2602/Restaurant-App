import React from 'react';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import { Link } from "react-router-dom";


const Homepage = () =>
{

    return (
            <div >
                <NavBar/>
                <center>
                    <div className='home-block'>
                        <h1 className='welcome-msg'>Welcome to our Restaurant</h1>
                        
                        <div className='button-text'>
                            
                            <Link to='/user/menu'><Button className="home-button" variant='outline-warning'>Customer</Button></Link>
                                <br></br>
                            <Link to='/adminhome'><Button className="home-button" variant='outline-warning'>Admin</Button></Link>
                            
                        </div>
                    </div>
                </center>
            </div>
    );
    
};


export default Homepage; 