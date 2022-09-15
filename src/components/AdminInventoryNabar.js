import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminInventoryNavbar = () => {
  return (
    <div>
    <Navbar sticky="top" bg="dark" variant="dark" expand="xxl" className='expand-navbar'>
      <Container>
      <Navbar.Brand href='/adminhome'>ErrorSmashers Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link className='navbar-links'> <Link to='/adminhome/showtables'>Orders </Link></Nav.Link>
            <Nav.Link className='navbar-links'><Link to='/adminhome/editinventory'>Edit Inventory</Link></Nav.Link>
            <Nav.Link className='navbar-links'><Link to='/adminhome/staff'>Staff</Link></Nav.Link>
            <Nav.Link className='navbar-links'><Link to='/'>Logout</Link></Nav.Link>
            <Button variant='outline-warning' className='nav-button'><Nav.Link><Link to='/adminhome/editinventory/add'>Add Item</Link></Nav.Link></Button>
            <Button variant='outline-warning' className='nav-button'><Nav.Link><Link to='/adminhome/editinventory/delete'>Delete Item</Link></Nav.Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default AdminInventoryNavbar;