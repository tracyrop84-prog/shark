// setTimeout(() => {
//   console.log("hello world");
// }, 3000);

// console.log("Start");

// setTimeout(() => {
//   console.log("Middle");
// }, 3000);

// console.log("End");
let count = 0;
const timer = setInterval(() => {
  console.log(count);
  if (count > 10) {
    clearInterval(timer);
    console.log("count finis");
  }
  count++;
}, 1000);
