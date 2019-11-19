let score = 100;

if(true){
    let score = 80; //to use something in a scope use let
    console.log(score);
}

score = 200;
console.log(score);

const carType = 'Sedan';//this can't be changed

const CARS = ['BMW','Audi'];//this can be changed
CARS.push('Mercedes');

console.log(CARS)