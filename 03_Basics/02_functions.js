function calculateCartPrice(val1,val2,...num1){ //... rest operator , it is same as spread operator but the difference is where we use it.
    return num1;  // it will return 800 only which is contained in array num1 and first two values are stored in val1,val2
}
console.log(calculateCartPrice(200,4000,800)); // it will create an array of all these items.

const user = {
    username : "Ankit",
    price : 999
}

function handleObject(anyObject){
    console.log(`Usernam is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

//directly passing object to a function.
handleObject({
    username : "Sam",
    price:199
})

//Passing array to a function
const myNewArr = [200,300,100,40]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100,10001,200]));
