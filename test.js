// Variables and constants
const accountId = 12234
let accountEmail = " ansuman123@gmail.com"
var accountCity = "BBSR"

// lets check which vales we can change and which we cant
// const cannot be changed
// Let and var both can be changed but we prefer to use only
// let coz var is no longer in use due to no scope define


console.table([accountId, accountEmail, accountCity])

accountCity = "rourkela"
accountEmail = "user_id"
let accountdisabled;

console.table([accountCity,accountEmail,accountId,accountdisabled]) 