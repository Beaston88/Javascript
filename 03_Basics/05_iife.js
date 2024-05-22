// Immediately Invoked Function Expressions (IIFE)
//when we want any function no to get polluted from any global scope (Execute just after defition) : We do it to avoid pollution generated from global scope


(function chai(){
    // Named iife
    console.log(`DB Connnected`);
})(); //semi colon is compulsory as it does not know where to stop after immediate invoke
//()()
// first parenthesis is function definition and second one is execution


((name) => {
    // unnamed iife
    console.log(`DB Connected two ${name}`);
})('Ankit'); // yahan pe value dete hai 