/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import MainNav from './components/inc/MainNav';
import supabase from './supabaseClient';
import Home from './components/Home';

const App = () => {
  return (
    <Container fluid className="App">
      <header>
        <MainNav />
      </header>
      <main>
        <Home />
      </main>
    </Container>
  );
};

export default App;
