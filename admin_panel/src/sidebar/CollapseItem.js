import React from 'react' ;

class CollapseItem extends React.Component{
    constructor(props){
        super(props);
        this.changeState = this.changeState.bind(this);

    }

    changeState(){
        this.props.changeCollapseOption(this.props.index);
    }

    render(){
        return <div>
            <a className={this.props.collapseOption == this.props.index?"collapse-item active":"collapse-item"} onClick={this.changeState}>{this.props.name}</a>
        </div>
    }
}

export default CollapseItem ;