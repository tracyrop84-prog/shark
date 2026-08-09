

function sayHello(){
    return "hello tracy";
}

console.log(sayHello())

function multiply(a,b){
    return a*b;
}

console.log(multiply(8,9))
console.log(multiply(26,45))

function add(c,d){
    return c+d;
}
let sum1=add(5,5);
let sum2=add(50,50)
console.log(`sum1= ${sum1} sum2= ${sum2}`)

//local variables
function greet(){
    let message="habari"
    console.log(message);
}
greet()

//function stored in variable
const introduceYourself=function(name){
    return `hello my name is ${name}`;
}
console.log(introduceYourself("tracy"))
