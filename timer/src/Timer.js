import React from 'react'

class Timer extends React.Component{

    componentDidMount(){
        setInterval(this.ticker,1000);
    }

    ticker(){
        console.log(1900)
        this.setState({
            clock : Date.now() - this.props.start
        });
    }

    constructor(props){
        super(props);
        this.state = {
            clock : 0
        };
        this.ticker = this.ticker.bind(this);
    }

    render(){
        var clock = Math.round(this.state.clock/1000);
        return <div>
            <p>You have been in this website for: </p>
            <span>{clock}</span>
            <p>Seconds</p>
        </div>
    }
}

export default Timer; 