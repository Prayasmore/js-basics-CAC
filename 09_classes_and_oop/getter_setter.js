class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	} 

	get email() {
		return `__34${this._email}43__`;
	}

	set email(value) {
		this._email = value;
	}

	get password() {
		return `${this._password}prayas`;
	}

	set password(value) {
		this._password = value
	}
}

const prayas = new User("1@2.com", "123");
console.log(prayas.email);
console.log(prayas.password);