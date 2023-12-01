
function sayMyName() {  
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("S");
}

// sayMyName // reference: very important concept for button onClick and in react

//sayMyName();

// function addTwoNumbers( number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers( number1, number2) {
    // let result = number1 + number2;
    // console.log("Prayas");
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log(`Result: ${result}`);

function loginUserMessage (username = "user") {
    if (!username) {
        console.log(`Please enter the username`);
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("prayas"));
// console.log(loginUserMessage());

// Rest operator
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(300));
// console.log(calculateCartPrice(200, 300, 400, 600, 2000));


const user = {
    username: "hitesh",
    // price: 199,
    prices: 199
};

function handleObject (anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "prayas",
//     price: 399
// });

const myNewArray = [200, 400, 100, 600];

function returnSecondValue (getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 700, 300, 1100]));