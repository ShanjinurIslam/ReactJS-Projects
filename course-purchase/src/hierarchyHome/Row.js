import React from 'react'
import NameCatagory from './NameCatagory'
import Carousel from './Carousel'

class Row extends React.Component{

    sumPrice(price){
      this.setState({total:this.state.total+price});
    }

    constructor(props){
      super(props);

      this.state = {
        total : 0
      };

      this.sumPrice = this.sumPrice.bind(this);
    }

    render(){
        var title="Software Development Courses";
        var catagories = ["Web Development","Mobile App Development","Game Development"];
        var items = [
            "http://placehold.it/900x350",
            "http://placehold.it/900x350",
            "http://placehold.it/900x350"
        ]
        var courses = [{name:"A",price:39.99},
        {name:"B",price:79.99,active:false},
        {name:"C",price:59.99,active:false},
        {name:"D",price:69.99,active:false},
        {name:"E",price:59.99,active:false},
        {name:"F",price:69.99,active:false}]

        return <div className="row">
            <NameCatagory title={title} catagories={catagories} courses={courses} total={this.state.total}/>
            <Carousel items={items} courses={courses} func={this.sumPrice}/>
        </div>
    }
}

export default Row ;
