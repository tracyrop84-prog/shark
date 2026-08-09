/*function sum(a = 0, b = 0) {
 return a + b;
}
sum(4, 5);
console.log(sum(4, 6));
//rest parameters
function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}
collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9);
//arrow functions
const add = (x, y) => x + y;
add(6, 10);
console.log(add(6, 10));
//nested functions
function firstName() {
  console.log(`tracy`);
  function lastName() {
    console.log(`kiprop`);
  }
  lastName();
}
firstName();
//scope
function doSomething() {
  let x = 10;
  const y = 20;
  console.log(x, y);
}
doSomething();
//closures     redo closures
function outer(x) {
  function inner(y) {
    return x + y;
  }
  inner(5);
  return x + 5;
}
outer(10);
console.log(outer(10));*/
//call back
/*
function areaCircle(radius) {
  return Math.PI * radius * radius;
}

const areaTriangle = (base, height) => {
  return (1 / 2) * base * height;
};

const areaRectangle = (length, width) => length * width;

console.log(`area of a circle is ${areaCircle(10)}`);
console.log(`area of a triangle is ${areaTriangle(10, 20)}`);
console.log(`area of a rectangle is ${areaRectangle(10, 20)}`);

function shape(functionShape, shapeName, side1, side2, side3) {
  console.log(
    `for shapeFunction ${functionShape} its type is ${typeof functionShape}`,
  );

  console.log(`for shapeName ${shapeName} its type is ${typeof shapeName}`);
  console.log(`for side1 ${side1} its type is ${typeof side1}`);
  console.log(`for side2 ${side2} its type is ${typeof side2}`);
  console.log(`for side3 ${side3} its type is ${typeof side3}`);
  const result = functionShape(side1, side2, side3);
  console.log(`for shape ${shapeName} area is ${result}`);
  return result;
}
shape(areaCircle, "area circle", 10);
shape(areaRectangle, "arearectangle", 6, 2);
shape(areaTriangle, "areatriangle", 8, 4);


function calculateTotal(math, english, science) {
  return math + english + science;
}
calculateTotal(10, 20, 30);
console.log(calculateTotal(10, 20, 30));

const calculateAverage = (math, english, science) =>
  (math + english + science) / 3;

calculateAverage(10, 20, 30);
console.log(calculateAverage(10, 20, 30));

function findHighest(math, english, science) {
  if (math >= english && math >= science) {
    return math;
  } else if (english >= math && english >= science) {
    return english;
  } else {
    return science;
  }
}
findHighest(10, 20, 30);
console.log(findHighest(10, 20, 30));
function findLowest(math, english, science) {
  if (math <= english && math <= science) {
    return math;
  } else if (english <= math && english <= science) {
    return english;
  } else {
    return science;
  }
}
findLowest(10, 20, 30);
console.log(findLowest(10, 20, 30));

function studentResult(callback, studentName, math, english, science) {
  console.log(`student name: ${studentName}`);
  console.log(
    `call back name: ${callback.name} its type is ${typeof callback}`,
  );
  const result = callback(math, english, science);
  console.log(`result: ${result}`);
  return result;
}
studentResult(calculateTotal, "tracy", 10, 20, 30);
studentResult(calculateAverage, "Tracy", 10, 20, 30);

studentResult(findHighest, "Tracy", 10, 20, 30);

studentResult(findLowest, "Tracy", 10, 20, 30);
/*
function pizza() {
  console.log("🍕 Pizza is ready!");
}

function burger() {
  console.log("🍔 Burger is ready!");
}

function chapati() {
  console.log("🫓 Chapati is ready!");
}
function restaurant(cook) {
  cook();
}
restaurant(pizza);
*/
/*
function deposit(balance, amount) {
  return balance + amount;
}
function withdraw(balance, amount) {
  if (amount > balance) {
    return `insufficient funds`;
  }
  return balance - amount;
}
function checkBalance(balance, amount) {
  return balance;
}
function calculateInterest(balance, amount) {
  let interestRate = 0.1;
  return balance + balance * 0.1;
}

function bankTransaction(callback, accountName, balance, amount) {
  console.log(`..................................`);
  console.log(`account holder: ${accountName}`);
  console.log(`callback name: ${callback.name}`);
  console.log(`callback type: ${typeof callback}`);
  let result = callback(balance, amount);
  console.log(`result: ${result}`);
  return result;
}
bankTransaction(deposit, "tracy", 5000, 8000);
bankTransaction(withdraw, "tracy", 5000, 7000);
bankTransaction(checkBalance, "tracy", 5000, 1000);
bankTransaction(calculateInterest, "tracy", 5000, 1000);
*/

//callback function
let greet = function () {
  console.log("hello tracy");
};
//main function
function welcome(greet, name) {
  console.log(`user name: ${name}`);
  greet();
}
welcome(greet, "tracy");

//example 2
//callback functions

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};

//main function
function calculator(callback, num1, num2) {
  console.log(`....................................`);
  console.log(`callback name: ${callback.name}`);
  console.log(`callback type: ${typeof callback}`);
  console.log(`number1 : ${num1}`);
  console.log(`number2 : ${num2}`);

  const result = callback(num1, num2);
  console.log(`answer is : ${result}`);
  return result;
}
calculator(add, 10, 20);
calculator(subtract, 10, 20);
const multiply = (a, b) => a * b;
multiply(10, 9);
