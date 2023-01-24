import React from 'react';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Welcome = () => (
  <Container fluid className="pt-3 pb-3" style={{ backgroundColor: 'white', color: '#14213d' }}>
    <h5 style={{ textAlign: 'center' }}>Welcome</h5>
    <Typewriter
      style={{ color: 'lightgrey', fontSize: '1rem' }}
      options={{
        strings: ['Memory is a way of holding on to the things you love, the things you are,the things you never want to lose.'],
        autoStart: true,
        loop: true,
        deleteAll: 'natural',
      }}
    />
    <p> Let me help you to hold on to your beautiful memories.</p>
  </Container>
);

export default Welcome;
