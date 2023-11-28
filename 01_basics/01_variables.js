const accountId = 144553;
let accountEmail = "1@2.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;


// accountId = 2;  // not allowed

accountEmail = "2@3.com";
accountPassword = "212121";
accountCity = "Hyderabad";


console.log(accountId);

/*
Prefer not to use var keyword because of the 
issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);