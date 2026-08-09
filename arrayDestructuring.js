const numbers = [10, 20, 30];
const[first,second,third,fourth]=numbers
console.log(first)

//object destructuring
const product = {
  title: "Laptop",
  price: 999,
  category: "Electronics",
  stock: 15
};

const { title, price, category, stock } = product;

console.log(title);
console.log(price);


const person = {
  name: "Tracy"
};
const {
  name,
  age = 18
} = person;

console.log(age);