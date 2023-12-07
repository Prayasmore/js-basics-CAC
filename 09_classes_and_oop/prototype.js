// let myName = "Prayas       ";

// console.log(myName.length); // 6
// console.log(myName.trim().length); //* Not this way I want trueLength to be default method
// console.log(myName.trueLength()); //* 12: Which is not the true length


// let myHeroes = ["thor", "spiderman"];

// let heroPower = {
// 	thor: "hammer",
// 	spiderman: "sling",


// 	getSpiderPower:  function() {
// 		console.log(`Spider power is ${this.spiderman}`);
// 	}
// };

// Object.prototype.prayas = function () {
// 	console.log("prayas is present in all objects");
// }

// Array.prototype.heyPrayas = function () {
// 	console.log("Prayas says hello");
// }

// heroPower.prayas(); //* Object has access to method prayas
// myHeroes.prayas(); //* Array has access to method prayas

// myHeroes.heyPrayas();
// heroPower.heyPrayas(); //* Object heroPower does not have access to array method heyPrayas

//* Inheritence

//! This approach is outdated nowadays

// const User = {
// 	name: "chai",
// 	email: "chai@google.com"
// };

// const Teacher = {
// 	makeVideo: true
// };

// const TeachingSupport = {
// 	isAvailable: false 
// };

// const TASupport = {
// 	makeAssignment: "JS assignment",
// 	fullTime: true,
// 	__proto__: TeachingSupport  //* using __proto__ inside a object
// };


// Teacher.__proto__ = User; //* using __proto__ outside

// //* This is the modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher);



//* Solving the problem we encountered at the start

let anotherUsername = "ChaiaurCode       ";

String.prototype.trueLength = function() {
	console.log(this);
	console.log(`${this}`);
	console.log(`True Length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"prayas".trueLength();
"Birsamunda".trueLength();