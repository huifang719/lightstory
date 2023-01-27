/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { IconContext } from 'react-icons';
import { HiLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from './ContactForm';

const ContactMe = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, y: 30 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <Container>
      <Row className="mb-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.452078262283!2d138.4948624148116!3d-34.79456657512722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0b9f802cef741%3A0x7574ce7728cb85a4!2sLightStory%20Photography!5e0!3m2!1sen!2sau!4v1674043201351!5m2!1sen!2sau" width="100%" height="500px" className="map" style={{ border: 0 }} allowfullscreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade" />
      </Row>
      <Row className="d-flex">
        <Col xs={12} lg={6} md={6}>
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <Card style={{ background: 'none' }}>
              <Card.Body>
                <Card.Title>Contact Info</Card.Title>
                <Card.Text>
                  If you have any enquries, please do not hesitate to contact me
                </Card.Text>
                <IconContext.Provider value={{ color: '#fca311', backgroundColor: '#fca311' }}>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item style={{ color: '#14213d' }}><HiOutlineMail /> lightstoryphotography@outlook.com</ListGroup.Item>
                    <ListGroup.Item style={{ color: '#14213d' }}><HiOutlinePhone /> (61) 478968999</ListGroup.Item>
                    <ListGroup.Item style={{ color: '#14213d' }}><HiLocationMarker /> 834A Military Road, North Haven,SA,5018</ListGroup.Item>
                  </ListGroup>
                </IconContext.Provider>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col xs={12} lg={6} md={6}>
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <ContactForm />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
