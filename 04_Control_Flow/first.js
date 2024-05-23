//if
let isLoggedIn = false
if(2==="2"){
    console.log("Hello Buddy");

}
else console.log("YO YO");

// <,>,<=,>=,==,!=,===

// one liner
const score = 1000
if(score>500) console.log("Good score");  // This is implicite syntax for one line statement inside it.
// However we can use the same syntax for more than one line by putting commas after each line and semicolon at last line.
if(score>600) console.log("Yo buddy great score"), console.log("How did you do that");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = false;
const loggedInFromGoogle = true;

if(userLoggedIn && debitCard){
    console.log("Allowed for shopping");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Access the website");
}