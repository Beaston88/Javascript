let myName = "Ankit                   "

// console.log(myName.trim().length); // But this is very big let's create some of our own
// console.log(myName.trueLength); // We have to create a method where we get the length of the true string i.e, 5 in this case

let myHeroes = ["Thor", "Hulk"];
let heroPwer = {
    Thor : "Hammer",
    Hulk : "smash",
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.Hulk}`);
    }
}


// Kya heroPower ke andar Ankit naam ka koi method hai ?
// nhi hai, lekin agar ham object ke andar hi ankit naam ki property daal de toh by default woh saare object me aa jana chahiye aur uske child jaise ki array, string , function ye sab me v hona chahiye 

// Let's see how to do it

// Object.prototype.Ankit = function(){
//     console.log(`Ankit is present in all objects`);
// }

// heroPwer.Ankit()
// myHeroes.Ankit() // Array me v properties aa gyi 


// Object me prototype add kiya toh Array me v aa gyi
// Reverse possible hai kya?

Array.prototype.Beaston = function(){
    console.log(`Show time dude`);
}

// myHeroes.Beaston()
// heroPwer.Beaston() // Naah yahan pe nhi access aaya

// inheritance

const user = {
    name : "Name",
    email : "Google.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: teachingSupport // inheritance (Ye andar nhi bahar se v kar sakte ho )
}

teacher.__proto__ = user // Bahar se access ^_^


// modern syntax 
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiAurCode         "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()

"Ankit".trueLength()
"Coffee".trueLength()