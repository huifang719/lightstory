import React from 'react';
import { Container, Col } from 'react-bootstrap';
import SocialMedia from '../SocialMedia';

const Footer = () => {
  return (
    <Container className="mt-3 d-flex justify-content-center align-items-center">
      <Col xs={12} lg={6} md={6}>
        <p style={{ textAlgin: 'center' }}><small>Copyright &copy; 2023 LightStory Photography | All rights All Rights Reserved</small></p>
      </Col>
      <Col xs={12} lg={6} md={6}>
        <SocialMedia />
      </Col>
    </Container>
  );
};

export default Footer;
