const promiseOne = new Promise(function(resolve,reject) {
    // DO an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // achha resolve ho gya hai matlab promise task complete ho gya okay ab main kaam karta hu
    },1000);
});

// resolve ke saath connected hai then ke saath
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){ // variable store nhi kiye na isliye direct .then laga diye
    console.log("Async 2 is resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "kid@gmail,kom"}) // Koi v parameter pass kar sakte hai then function me
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Ankit",pass:"kiddo"});
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
// promiseFour.then().catch() // then for resolve and catch for error

// const result = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// })
// Ye uper return kahan pe ho rha hai 
// console.log(result); //result me ? ans : naaah

// aise toh NHI ho sakta
//toh then ka chaining karte hai 

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{ // pehla wala then user.username return kar rha hai jo ki dusre wale then me jaa rha hai
    console.log(username);
}).catch(function(errorrrr){
    console.log(errorrrr);
}).finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JavaScript",pass:"kiddo"});
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

// Another way to handle promise: 
async function consumePromiseFive(){
    try{
        const response = await promiseFive 
        console.log(response);
    }
    catch(error){
        console.log(error);
    }    
}

consumePromiseFive();


//fetch keyword use :  api se data lana
// fetch keyword only gives error when it is unable to fetch the api .
// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data =  await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(`Error : ${error}`);
//     }
// }


// getAllUsers();

// Promise method se :
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})