//array
// const myArr = [0,1,2,3,4,5,true,"Ankit"] //Can be of mixed datatypes
const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]); //accessing

const myHeroes = ["Shaktiman","Naagraaj"]
const myArr2 = new Array(1,2)
// console.log(myArr2.length); //length is not a function, so no need of parenthesis

// Array methods
myArr.push(6) // To insert element in js
myArr.push(7)
// console.log(myArr); //Directly printing the array

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) //it push the elements in the beginning
// console.log(myArr);

// myArr.shift() //it remove the element from the beginning
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join(); //converts array into string
// console.log(myArr);
// console.log(newArr);

//slice , splice
console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

