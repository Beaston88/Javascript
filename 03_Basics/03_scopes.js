// var c = 300
let a = 300; 
if(true){ // Local scope and outside it global scope
    let a = 10; //scope is inside if only
    const b = 10; //scope is inside if only
    // var c = 30;  //this will be runnable anywhere 
    console.log("Inner : ",a);
}


console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Beaston88"
    function two (){
        const youtube = "Live2Play"
        console.log(username);
    }
    two()
    // console.log(youtube);
}
// one()

if(true){
    const username = "Ankit"
    if(username=="Ankit"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}

console.log(addTwo())  // It will give error
const addTwo = function(num){ //Function as a variable
    return num + 2
}