import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

const AdminInventoryNavbar = () => {
  return (
    <div>
    <Navbar sticky="top" bg="dark" variant="dark" expand="xxl" className='expand-navbar'>
      <Container>
      <Navbar.Brand href='/adminhome'>ErrorSmashers Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft: "400px"}}>
            <Nav.Link href='/'>Logout</Nav.Link>
            <Nav.Link href='/adminhome/showtables'>Orders</Nav.Link>
            <Nav.Link href='/adminhome/editinventory'>Edit Inventory</Nav.Link>
            <Nav.Link href='/adminhome/staff'>Staff</Nav.Link>
            <Button variant='outline-warning' className='nav-button'><Nav.Link href='/adminhome/editinventory/add'>Add Item</Nav.Link></Button>
            <Button variant='outline-warning' className='nav-button'><Nav.Link href='/adminhome/editinventory/delete'>Delete Item</Nav.Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default AdminInventoryNavbar;