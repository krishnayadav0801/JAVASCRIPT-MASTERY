const accountId = "1446544"
let accountEmail = "krishna@gmail.com"
var accountPassword = "12344"
accountCity = "Haryana"
let accountState;

// accountId = 2 Not Allowed 

accountEmail = "yadav@gmail.com"
accountPassword = "1234"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope.
*/


console.table([accountId, accountState, accountEmail, accountPassword, accountCity])
