import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brand from '../image/logo.png';

const MainNav = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expanded={expanded} align="center" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image className="brand" src={brand} alt="lightstory-photography" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav collapseOnSelect className="me-auto justify-content-end" style={{ width: '100%' }}>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/"> Home</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="../about"> About Me</Nav.Link>
            <NavDropdown onClick={() => setExpanded(false)} title="Gallery" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item onClick={() => setExpanded(false)} href="#action/3.1">Bum to Baby</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="../pricing"> Pricing</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="../contact"> Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
