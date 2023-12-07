
class User {
	constructor(username) {
		this.username = username;
	}

	logMe() {
		console.log(`Username: ${this.username}`);
	}

	static createId() {
		return "123";
	}
}

const prayas = new User("prayas");
// console.log(prayas.createId());

class Teacher extends User {
	constructor(username, email) {
		super(username);
		this.email = email;
	}
}

const iphone = new Teacher("iphone", "1@2.com");
console.log(iphone.createId());