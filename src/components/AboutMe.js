import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import profile from './image/profile.png';

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6} md={6} className="mb-2">
          <Image fluid src={profile} />
        </Col>
        <Col xs={12} lg={6} md={6}>
          <h3>ABOUT ME</h3>
          <h5>THE MUM BEHIND THE CAMERA</h5>
          <blockquote>
            <p>Photography is the beauty of life captured.</p>
          </blockquote>
          <p>Hi, I am Huifang, but you can call me Livia, an Adelaide based award winning portrait photographer, specialised in children, family, maternity and newborns. </p>
          <p>I am a proud mum of three beautiful kids, like a lot of mums, my passion for photography starts from the desire of capturing every single moment of my kids. Photography to me is a way to tell the story,to capture the beauty and to hold on to our precious memories. </p>
          <p>I am passionate to capture the beauty in all stages of life,whether it is the first precious days of your little one, or the amazing journey of your pregnancy. I am driven and willing to go extra mile to create beautiful images because of my passion. </p>
          <p>I am honoured that you are considering me to capture your beautiful and precious memories. Please do not hesitate to   <a href="/contact">contact me</a> for any question or for my availability.</p>
          <p>I am an award-winning portrait photographer based in Adelaide, specializing in children, family, maternity, and newborn photography. My passion for photography began as a mother of three, wanting to capture every moment of my kids. For me, photography is a way to tell stories and preserve memories. I am passionate about capturing beauty in all stages of life, from the first days of a newborn to the journey of pregnancy. I am dedicated to creating beautiful images and am always willing to go the extra mile. If you are interested in my services, please do not hesitate to reach out for any questions or to check my availability.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
