import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialMedia from '../SocialMedia';

const Footer = () => {
  return (
    <Container className="mt-3">
      <Row fluid className="d-flex align-items-center" style={{ flexWrap: 'wrap-reverse' }}>
        <Col xs={12} lg={6} md={6} className="d-flex justify-content-center">
          <p style={{ textAlgin: 'center' }}><small>Copyright &copy; 2023 LightStory Photography | All Rights Reserved</small></p>
        </Col>
        <Col xs={12} lg={6} md={6}>
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
