import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro'

class Header extends React.Component {
  render(){
    return(
      <div>
        <h1 className="App-link">Inside Header class</h1>
        <Intro />
      </div>
    );
  }
}

export default Header;
