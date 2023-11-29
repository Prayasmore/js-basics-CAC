
const marvel_heroes = ["Ironman", "Spiderman", "Doctor Strange", "Thor"];

const dc_heroes = ["Superman", "Batman", "Shazam", "Flash"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[4][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// Spread Operator

const all_heroes = [...marvel_heroes, ...dc_heroes];

// console.log(all_heroes);

const arr = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]];

const flat_arr = arr.flat(2); // Depth = 2 or Infinity
console.log(flat_arr);

console.log(Array.isArray("Prayas"));
console.log(Array.from("Prayas"));
console.log(Array.from({ name: "prayas"})); // returns []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));