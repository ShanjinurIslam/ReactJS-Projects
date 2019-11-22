import React from 'react' ;

class SidebarBrand extends React.Component{
    render(){
        return <div>
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon">
                    <i className="fas fa-home"></i>
                    </div>
                    <div className="sidebar-brand-text mx-4">{this.props.title}</div>
                </a>
        </div>
    }
}

export default SidebarBrand ;