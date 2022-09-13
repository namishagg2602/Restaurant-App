import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const CustomerNavbar = () => {
  return (
    <div>
        <Navbar sticky="top" bg="dark" variant="dark" expand="xxl" className='expand-navbar'>
            <Container>
            <Navbar.Brand href='/user/menu'>Our Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{marginLeft: "600px"}}>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/user/menu'>Menu</Nav.Link>
                    <Nav.Link href='/user/cart'>Cart</Nav.Link>
                    <Nav.Link href='/user/bill'>Check Bill</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

