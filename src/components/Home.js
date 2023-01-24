import React from 'react';
import Showcase from './Showcase';
import Awards from './Awards';
import Testmonials from './Testmonials';
import Welcome from './Welcome';

const Home = () => {
  return (
    <>
      <Showcase />
      <Welcome />
      <Awards />
      <Testmonials />
    </>
  );
};

export default Home;
