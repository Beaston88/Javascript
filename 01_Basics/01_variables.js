// const -- for constant
const accountId = 145537

// variable is stored using let and var but var is not used now because it changes all the values of same name inside the file. 
let accountEmail = "ankitkumar@gmail.com"
var accountPassword = "12345"

//JS is a very safe language so we can directly assign values but here's a catch : never do it.
accountCity = "Jaipur"

// When we don't assign any values then it prints undefine
let accountState;

// accountId = 2 // Cannot change the value of a constant
accountEmail = "scsc.gmail.com"
accountCity = "Ludhiyana"
accountPassword = "54321"
console.log(accountId);

// Since we have to write consol again and again we, so let's look at an easy approach
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);