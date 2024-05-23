// const coding = ["js","java","python","cpp"]

// const values = coding.forEach(()=>{ // forEach loop does not return any value
//     return item
// })

// console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum.filter((num) => {  // filter accesses all element and returns values only if condition is given
//     // if(num>4)
//     //     return num
//     //or 
//     return num>4
// })
// console.log(newNums);

const newNums = []
myNum.forEach((num)=>{
    if(num>4)
        newNums.push(num)
})

// console.log(newNums);


let myLib = [
    {
        title:'Book one', genre:'Horror', publish:'1997', edition:'2007'
    },
    {
        title:'Book Two', genre:'History', publish:'1984', edition:'2011'

    },
    {
        title:'Book Three', genre:'Gaming', publish:'2004', edition:'2024'

    },
    {
        title:'Book Four', genre:'Sci-Fi', publish:'2005', edition:'2007'

    }
]
let myCollection = myLib.filter((bk)=>{
    return bk.publish>2000 && bk.genre === "Sci-Fi"
})
console.log(myCollection);