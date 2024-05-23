const userEmail = "a@gmail.ai"

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Yo buddy do it again");
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// rest all are truthy values
// "0",'false'," ", [], {}, function(){} 

// if(userEmail.length === 0){ // since it's not an array so it will not go inside if.
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length===0){ // Object.keys will give an array of keys so we can check it with it's length value
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? undefined
val1 = null ?? 10 ?? 15
// val1 = undefined ?? 10 


console.log(val1);

// Ternary operator
// condition?value1:value2
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("Bring me tea"): console.log("It's costly");