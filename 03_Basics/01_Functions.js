function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}
// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(3,null);
// console.log(result); //Function is not returning anything so it's has value undefined.

function addTwoNumbers(number1,number2){
    // console.log(number1 + number2);
    let result = number1 + number2;
    return result
}
const result = addTwoNumbers(3,8);
console.log("Result : ",result);

function userLoggedIn(username = "Sam"){
    // if(username=== undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(userLoggedIn("Ankit"));
console.log(userLoggedIn());  // When we don't pass any parameter then it gives undefined


