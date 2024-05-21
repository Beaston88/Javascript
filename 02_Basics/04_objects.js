// const tinderUser2 = new Object()  // Singleton object 
const tinderUser = {}  //Non singleton object
// console.log(tinderUser);
// console.log(tinderUser2);

tinderUser.id = 12345
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "sam@gmail.com",
    fullname : {
        userFullName : {
            firstname : "Sam",
            lastname : "Bahadur"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3); // Same array problem object inside object

// const obj3 = Object.assign({},/* targer */obj1,/*source */ obj2) //if we don't give {} then it will change the value of target object too.

const obj3 = {...obj1,...obj2}
// console.log(obj3);

// object inside an Array
const myArr = [
    {
        id : 123,
        email : "A@yes.com"
    },
    {
        id : 123,
        email : "A@yes.com"
    },
    {
        id : 123,
        email : "Ab@yes.com"
    },
    {
        id : 123,
        email : "A@yes.com"
    }
]
// console.log(myArr)
// console.log(myArr[2].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //We get keys as an array. So we can perform arrays operation on this
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));