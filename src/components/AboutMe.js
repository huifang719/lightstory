import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import profile from './image/profile.png';

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6} md={6}>
          <Image style={{ width: '80%' }} src={profile} />
        </Col>
        <Col xs={12} lg={6} md={6}>
          <h3>
            About Me
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
