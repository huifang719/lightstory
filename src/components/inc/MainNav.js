import React from 'react';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brand from '../image/logo.png';

const MainNav = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container style={{ backgroudColor: '#14213d', width: '90%' }}>
        <Navbar.Brand as={Link} to="/">
          <Image src={brand} style={{ height: '80px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end" style={{ width: '100%' }}>
            <Nav.Link as={Link} to="/"> Home</Nav.Link>
            <Nav.Link as={Link} to="../about"> About Me</Nav.Link>
            <Nav.Link as={Link} to="../gallery"> Gallery</Nav.Link>
            <Nav.Link as={Link} to="../pricing"> Pricing</Nav.Link>
            <Nav.Link as={Link} to="../contact"> Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
