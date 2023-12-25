// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);  
// }

// const greetings = "Hello World!";

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Map datatype - unique key-value pairs only

const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); // will not be displayed in the output since unique value only

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }

const myObj = {
    game1: "NFS",
    game2: "GTA",
    game3: "Spiderman"
}

for (const {key, value} of myObj) {
    console.log(key, ":-", value);
}

// ** Maps are iterable by for-of loop but not objects **