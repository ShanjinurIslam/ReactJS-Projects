class Marvel {
    constructor(name) {
        this._name = name;
    }
    superpower() {
        console.log("Here is a method : " + this._name);
    }
}

let marvel = new Marvel('Superman');
marvel.superpower();