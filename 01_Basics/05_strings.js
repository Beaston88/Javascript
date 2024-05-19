const name = "Ankit"
const repoCount = 3
// console.log(name + repoCount + " Value"); //Outdated

//Use Backticks
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); //This is called string interpolation


//Declaration of a string 
const getName = new String ('Ankit-kumar-barnwal')
console.log(getName);
console.log(getName[0]);
console.log(getName.__proto__);
console.log(getName.charAt(4));
const newString = getName.substring(0,2) //We can,t give negative value to a substring
console.log(newString);

const anotherString = getName.slice(-2,2) //slice can be used to give negative values
console.log(anotherString);

//trim
const stringOne = "    Ankit     "
console.log(stringOne.trim())

const url = "https://ankit.com/ankit%20barnwal"
console.log(url.replace('%20','-'));

console.log(url.includes('ankit'));
console.log(getName.split('-'))