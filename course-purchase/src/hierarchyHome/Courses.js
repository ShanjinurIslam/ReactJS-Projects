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
                return <div key={i} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">{item["name"]}</a>
                        </h4>
                        <h5>{item["price"]}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success">Buy Now</button>
                    </div>
                </div>
                </div>
            })}
        </div>
    }
}

export default Courses ;