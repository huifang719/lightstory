import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import outdoor from './image/outdoor.png';
import maternityAndNewborn from './image/maternity_newborn.png';
import studio from './image/studio.png';

const Services = () => {
  return (
    <Container>
      <Row className="d-flex" style={{ gap: '2rem' }}>
        <Col xs={12} lg={12} md={12}>
          <img style={{ width: '100%' }} src={outdoor} alt="bump to baby" />
        </Col>
        <Col xs={12} lg={12} md={12}>
          <img style={{ width: '100%' }} src={studio} alt="bump to baby" />
        </Col>
        <Col xs={12} lg={12} md={12}>
          <img style={{ width: '100%' }} src={maternityAndNewborn} alt="bump to baby" />
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
