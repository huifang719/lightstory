/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import MainNav from './components/inc/MainNav';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <Container fluid className="App">
      <header>
        <MainNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;
