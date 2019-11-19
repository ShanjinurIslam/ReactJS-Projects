//normal function
function add(a, b) {
  return a + b;
}

//this is arrow function
var arrowAdd = (a, b) => {
  return a + b;
};

var func = () => {
    let score = 200 ;
    let bonus = 50;
    return score+bonus;
};


console.log(func())