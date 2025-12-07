const accountId = 12736576
let accountEmail = "ankit@test.com"
var accountPassword = "12345"
accountCity = "Ranchi"

let accountState;

// accountId = 2 // not allowed

accountEmail = "dfjgdshrg@test.com"
accountPassword = "21212121"
awccountCity = "Bangalore"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])