// for-in

const myObject = {
    JS: "JavaScript",
    CPP: "C++",
    ROR: "Ruby on Rails",
    PHP: "Hypertext Preprocessor",
    PY: "Python" 
};

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming) {
//     // console.log(key); 
//     console.log(programming[key]);
// }

const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("FR", "France");

for (const key in map) {
    console.log(key);
}

// ** Map are not iterable **


