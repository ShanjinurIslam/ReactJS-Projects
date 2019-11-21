import React from 'react'

import * as firebase from 'firebase'; //this is the fix

var uuid = require('uuid');

var firebaseConfig = {
    apiKey: "AIzaSyB1T0Z-a-t5CZ5y-r3QcUN9U98oCDYLEVg",
    authDomain: "u-survey-da755.firebaseapp.com",
    databaseURL: "https://u-survey-da755.firebaseio.com",
    projectId: "u-survey-da755",
    storageBucket: "u-survey-da755.appspot.com",
    messagingSenderId: "197638009711",
    appId: "1:197638009711:web:e65429c710e283d473ae9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

class Usurvey extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            uid : uuid.v1(),
            studentName : '',
            questions:[{
                name:"answer1",
                question:"what kind of courses you like the most",
                answers:['Technology','Design','Marketing'],
            },
            {
                name:"answer2",
                question:"You are a",
                answers:['Student','Job Holder','Looking for a Job'],
            },
            {
                name:"answer3",
                question:"Is online learning helpful? :",
                answers:['Yes','No','Maybe'],
            }],
            answers:{
                answer1:'',
                answer2:'',
                answer3:''
            },
            isSubmitted:false
        }

        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSubmit = this.answerSubmit.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
    }

    nameSubmit(){
        this.setState({
            studentName : this.refs.name.value},
            function() {
                console.log(this.state);
            }
        );
    }

    answerSubmit(event){
        var my_answers = this.state.answers ;
        if(event.target.name=="answer1"){
            my_answers.answer1 = event.target.value;
        }
        
        else if(event.target.name=="answer2"){
            my_answers.answer2 = event.target.value;
        }
        
        else if(event.target.name=="answer3"){
            my_answers.answer3 = event.target.value;
        }

        this.setState({answers:my_answers},function(){
            console.log(this.state);
        });
    }

    questionSubmit(){
        firebase.database().ref('uSurvey/'+this.state.uid).set({
            studentName:this.state.studentName,
            answers:this.state.answers
        });
        this.setState({
            isSubmitted : true
        },function() {
            console.log(this.state);
        });
    }

    render(){
        var studentName ;
        var questions ;

        if(this.state.studentName=='' && this.state.isSubmitted==false){
            studentName = <div>
            <h1>Type your name</h1>
            <form onSubmit={this.nameSubmit}>
                <input className="namy" type="text" placeholder="Your Name" ref="name"></input>                
            </form>
            </div>
        }
        else if(this.state.studentName!='' && this.state.isSubmitted==false){
            studentName = <div><h1>Welcome to U-Survey, {this.state.studentName}</h1></div>
            questions = <div>
                <form onSubmit={this.questionSubmit}>
                    {this.state.questions.map((item,i)=>{
                    return <div key={i} className="card">
                        <label>{item.question}</label><br/>
                        {item.answers.map((answer,j)=>{
                            return <div key={j}><input type="radio" value={answer} name={item.name} onChange={this.answerSubmit}></input>{answer}</div>
                        })}
                    <br/>                     
                    </div>})}
                    <input className="feedback-button" type="submit" value="submit"></input>
                </form>
            </div>
        }
        else if(this.state.isSubmitted==true){
            studentName = <h1>Thanks {this.state.studentName}</h1>
        }


        return <div>
            <h2>I am from survey component</h2>
            {studentName}
            ------------
            {questions}
            <hr/>
        </div>
    }
}


export default Usurvey;
