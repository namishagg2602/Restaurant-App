import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AdminHomeNavbar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="xxl" className='expand-navbar'>
      <Container>
      <Navbar.Brand href='/adminhome'>ErrorSmashers Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft: "900px"}}>
            <Nav.Link href='/'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminHomeNavbar;