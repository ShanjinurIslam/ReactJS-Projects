import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Parent title="Car Model"/>
      </header>
    </div>
  );
}

class Parent extends React.Component {
  render(){
    console.log(this.props);
    const title = this.props.title;
    return(
      <div>
        <h2>{title}</h2>
        <Cars index='0' cars={this.props.cars}/>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars:['BMW','Mercedes','Audi'],
}
class Cars extends React.Component {
  render(){
    console.log(this.props);
    const carNames = this.props.cars;
    return(
      <div>
        <p>{carNames.map((item,i)=>{
            return item + " "
          })}</p>
      </div>
    );
  }
}

export default App;
