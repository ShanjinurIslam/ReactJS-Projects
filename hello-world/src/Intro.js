import React from 'react';
import logo from './logo.svg';
import './App.css';

class Intro extends React.Component {
  render(){
    return(
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Inside Intro Class from another class component</code>
          </p>
        </header>
      </div>
    );
  }
}

export default Intro;
