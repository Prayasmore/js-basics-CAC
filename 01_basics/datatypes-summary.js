// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

const bigNumber = 123455678565445564n;
console.log(bigNumber);

// Reference (Non-primitive)
// Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga", "Hatim", "Karma"];

let myObj = {
    name: "Prayas More",
    age: 24
}

const myFunction = function () {
    // console.log("Hello World");
}

console.log(typeof heroes);