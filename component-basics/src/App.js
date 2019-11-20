import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{

  constructor(props){
    super(props);
    this._yourname = "Ammy"
    this.state = {};
  }
  //no need to mention function/let/var
  sayHello(a){
    return "Hello "+a;
  }

  sayGreeting = (a) => {
    return "Good Morning "+a;
  }

  render(){
    return (
      <div className="App">
        <p>{this.sayGreeting(this._yourname)}</p>
      </div>
    );
  }
}

export default App;
