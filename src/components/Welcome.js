import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Welcome = () => {
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
    <Container fluid className="pt-3 pb-3" style={{ backgroundColor: 'white' }}>
      <motion.div
        style={{ backgroundColor: 'white', color: '#14213d', display: 'flex', justifyContent: 'center' }}
        fluid
        xs={12}
        lg={6}
        md={6}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Card className="welcome">
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>Welcome</Card.Title>
            <Card.Subtitle className="mb-2">Memory is a way of holding on to the things you love, the things you are,the things you never want to lose.</Card.Subtitle>
            <Card.Text>
              Let me help you to hold on to your beautiful memories.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
};

export default Welcome;
