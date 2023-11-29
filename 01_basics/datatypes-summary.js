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
// console.log(bigNumber);

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

// console.log(typeof heroes);


// **************************** Memory **************************************

// Types of Memories: Stack and Heap
// Stack memory is used in Primitive datatypes
// Heap memory is used in Non-primitive datatypes


let myName = "Prayas";

let anotherName = myName;

anotherName = "Birsu";

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "prayas@google.com";

console.log(userOne.email);
console.log(userTwo.email);


// Stack gives the copy of the primitive datatypes (copy of the original value)
// Heap gives the reference of the non-primitive datatypes (ref of the original value)