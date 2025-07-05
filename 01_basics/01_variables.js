const accountId = 144553
let accountEmail = "boredpanda@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 1221212  //Not allowed bcz we cannot change const value
//console.log(accountId);

/*
Prefer not to use var
bcz of issue in block scope and functional scope.
*/

accountEmail = "mpmp@gmail.com"
accountPassword = "345345"
accountCity = "Punjab"

console.table([accountEmail, accountPassword, accountCity, accountState])
