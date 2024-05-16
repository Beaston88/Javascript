let score = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;
let score5 = true;
let score6 = "Ankit";

/*
console.log(typeof score)
let valueInNumber = Number (score) //String is typeCasted (converted) to number //Catch : Number is starting with capital N same with any other conversion like String 
console.log(typeof valueInNumber)
console.log(valueInNumber)  
*/

/*
//Now suppose String does not contain any number it also have string then ??
let valueInNumber2 = Number (score2) // It will still typecast it. But conversion will give output as NaN : Not a Number
console.log(typeof valueInNumber2)
console.log(valueInNumber2)
*/

/*
// For null
let valueInNumber3 = Number (score3)
console.log(typeof valueInNumber3) 
console.log(valueInNumber3) //O/p : 0
*/

/*
// For undefined
let valueInNumber4 = Number (score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4) // O/p : NaN
*/

/*
// For true
let valueInNumber5 = Number (score5)
console.log(typeof valueInNumber5)
console.log(valueInNumber5) // O/p : 1
*/

/*
// For string
let valueInNumber6 = Number (score6)
console.log(typeof valueInNumber6)
console.log(valueInNumber6) // O/p : NaN
*/

/*
// Number to Boolean
// let isLoggedIn = 1
let isLoggedIn = "Ankit"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // O/p : true for 1  and string and false for 0
*/

/*
// Number to string 
let num = 65
let stringValueOfNum = String (num)
console.log(stringValueOfNum)
console.log(typeof stringValueOfNum) 
*/


// **************************************** Operations *****************************************
let value = 3
let negValue = -value
// console.log(negValue+" "+value)

//Operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2)
// console.log(2%2)

// Tricky Conversions on String
// let str1 = "Hello"
// let str2 = " Ankit"
// let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(true)
// console.log(+true)
// console.log(+"");

// let num1,num2,num3
// num
1 = num2 = num3 = 2*2

let gameScore = 100;
gameScore++;
console.log(gameScore)
++gameScore
console.log(gameScore)