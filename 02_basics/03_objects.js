// singleton 
// Object.create

// object literals

const mySymbol = Symbol("key1");

const JsUser = {
    name: "Prayas",
    age: 24,
    "full name": "Prayas More",
    [mySymbol]: "mykey1",
    location: "Mumbai",
    email: "1@2.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Tue", "Wed"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

// JsUser.email = "2@3.com";
// Object.freeze(JsUser); // locks the object i.e. cannot change the values of object
// JsUser.email = "3@4.com";
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// There will be situations where you have to use bracket notation in objects instead of dot notation