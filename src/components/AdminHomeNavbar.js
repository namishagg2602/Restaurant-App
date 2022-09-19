import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Firebase from '../firebase';
import { signup, login, logout, useAuth } from '../firebase';
import {useState} from 'react';

function AdminHomeNavbar() {

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
    <Navbar sticky="top" bg="light" variant="light" expand="xl" >
      <Container>
      <Navbar.Brand class='navbar-font' href='/adminhome'>ErrorSmashers Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft: "200px"}}>
            <button disabled ={!currentUser}  onClick={handleLogout}> LogOut</button>
            {/* <Nav.Link className='navbar-links'><Link to='/'>Logout</Link></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminHomeNavbar;