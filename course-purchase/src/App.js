import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import Container from './Container.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Container />
        <Footer />
    </div>
  );
}

export default App;
