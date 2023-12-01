// var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log(`Block scope a:  ${a}`);
}

// console.log(`Global scope a: ${a}`);
// console.log(b);
// console.log(c);


function one() {
    const username = "prayas";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website)

    // two();
}

// one();

if(true) {
    const username = "prayas";
    if(username === "prayas") {
        const website = " linkedin";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ******************************** Interesting **************************************


console.log(addOne(5));
function addOne(num) {  // can be accessed before initialization
    return num + 1;
}


// also known as Expression. Since variable can hold any value for eg array, object etc

// console.log(addTwo(5)) => Error: Cannot access function before initialization 
// Hoisting and execution context concepts

const addTwo = function(num) { 
    return num + 2;
}

addTwo(5);