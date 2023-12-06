// const user = {
// 	username: "prayas",
// 	loginCount: 8,
// 	signedIn: true,

// 	getUserDetails: function() {
// 		// console.log(`Username: ${this.username}`);
// 		console.log(this);
// 	}
// };


// console.log(user.username);
// console.log(user.getUserDetails());

/* 
* If we want to create multiple users with different values we have to write the same object again and again.
* that's why we use constructor for writing same code multiple times.
*/

function User(username, loginCount, isLoggedIn) {
	this.username = username;
	this.loginCount = loginCount;
	this.isLoggedIn = isLoggedIn;

	this.greeting = function() {
		console.log(`Welcome ${this.username}`);
	}

	return this;
}

//* without using new keyword 
// const userOne = User("prayas", 21, true);
// const userTwo = User("birsu", 23, false);

//* with using new keyword
const userOne = new User("prayas", 21, true);
const userTwo = new User("birsu", 23, false);

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);

