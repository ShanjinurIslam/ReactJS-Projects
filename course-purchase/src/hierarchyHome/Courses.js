import React from 'react'

class Courses extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var courses = this.props.courses ;
        console.log(courses);

        return <div className="row">
            {courses.map((item,i)=>{
              return <Course key={i} item={item} func={this.props.func}/>
            })}
        </div>
    }
}

class Course extends React.Component{

  clicker(){
    var active = !this.state.active ;
    this.setState({active:active});
    this.props.func(active?this.props.item["price"]:-this.props.item["price"]);
    if(active){
      this.setState({buttonClass:"btn btn-danger",buttonValue:"Remove from Cart"});
    }
    else{
      this.setState({
        buttonClass: "btn btn-success",
        buttonValue: "Buy Now"
      });
    }
  }

  constructor(props){
    super(props);

    this.state = {
      active:false,
      buttonClass: "btn btn-success",
      buttonValue: "Buy Now"
    };

    this.clicker = this.clicker.bind(this);
  }

  render(){
    return <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100">
    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
        <div className="card-body">
            <h4 className="card-title">
            <a href="#">{this.props.item["name"]}</a>
            </h4>
            <h5>{this.props.item["price"]}</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card-footer">
            <button onClick={this.clicker} className={this.state.buttonClass}>{this.state.buttonValue}</button>
        </div>
    </div>
    </div>
  }
}

export default Courses ;
