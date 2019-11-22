import React from 'react' ;
import SidebarBrand from './SidebarBrand'
import CollapseItem from './CollapseItem'
import CollapseMenu from './CollapseMenu'
import NavItems from './NavItems';

class Sidebar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collapseOption : 0
        }

        this.changeCollapseOption = this.changeCollapseOption.bind(this);
        this.setDefault = this.setDefault.bind(this);
        
    }

    changeCollapseOption(index){
        this.props.changeCollapseOption(index);
    }

    setDefault(){
        this.props.setDefault();
    }

    render(){

        var rentersItems = [
            {name:'Add Renter',index:'1'},
            {name:'Edit Renter',index:'2'},
            {name:'Delete Renter',index:'3'}
        ]

        var utilitiesItems = [
            {name:'Invoice',index:'4'},
            {name:'Payment',index:'5'}
        ]

        return <div>
            <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">
                <SidebarBrand title="Rent Manager"/>
                <hr className="sidebar-divider my-0"/>

                <li className={this.props.collapseOption=="0"?"nav-item active":"nav-item"} onClick={this.setDefault}>
                    <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
                </li>

                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">
                    Options
                </div>

                <CollapseMenu name="Renters" items={rentersItems} collapseOption={this.props.collapseOption} changeCollapseOption={this.changeCollapseOption}/>
                <CollapseMenu name="Utilities" items={utilitiesItems} collapseOption={this.props.collapseOption} changeCollapseOption={this.changeCollapseOption}/>

                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">
                    Add Ons
                </div>

                <NavItems name="Charts" icon="fas fa-fw fa-chart-area" index='6' collapseOption={this.props.collapseOption} changeCollapseOption={this.changeCollapseOption}/>
                <NavItems name="Tables" icon="fas fa-fw fa-table" index='7' collapseOption={this.props.collapseOption} changeCollapseOption={this.changeCollapseOption}/>

                <hr className="sidebar-divider d-none d-md-block"/>
                
                <NavItems name="Logout" icon="fas fa-fw fa-logout" index='8' collapseOption={this.props.collapseOption} changeCollapseOption={this.changeCollapseOption}/>
            </ul>
        </div>
    }
}

export default Sidebar ;