const name = "prayas";
const repoCount = 7;

// console.log("Hello my name is "+ name + " and my repo count is " + repoCount); // low readability, old syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // high redability and modern syntax

const gameName = new String("Birsa-munda-21");

// console.log(gameName[0]);  // B
// console.log(gameName.__proto__); // {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("m"));

const newString = gameName.substring(0, 5);
// console.log(newString);

const anotherString = gameName.slice(-9, 5)
// console.log(anotherString);

const newStringOne = "   prayas   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://prayas.com/prayas%20more";

// console.log(url.replace("%20", "-"));
// console.log(url.includes("prayas"));
// console.log(gameName.split("-"));