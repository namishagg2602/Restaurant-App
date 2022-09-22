import React ,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signup, login, logout, useAuth } from '../firebase';


const AdminInventoryNavbar = () => {
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


  return (
    <div>
    <Navbar sticky="top" bg="dark" variant="dark" expand="xl" >
      <Container>
      <Navbar.Brand href='/adminhome'>Good Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link className='navbar-links' href='/adminhome/showtables'>Orders </Nav.Link>
            <Nav.Link className='navbar-links' href='/adminhome/editinventory'>Edit Inventory</Nav.Link>
            <Nav.Link className='navbar-links' href='/adminhome/staff'>Staff</Nav.Link>
            <Button variant='outline-warning' className='nav-button'><Nav.Link href ='/adminhome/editinventory/add'>Add Item</Nav.Link></Button>
            <Nav.Link className='navbar-links logout-right' href='/admin' onClick={handleLogout}>Logout</Nav.Link>
            {/* <Button variant='outline-warning' className='nav-button'><Nav.Link><Link to='/adminhome/editinventory/delete'>Delete Item</Link></Nav.Link></Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default AdminInventoryNavbar;