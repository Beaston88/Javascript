const user = {
    username : "Ankit",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam Bahadur"
// user.welcomeMessage()
// console.log(user.username);
// console.log(this);

function coffee(){
    let username = " Ankit "
    console.log(this.username); // we can't use this with a funtion , it can be used with objects only.
}
// coffee()

//Arrow Function :
// const coffee = () => {
//     username = "Ankit"
//     console.log(this); // {}
//     console.log(this.username); //undefined
// }
// coffee()

// Explicitely
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

//Implicitely return : One Liner
const addTwo = (num1,num2) => num1 + num2
console.log(addTwo(3,4));


const addThree = (num1,num2,num3) => (num1 + num2 + num3) // Curly brackets : return statement , small braces : no need of return statement
console.log(addThree(3,4,5));

// Return objects
const addFour = () => ({username: "Ankit"})
console.log(addFour());