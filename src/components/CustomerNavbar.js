import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const CustomerNavbar = () => {
  return (
    <div>
        <Navbar sticky="top" bg="dark" variant="dark" expand="xl" >
            <Container>
            <Navbar.Brand  href='/user/menu'>Good Kitchen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link className='navbar-links'> <Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link className='navbar-links'> <Link to='/user/cart'>Cart</Link></Nav.Link>
                    <Nav.Link className='navbar-links'> <Link to='/user/bill'>Check Bill</Link></Nav.Link> */}
                    <Nav.Link className='navbar-links' href='/'>Home</Nav.Link>
                    <Nav.Link className='navbar-links' href='/user/menu'>Menu</Nav.Link>
                    <Nav.Link className='navbar-links' href='/user/cart'>Cart</Nav.Link>
                    <Nav.Link className='navbar-links' href='/user/bill'>Check Bill</Nav.Link> 
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

//className='expand-navbar'