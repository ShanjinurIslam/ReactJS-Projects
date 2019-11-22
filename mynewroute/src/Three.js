import React from 'react';
import logo from './logo.svg';
import One from './One.js';
import {
  Link
} from "react-router-dom";

class Three extends React.Component {
  render(){
    return(
      <div>
        <h1>I am 3</h1>
        <ul>
          <li>
            <Link to="/Three/1" component={One}>3.1</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Three;
