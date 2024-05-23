const myNum = [1,2,3]
// const totalVal = myNum.reduce(function(acc,currVal) {
//     console.log(`Accumulator : ${acc} and Current value : ${currVal}`);
//     return acc + currVal
// },0) // here we have given initial value of the accumulator 

// console.log(totalVal);

// As an arrow function :

const totalVal = myNum.reduce( (acc,currVal) => acc+currVal ,0) //initial value after comma
console.log(totalVal);


const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "DSA ",
        price : 3999
    },
    {
        itemName : "Blockchain",
        price : 5999
    },
    {
        itemName : "Data Science",
        price : 12999
    }
]
const price2Pay = shoppingCart.reduce( (acc,item)=> acc + item.price,0)
console.log(price2Pay);