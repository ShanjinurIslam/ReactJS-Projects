import React from 'react'
import NameCatagory from './NameCatagory'
import Carousel from './Carousel'

class Row extends React.Component{
    
    render(){
        var title="Software Development Courses";
        var catagories = ["Web Development","Mobile App Development","Game Development"];
        var items = [
            "http://placehold.it/900x350",
            "http://placehold.it/900x350",
            "http://placehold.it/900x350"
        ]
        var courses = [{name:"A",price:39.99},
        {name:"B",price:79.99},
        {name:"C",price:59.99},
        {name:"D",price:69.99},
        {name:"E",price:59.99},
        {name:"F",price:69.99}]
        
        return <div className="row">
            <NameCatagory title={title} catagories={catagories} courses={courses}/>
            <Carousel items={items} courses={courses}/>
        </div>
    }
}

export default Row ;