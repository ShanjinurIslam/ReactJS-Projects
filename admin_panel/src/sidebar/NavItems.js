import React from 'react'

class NavItems extends React.Component{
    constructor(props){
        super(props);
        this.changeState = this.changeState.bind(this);

    }

    changeState(){
        this.props.changeCollapseOption(this.props.index);
    }

    render(){
        return <li className={this.props.collapseOption == this.props.index?"nav-item active":"nav-item"} onClick={this.changeState}>
        <a className="nav-link" href="#">
          <i className={this.props.icon}></i>
          <span>{this.props.name}</span></a>
      </li>
    }
} 


export default NavItems;