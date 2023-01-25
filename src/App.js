/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import MainNav from './components/inc/MainNav';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Footer from './components/inc/Footer';

const App = () => {
  return (
    <Container fluid className="App">
      <header className="mb-2">
        <MainNav />
      </header>
      <main className="pageContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
      <Footer />
    </Container>
  );
};

export default App;
