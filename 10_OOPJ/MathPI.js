// Ques : JS me Pi ki value 3.14..... hoti hai kya ham isko change kar sakte hai. Ab badi obvious si baat hai ki pi toh constant hai isko kaise change kare? 
// Chaliye karke dekhte hai 

// Object.getOwnPropertyDescriptor(here property name) // It tells about hidden properties of object

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const descripter = Object.getOwnPropertyDescriptor(Math,"PI") // Math toh yahan pe object hai usme se PI naam ki properties ko explain kar rhe hai ham log 
// console.log(descripter);

const chai = {
    name : "Ginger Chai",
    price : "250",
    isAvailable : true,
    orderChai : function(){
        console.log("chai nhi bani ");
    }
}
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    // writable: false,
    enumerable: true
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// chai.name = "Coffee";
// console.log(chai.name);

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){ // function ko handle karne ke liye 
        console.log(`${key} : ${value}`);
    }
}