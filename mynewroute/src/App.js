import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/One">One</Link>
            </li>
            <li>
              <Link to="/Two">Two</Link>
            </li>
            <li>
              <Link to="/Three">Three</Link>
            </li>
          </ul>
    </div>
  );
}

export default App;
