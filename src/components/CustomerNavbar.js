import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const CustomerNavbar = () => {
  return (
    <div>
        <Navbar sticky="top" bg="dark" variant="dark" expand="xxl" className='expand-navbar'>
            <Container>
            <Navbar.Brand style={{marginRight: "200px"}} href='/user/menu'>ErrorSmashers Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='navbar-links'> <Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link className='navbar-links'> <Link to='/user/cart'>Cart</Link></Nav.Link>
                    <Nav.Link className='navbar-links'> <Link to='/user/bill'>Check Bill</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

