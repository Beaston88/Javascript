let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2024,9,9)  // months start from zero in javascripts when we write in single digits
// console.log(myCreatedDate.toDateString())
let myCreatedDate = new Date(2024,9,9,5,30)  // 
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate2 = new Date("2004-05-09") //months start from one in javascripts when we write in double digits
// console.log(myCreatedDate2.toDateString())

let myCreatedDate3 = new Date("10-24-2009")
//to convert date in miliseconds so that we can use it to compare
// console.log(myCreatedDate3.getTime)
// console.log(myCreatedDate3.toLocaleString())

//*********************************** Time stamps **************************************************//
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime())//For comparison

// console.log(Math.floor(myTimeStamp/1000)); //to convert into seconds

let newDate = new Date();
// console.log(newDate)
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay() and the time}`
// ctrl + space for the suggestion menu
newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate.toLocaleString())