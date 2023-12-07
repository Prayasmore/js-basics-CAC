
function User(email, password) {
	this._email = email;
	this._password = password;

	Object.defineProperty(this, "email", {
		get: function() {
			return `__34${this._email}43__`
		},
		set: function(value) {
			this.email = value;
		}
	})

	Object.defineProperty(this, "password", {
		get: function() {
			return `${this._email}prayas`;
		},
		set: function(value) {
			this.password = value;
		}
	})
}


const prayas = new User("2@3.com", "10");

console.log(prayas.email);
console.log(prayas.password);