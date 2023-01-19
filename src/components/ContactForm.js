import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <Form style={{ paddingTop: '1rem', marginLeft: '1rem' }} action="https://mailthis.to/lightstoryphotography@outlook.com" method="POST" encType="multipart/form-data">
      <h4>Contact Me</h4>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>
          Name
        </Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your name" required />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>
          Email
        </Form.Label>
        <Form.Control type="text" name="email" placeholder="Enter your email" required />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" name="subject" placeholder="Subject" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          Message
        </Form.Label>
        <Form.Control type="text" as="textarea" rows="3" name="message" placeholder="Message" required />
      </Form.Group>
      <Button style={{ backgroundColor: '#14213d' }} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
