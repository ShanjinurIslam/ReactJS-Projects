//let lets you declare variables inside a scope
//where var is declared globally

//jshint esnext:true

let myObj = {
  user: "John",
  score: 200
};

//console.log(myObj.score);// this will get and error
let object_member = "score"

let myObj2 = {
  user: "John",
  score: 500,
  highscore() {
    console.log(this.score);
  }
};

console.log(myObj2[object_member]);
