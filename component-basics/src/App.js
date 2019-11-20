import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{

  constructor(props){
    super(props);
    this._yourname = "Ammy"
    this.state = {};
  }

  sayHello(a){
    return "Hello "+a;
  }

  render(){
    return (
      <div className="App">
        <h2>Here is some sample data: {this.sayHello(this._yourname)} </h2>
      </div>
    );
  }
}

export default App;
