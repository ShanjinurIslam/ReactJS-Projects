import React from 'react'

class NameCatagory extends React.Component{
    
    render(){
        var catagories = this.props.catagories ;
        //have to bind the whole syntex in curly braces
        return <div className="col-lg-3">
        <h1 className="my-4">{this.props.title}</h1>
        <div className="list-group">
        <div>{catagories.map((item,i)=>{
            return <a href="#" className="list-group-item" key={i}>{item}</a>
          })}</div> 
        </div>
        <p>
        <button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-shopping-cart"></span> Total $0.0
        </button>
      </p>
      </div>
    }
}

export default NameCatagory ;