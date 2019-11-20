let pikachu = {
    name: "I am pikachu",
    power: "I can electrify"
};

let clifary = {
    name: "I am clifary",
    power: "I am cute"
};

let pokemon = new Map();
pokemon.set('pika', pikachu);
pokemon.set("cli", clifary);

console.log(pokemon);
console.log(pokemon.size)

for (key of pokemon.keys()) {
    console.log(key);
}

for (val of pokemon) {
    console.log(val);
}