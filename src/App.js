/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import MainNav from './components/inc/MainNav';
import supabase from './supabaseClient';

const App = () => {
  return (
    <Container style={{ backgroundColor: '#14213d' }} className="App">
      <header>
        <MainNav />
      </header>
    </Container>
  );
};

export default App;
