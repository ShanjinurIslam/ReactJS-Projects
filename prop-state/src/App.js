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
  constructor(props){
    super(props);

    this.state = {
      cars:['s-BMW','s-Mercedes','s-Audi'],
    };
    this.handleClick = this.handleClick.bind(this); //have to bind this
  }

  handleClick(){
    this.setState(
      {cars: this.state.cars.reverse()} //reverse props
    );
  }

  render(){
    console.log(this.props);
    const title = this.props.title;
    return(
      <div>
        <button onClick={this.handleClick}>{title}</button>
        <Cars index='0' cars={this.state.cars}/>
      </div>
    );
  }
}

class Cars extends React.Component {
  render(){
    console.log(this.props);
    const carNames = this.props.cars;
    return(
      <div>
        <div>{carNames.map((item,i)=>{
            return <p key={i}>{item}</p>
          })}</div>
      </div>
    );
  }
}

export default App;
