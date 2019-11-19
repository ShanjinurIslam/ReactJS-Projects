import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

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

class Intro extends React.Component {
  render(){
    return(
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Inside Intro Class</code>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
