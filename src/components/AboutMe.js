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
          <h3>ABOUT ME</h3>
          <h5>THE MUM BEHIND THE CAMERA</h5>
          <blockquote>
            <p>Photography is the beauty of life captured.</p>
          </blockquote>
          <p>Hi, I am Huifang, but you can call me Livia, the owner and photographer of Lightstory Photography, an Adelaide based award winning portrait photographer, specialised in children, family, maternity and newborns. </p>
          <p>I am a proud mum of three beautiful kids, like a lot of mums, my passion for photography starts from the desire of capturing every single moment of my kids. Photography to me is a way to tell the story,to capture the beauty and to hold on to our precious memories. </p>
          <p>I am passionate to capture the beauty in all stages of life,whether it is the first precious days of your little one, or the amazing journey of your pregnancy. I am driven and willing to go extra mile to create beautiful images because of my passion. </p>
          <p>I am honoured that you are considering me to capture your beautiful and precious memories. Please do not hesitate to   <a href="contacts.html">contact me</a> for any question or for my availability.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
