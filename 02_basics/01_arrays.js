// arrays

const myArr = [0, 1, 2, 3, 4, 5, true, "prayas"];

const heroes = ["Iron man", "Captain America", "Thor", "Hulk"];

const myArr2 = new Array(0, 1, 2, 3, 4, 5);
// console.log(myArr[0]);

// Array methods

// myArr2.push(6);
// myArr2.push(7);
// myArr2.pop();

// myArr2.unshift(9);
// myArr2.shift();

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(19));
// console.log(myArr2.indexOf(3));

const newArr = myArr2.join();

// console.log(myArr2);
// console.log(`${typeof newArr}  =>  ${newArr}`);

// Slice, Splice

console.log(`1) Original array: ${myArr2}`);

const myn1 = myArr2.slice(1, 3);

console.log(`2) Sliced array: ${myn1}`);
console.log(`3) Original array: ${myArr2}`);

const myn2 = myArr2.splice(1, 3);

console.log(`4) Spliced array: ${myn2}`);
console.log(`5) Original array: ${myArr2}`);