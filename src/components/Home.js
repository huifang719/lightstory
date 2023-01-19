import React from 'react';
import { Container } from 'react-bootstrap';
// import Showcase from './Showcase';
import Awards from './Awards';
import Testmonials from './Testmonials';

const Home = () => {
  return (
    <Container fluid>
      {/* <Showcase /> */}
      <Awards />
      <Testmonials />
    </Container>
  );
};

export default Home;
