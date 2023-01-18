import React from 'react';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import { FaHome, FaUserAlt, FaCode, FaEnvelope, FaLaptop } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <IconContext.Provider value={{ color: '#e5e5e5' }}>
      <Navbar expand="lg" style={{ backgroudColor: '#14213d' }}>
        <Container fluid style={{ backgroudColor: '#14213d' }}>
          <Navbar.Brand className="sm-ms-0 md-ms-4 lg-ms-6" as={Link} to="/">
            <Image />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end" style={{ width: '90%' }}>
              <Nav.Link as={Link} to="/">
                <FaHome /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="../about">
                <FaUserAlt /> About Me
              </Nav.Link>
              <Nav.Link as={Link} to="../skills"><FaCode /> Gallery</Nav.Link>
              <Nav.Link as={Link} to="../projects"><FaLaptop /> My Projects</Nav.Link>
              <Nav.Link as={Link} to="../contact"><FaEnvelope /> Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
};

export default MainNav;
