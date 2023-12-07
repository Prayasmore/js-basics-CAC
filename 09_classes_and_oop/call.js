//* Call function

function SetUserName(username) {
	// complex DB calls
	this.username = username;
	console.log("called");
}

function createUser(username, email, password) {
	// SetUserName(username); //* only gives reference to actually execute use call method explicitly

	SetUserName.call(this, username);

	this.email = email;
	this.password = password;
}

const chai = new createUser("chai", "chai@google.com", "123");
console.log(chai);

