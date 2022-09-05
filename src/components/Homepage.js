import React from 'react';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';




const Homepage = () =>
{

    return (
    <div >
        <NavBar/>
        <center>
            <div className='home-block'>
                <h1 className='welcome-msg'>Welcome to our Restaurant</h1>
                
                <div className='button-text'>
                    <Button className="home-button" variant='outline-success'>Customer</Button>
                    <br></br>
                    <Button className="home-button" variant='outline-success'>Admin</Button>
                </div>
            </div>
        </center>
       
    

    </div>
    );
    
};


export default Homepage; 