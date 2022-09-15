import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AdminTable from './AdminTable';

function AdminNavbar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="xxl" className='expand-navbar'>
      <Container>
      <Navbar.Brand href='/adminhome'>ErrorSmashers Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/adminhome/showtables' element={<AdminTable/>}></Link>
            <Nav.Link className='navbar-links'><Link to='/adminhome/showtables'>Orders</Link></Nav.Link>
            <Nav.Link className='navbar-links'> <Link to='/adminhome/editinventory'>Edit Inventory</Link></Nav.Link>
            <Nav.Link className='navbar-links'> <Link to='/adminhome/staff'>Staff</Link></Nav.Link>
            <Nav.Link className='navbar-links'> <Link to='/'>Logout</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;