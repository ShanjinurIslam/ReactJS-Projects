import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/Sidebar';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        collapseOption : 0
    }

    this.changeCollapseOption = this.changeCollapseOption.bind(this);
    this.setDefault = this.setDefault.bind(this);
  }

  changeCollapseOption(index){
    this.setState({
        collapseOption : index
    });
}

setDefault(){
    this.setState({
        collapseOption : 0
    });
}

render(){
        
    return (
      <div className="App">
        <div>
        <Sidebar changeCollapseOption={this.changeCollapseOption} setDefault={this.setDefault} collapseOption={this.state.collapseOption}/>
        <p>{this.state.collapseOption}</p>
        </div>
      </div>
    );
  }
}

export default App;
