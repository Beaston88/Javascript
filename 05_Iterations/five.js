const coding = ["js","java","python","cpp"]
coding.forEach(function (i){
    // console.log(i);
})

// one more variation
coding.forEach((item)=> {
    // console.log(item);
})


// one more way
function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)  //reference dena hai () nhi dena

coding.forEach((item,index,arr)=>{
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "Java",
        langFileName : "java" 
    },
    {
        languageName : "Python",
        langFileName : "py" 
    }
]

myCoding.forEach((item)=>{
    console.log(item.langFileName);
})