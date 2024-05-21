// const score = 400
// console.log(score)

// //How to explicitely define a datatypes
const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);

console.log(balance.toFixed(1));

const othernumber = 23.8966;
console.log(othernumber.toPrecision(3));
console.log(othernumber.toPrecision(2));

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'))


//+++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4))
console.log(Math.round(4.47))  //round off the first digit after decimal
console.log(Math.ceil(4.47))
console.log(Math.floor(4.47))
console.log(Math.max(8,7,6));
console.log(Math.min(8,7,6));

//Math.random - gives value between 0 and 1
console.log(Math.random());
console.log((Math.random()*10)+1); 
console.log((Math.floor(Math.random()*10))+1);

//for a specific range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);  //remember this formula

