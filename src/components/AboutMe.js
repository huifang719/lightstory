import React, { useEffect } from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profile from './image/profile.png';

const AboutMe = () => {
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
      <Row className="mb-2">
        <Image fluid src={profile} />
      </Row>
      <Row className="mb-2">
        <motion.div
          xs={12}
          lg={6}
          md={6}
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <h3>ABOUT ME</h3>
          <h5 style={{ textAlign: 'center' }}>THE MUM BEHIND THE CAMERA</h5>
          <blockquote style={{ color: '#fca311', textAlign: 'center', fontStyle: 'italic', fontFamily: "'EB Garamond', serif" }}>
            <p>Photography is the beauty of life captured.</p>
          </blockquote>

          <p>Hi, I am Liva, an award-winning portrait photographer based in Adelaide, specializing in children, family, maternity, and newborn photography.</p>
          <p>My passion for photography began as a mother of three, wanting to capture every moment of my kids. For me, photography is a way to tell stories and preserve memories. I am dedicated to creating beautiful images and am always willing to go the extra mile.</p>
          <p>I am honoured that you are considering me to capture your beautiful and precious memories, please do not hesitate to <a href="/contact" className="text-decoration-none">contact me</a> for any questions or to check my availability.</p>
        </motion.div>
      </Row>
    </Container>
  );
};

export default AboutMe;
