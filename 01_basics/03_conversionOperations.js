let score = "prayas";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(`${typeof(valueInNumber)} ${valueInNumber}`);

// "33" => 33
// "33abc" => NaN
// "prayas" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "prayas" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(`${typeof stringNumber} ${stringNumber}`);