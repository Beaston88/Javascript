// Datatypes are categorized on the basis of how a datatype is stored in memory and it is accessed. It is of two types:

// 1. Primitive - 7 categories (call by value)
// i. String ii. Number iii. Boolean iv. null v. undefined vi. Symbol vii. BigInt

const score = 100
const scoreValue = 100.80 //It is still a Number.

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);

const bigNumber = 9876543234567887654n //bigint

// 2. Non-primitive (call by reference)
// i. Array ii.Objects iii.Functions

// Arrays
const heros = ["Shaktiman","Naagraj","Doga"]

//Everything inside a curly braces is an object.
let myObj = {
    name: "Ankit",
    age : 20,
}

//Function
const myFunction = function(){
    console.log("Hello World");
}

console.log(myFunction())
console.log(typeof myFunction);
console.log(typeof myObj);

/******************************************** Memory type ***************************************** */
//Stack (Primitive), Heap (Non-primitive)

let myYoutubeName = "Live2Play"
let anotherName = myYoutubeName
anotherName = "Beaston"
console.log(myYoutubeName); // It is done in stack memory.So doesnot changes the actual value it changes the value in one of its copy
console.log(anotherName);

let userOne = {
    Email: "live2play94@gmail.com",
    upi: "user@ybl"
}

console.log(userOne.upi);
let userTwo = userOne
userTwo.upi = "hello@ybl" //It is done in heap memory so it is passed as a reference
console.log(userOne.upi);
console.log(userTwo.upi);
