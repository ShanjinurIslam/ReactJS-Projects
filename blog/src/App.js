import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Container from './Container.js';
import Footer from './Footer.js';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
