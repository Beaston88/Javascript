// for loop
const arr = [1,2,3,4,5,6,7,8]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element==5){ //if i==5 then first 5 will be printed then 5 is the best number but if element == 5 then vice versa // must run it once
//         console.log("5 is the best number.");
//     }    
//     console.log(element);
// }


for (let i = 1; i <= 3; i++) {
    // console.log(`Outer value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner value ${j} which is a part of outer value ${i}`)
        // console.log(i + " * " + j + " = " + i*j);
    }
}

let myArr = ["Ironman","Thor","Wanda"]
for (let index = 0; index < myArr.length; index++) { //if we want to access an element which is out of bound then js will give undefined
    const element = myArr[index];
    // console.log(element);
}

// break and continue
// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is : ${i}`);       
// }
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is : ${i}`);       
}