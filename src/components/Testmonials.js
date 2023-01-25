/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testmonials = () => {
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://reviewsonmywebsite.com/js/embedLoader.js?id=03d30ab029f3709eb7ee597570569e34';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container fluid className="pt-3 pb-3 mb-6" style={{ backgroundColor: 'white' }}>
      <motion.div
        className="container"
        style={{ backgroundColor: 'white', color: '#14213d' }}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h5 className="mt-3 mb-3" style={{ textAlign: 'center', color: '#14213d' }}>Testmonials</h5>
        <div data-token="IU4GRsIL3wsrJsusynAmWlP7A2QFuzrUhbLUCnBekKzGL1y3YQ" className="romw-reviews" />
      </motion.div>
    </Container>
  );
};

export default Testmonials;
