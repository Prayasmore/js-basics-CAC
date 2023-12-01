const user = {
    username: "prayas",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "birsu";
// user.welcomeMessage();

// console.log(this); // {} => No global contaxt in node environment

// function chai() {
//     let username = "prayas";
//     // console.log(this.username); undefined => You can only use this keyword inside objects
// }

// chai();

// const chai = () => {
//     let username = "prayas";
//     // console.log(this.username); // undefined 
//     console.log(this); // {}
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2  // Implicit return for one line return statement

// const addTwo = (num1, num2) => (num1 + num2) // dont have to write return keyword explicitly

// const addTwo = (num1, num2) => (username: "prayas") // undefined 
const addTwo = (num1, num2) => ({username: "prayas"}) // if you have to return like this then you have to use parenthesis wrapping the curly braces
 
console.log(addTwo(3, 4));