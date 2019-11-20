import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Parent title={this.props.propString}/>
      </header>
    </div>
  );
}
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number,
}

App.defaultProps = {
  propString: "Available Car Models"
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
