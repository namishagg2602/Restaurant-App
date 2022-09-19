import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AdminTable from './AdminTable';

function AdminNavbar() {
  return (
    <Navbar sticky="top" bg="light" variant="light" expand="xl">
      <Container>
      <Navbar.Brand href='/adminhome'>Good Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Link to='/adminhome/showtables' element={<AdminTable/>}></Link>
            <Nav.Link className='navbar-links'href='/adminhome/showtables'>Orders</Nav.Link>
            <Nav.Link className='navbar-links'href ='/adminhome/editinventory'>Edit Inventory</Nav.Link>
            <Nav.Link className='navbar-links' href ='/adminhome/staff'>Staff</Nav.Link>
            <Nav.Link className='navbar-links' href = '/'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
