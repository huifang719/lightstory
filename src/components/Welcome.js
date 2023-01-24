import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Welcome = () => (
  <Container fluid className="pt-3 pb-3" style={{ backgroundColor: 'white', color: '#14213d', display: 'flex', justifyContent: 'center' }}>
    <Card style={{ border: 'none', width: '80%', display: 'inline-block' }}>
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>Welcome</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Let me help you to hold on to your beautiful memories.</Card.Subtitle>
        <Card.Text>
          <Typewriter
            style={{ fontSize: '1rem' }}
            options={{
              strings: ['Memory is a way of holding on to the things you love, the things you are,the things you never want to lose.'],
              autoStart: true,
              loop: true,
              deleteAll: 'natural',
            }}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default Welcome;
