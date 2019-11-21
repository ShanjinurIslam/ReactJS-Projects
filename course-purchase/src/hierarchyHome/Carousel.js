import React from 'react'
import Courses from './Courses'

class Carousel extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        var items = this.props.items ;
        return <div className="col-lg-9">
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
            {items.map((item,i)=>{
                if(i==0)
                    return <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className="active"></li>
                else
                    return <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i}></li>

            })}
          </ol>

          <div className="carousel-inner" role="listbox">

            {items.map((item,i)=>{
                if(i==0){
                    return <div  key={i}  className="carousel-item active">
                     <img className="d-block img-fluid" src={item} alt="First slide"/>
                    </div>
                }
                else{
                    return <div  key={i} className="carousel-item">
                     <img className="d-block img-fluid" src={item} alt="First slide"/>
                    </div>
                }
            })}

          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <Courses courses={this.props.courses} func={this.props.func}/>
        </div>
    }
}

export default Carousel ;
