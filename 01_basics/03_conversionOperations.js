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
// console.log(`${typeof stringNumber} ${stringNumber}`);

// ************************** Operations *****************************************

let value = 7;
let negValue = -value;
// console.log(negValue);

// console.log(2+2); // Addition => 4
// console.log(2-2); // Subtraction => 0
// console.log(2*2); // Multiplication => 4
// console.log(2**3); // Power: 2 to the 3 => 8
// console.log(2/2); // Division => 1
// console.log(2%2); // Remainder: 2 Modulo 2 => 0

let str1 = "hello";
let str2 = " prayas";
let str3 = str1 + str2;
// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);