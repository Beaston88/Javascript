const user = {
    username : "Ankit",
    loginCount : 9,
    singnedIn : true,
    getUserDetails : function(){
        // console.log("Got user details from DB");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }

}



// console.log(user["loginCount"]);
// user.getUserDetails()
// console.log(this);

// Constructor Function
function User(username,loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = new User("Ankit", 11, true);
const userTwo = new User("Hitesh", 1, false);

// console.log(userOne);// Without new keyword it will overwrite
// With new keyword
// console.log(userOne); 
// console.log(userTwo); 

// new keyword
// 1. pehle naya object create hota hai 
// 2. constructor function call hota hai new keyword ke karan
// 3. saare argument this keyword ke karan inject ho jate hai
// 4. aapko mil jata hai sab kuch function ke karan

console.log(userOne.constructor); 
