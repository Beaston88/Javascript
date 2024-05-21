//object type - singleton (it is created with the help of constructors)
//way - Object.create

//Declaring Symbol
const mySym = Symbol("Key1") // we cannot directly define symbols in an object {interview question}


// Another way is using literals
const jsUser = {
    name : "Ankit",
    "full name" : "Ankit Kumar Barnwal",
    age : 20,
    // mySym : "KeyValue1", // It is still a string not a symbol
    [mySym] : "KeyValue1" , // Now it is a symbol 
    location : "Patna",
    email : "ankit97@yahoo.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Tuesday"]
}

//ways to access elements of objects
// console.log(jsUser.name);  // . method
// console.log(jsUser["name"]) // string method, Arrays access elements through indices while object understands key value pair. so for name it understands it as "name" string. So it if there is key specifically written in string format then we cannot access it with dot.
// for example : we cannot access full name as jsUser.full name
// console.log(jsUser["full name"]) // this is how we can access it.

//Way to access a symbol in a object . catch : No double inverted comma this time.
// console.log(jsUser[mySym]);

// How to change the values of a key of a object 
jsUser.email = "Live2play86@gmail.com"

//How to freeze a value so that no one can change it
// Object.freeze(jsUser)
jsUser.email = "Beaston88.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting); //function ka sirf reference aaya 
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`); //this keyword is used to access element withing same object.
}
console.log(jsUser.greeting2());