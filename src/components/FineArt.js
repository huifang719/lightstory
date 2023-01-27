/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FineArtImages from './FineArtImage';

const FineArt = () => {
  return (
    <Container>
      <Row className="d-flex g-2">
        {FineArtImages.map((img, index) =>
          // eslint-disable-next-line implicit-arrow-linebreak, react/jsx-wrap-multilines
          <Col key={index} xs={12} lg={4} md={4}>
            <img style={{ width: '100%' }} src={img} alt="bump to baby" />
          </Col>,
        // eslint-disable-next-line function-paren-newline
        )}
      </Row>
    </Container>
  );
};

export default FineArt;
