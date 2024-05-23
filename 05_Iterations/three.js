// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) { // object here refer to array name
    // console.log(num);   
}

let greetings = "Hello World!"
for (const chararcter of greetings) {
    // console.log(`Each charAt is  : ${chararcter}`);
}


// Maps

const map = new Map() // map is also an object which contains only unique values
map.set('In',"India")
map.set('USA',"United State of America")
map.set('En',"England")
// map.set('In',"India") // it won't be added as it is a duplicate 
// console.log(map);


for (const [key,value] of map) { // if we write key only then it will give me as an array
    // console.log(key,' :- ',value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'FF',
    'game3' : 'BGMI'
}

for (const [key,value] of myObj) { // objects are not iterable like this
    // console.log(key,' :- ',value); 
}