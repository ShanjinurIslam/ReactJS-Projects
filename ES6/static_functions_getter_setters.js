class Uber {
    static sayHI() {
        console.log("I am a static function");
    }
}

Uber.sayHI();

class Driver {
    constructor(name) {
        this._name = name; //_ means private members
    }

    get myName() {
        return this._name;
    }

    set myName(name) {
        this._name = name;
    }
}

let myDriver = new Driver('Raju');
console.log(myDriver.myName);