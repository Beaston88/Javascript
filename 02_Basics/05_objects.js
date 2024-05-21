const course = {
    courseName : "JS in Hindi",
    coursePrice : 999,
    courseInstructor : "Hitesh"
}
// course.courseInstructor

// Another optimised and clean looking way to print object element 
// const {courseInstructor} = course //curly braces means destructuring 
// console.log(courseInstructor);

//We can give our own name to it.
const {courseInstructor : instructor} = course 

console.log(instructor);


// API : Backend provide some values and art of writing those values is API. Earlier it is in XML format. But now it is in JSON format
//JSON: similar to object but key is also a string and values(usually) are also a string
// {
//     "name": "Ankit",
//     "courseName" : "JS",
//     "price" : "free"
// }

// Sometimes it is in the form of a array: 
// [
//     {},
//     {},
//     {}
// ]

// a famous api : random user me api
// tool for understanding api : JSON editor
