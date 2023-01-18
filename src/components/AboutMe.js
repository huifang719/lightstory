import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col className="sm-12 lg-6 md-6">
          <Image src="https://images.unsplash.com/photo-1673973059807-857c544d8452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </Col>
        <Col className="sm-12 lg-6 md-6">
          <h3>
            About Me
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
