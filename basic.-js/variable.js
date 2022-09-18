// const couldnot reasign
// reasign  could be error: TypeError: Assignment to constant variable.

const name = 'mahbub';
//reassaign
// name =  'hasan'
// console.log(name)


// let variable could be re-assaign
// and it is block scope variabel(varibale can not use to outside the block area like a variable into function)
// A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.let can be updated but not re-declared.
let x = 5; 
//reassaign
x = 6;
// console.log(x)


// var is a global variable and need to avoid var variable
// var variables can be re-declared and updated
// outside declaration and output 
var outside = 5;
function cool(){
    // its could be reassaign

    // outside = 6
    console.log(outside);
}
cool()
