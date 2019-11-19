let superheros = new Set(['Iron Man', 'Black Widow', 'Wolverine']);

console.log(superheros);

for (superhero of superheros) {
    console.log(superhero)
}

superheros.add('Captain America');
console.log("/n");
for (superhero of superheros) {
    console.log(superhero)
}

console.log("/n");
superheros.clear();

superheros.add("Captain America");

for (superhero of superheros) {
    console.log(superhero)
};
console.log("/n");