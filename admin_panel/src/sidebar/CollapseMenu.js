import React from 'react'
import CollapseItem from './CollapseItem'

class CollapseMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : "#"+this.props.name
        }
    }

    render(){
        return <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={this.state.id} aria-expanded="true" aria-controls={this.name}>
                    <i className="fas fa-fw fa-cog"></i>
                    <span>{this.props.name}</span>
                    </a>
                    <div id={this.props.name} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">

                        {this.props.items.map((item,i)=>{
                            return <CollapseItem key={i} name={item.name} index={item.index} collapseOption={this.props.collapseOption} changeCollapseOption={this.props.changeCollapseOption}/>
                        })}

                        </div>
                    </div>
                </li>
    }
}

export default CollapseMenu ;