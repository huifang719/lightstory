/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Testmonials = () => {
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
    <Container fluid className="pt-3 pb-3 mb-6" style={{ backgroundColor: 'white', color: '#14213d' }}>
      <Container>
        <h5 className="mt-3 mb-3 w-8" style={{ textAlign: 'center', color: '#14213d' }}>Testmonials</h5>
        <div data-token="IU4GRsIL3wsrJsusynAmWlP7A2QFuzrUhbLUCnBekKzGL1y3YQ" className="romw-reviews" />
      </Container>
    </Container>
  );
};

export default Testmonials;
