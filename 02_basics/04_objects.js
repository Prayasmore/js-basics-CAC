// const tinderUser = new Object() // Singleton Object
const tinderUser = {} // Non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "1@2.com",
    fullname: {
        userFullname: {
            firstname: "Prayas",
            lastname: "More"
        }
    }
};

// Accessing objects inside object
// console.log(regularUser.fullname.userFullname.firstname); 

// Merging Objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2}; // same array problem 
// const obj3 = Object.assign({}, obj1, obj2, obj4); // Old way
const obj3 = {...obj1, ...obj2, ...obj4}; // latest way

// console.log(obj3);

users = [
    {
        id: "1",
        email: "1@2.com"
    },
    {
        id: "1",
        email: "1@2.com"
    },
    {
        id: "1",
        email: "1@2.com"
    },
    {
        id: "1",
        email: "1@2.com"
    },
    {
        id: "1",
        email: "1@2.com"
    }
];

users[1].email;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(course.courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "999"
// }

