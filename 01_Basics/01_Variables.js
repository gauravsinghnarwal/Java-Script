const accountId = 875512
let accountEmail = "gaurav@gmail.com"
var accountPassword = "725030"
accountCity = "jaipur"

// accountId = 2 //not allowed // var not scope issue

accountEmail = "hc@hc.com"
accoountPassword = "545585545"
accountCity = "Bengaluru"
let accountState;

console.log("accountId");

/*
Prefer not use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

