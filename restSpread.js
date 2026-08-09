const number = [1, 2, 3];
const newNumbers = [...number, 4, 5, 6];

console.log(newNumbers);

function sum(a, b, c) {
  return a + b + c;
}
const numb = [1, 2, 3];
const result = sum(...numb);
console.log(`result of sum: ${result}`);
