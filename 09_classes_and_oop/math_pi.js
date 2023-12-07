
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)

const chai = {
	name: "ginger chai",
	price: 250,
	isAvailable: true,

	orderChai: function () {
		console.log("chai nahi bani");
	}	
};


// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, value] of Object.entries(chai)) {
	if (typeof value !== "function") {
		console.log(`${key} : ${value}`);
	}
}

Object.defineProperty(chai, "price", {
	enumerable: false
});

for (let [key, value] of Object.entries(chai)) {
	if (typeof value !== "function") {
		console.log(`${key} : ${value}`);
	}
}