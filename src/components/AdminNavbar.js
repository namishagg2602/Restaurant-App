import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AdminTable from './AdminTable';
import { signup, login, logout, useAuth } from '../firebase';
import { useState } from 'react';

function AdminNavbar() {
  const[loading, setLoading] = useState(false);

  const currentUser = useAuth();

 

  async function handleLogout() {

    setLoading(true);
    try {
        await logout();
    } catch{
        alert("Error!");
    }
    setLoading(false);
  }


  return( 
    <Navbar sticky="top" bg="dark" variant="dark" expand="xl">
      <Container>
      <Navbar.Brand href='/adminhome'>Good Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Link to='/adminhome/showtables' element={<AdminTable/>}></Link>
            <Nav.Link className='navbar-links'href='/adminhome/showtables'>Orders</Nav.Link>
            <Nav.Link className='navbar-links'href ='/adminhome/editinventory'>Edit Inventory</Nav.Link>
            <Nav.Link className='navbar-links' href ='/adminhome/staff'>Staff</Nav.Link>
            <Nav.Link className='navbar-links logout-right-m' href = '/admin' onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
