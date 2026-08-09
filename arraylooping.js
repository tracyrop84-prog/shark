//for llop
/*
const patients = ["John", "Mary", "James", "Alice", "Tracy"];
for (let i = 0; i < patients.length; i++) {
  console.log(` ${i + 1}: ${patients[i]}`);
}

//forEach()
patients.forEach(function (patients) {
  console.log(patients);
});
*/
const songs = ["Shape of You", "Believer", "Perfect"];

songs.forEach(function (song) {
  console.log(`Now Playing: ${song}`);
});

const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(function (fruit, index) {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});

//map()
const patients = ["John", "Mary", "James"];
const newNames = patients.map(function (patient) {
  return `Patient: ${patient}`;
});
console.log(newNames);
// filter()
const ages = [5, 17, 23, 40, 12, 65];
adultPatients = ages.filter(function (age) {
  return age >= 18;
});
console.log(adultPatients);

// reduce()
const patientsPerDay = [12, 15, 10, 18, 20];
const totalPatientsPerDay = patientsPerDay.reduce(function (total, patients) {
  return total + patients;
}, 0);
console.log(totalPatientsPerDay);
/*
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
  
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

let salary = Number(prompt(`Enter your salary`));

while (isNaN(salary) || salary <= 0) {
  alert(`Invalid salary. Please enter a valid number.`);
  salary = Number(prompt("Enter your salary"));
}
console.log(`Gross salary accepted.`);

// do  while
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 9);

//break
for (let i = 1; i <= 10; i++) {
  if (i === 6) continue;
  console.log(i);
}
*/
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;
  console.log(i);
}

const tutorials = [
  "what does the this keyword mean?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "understanding closures in javascript",
];

const tutorialsTitleCase = tutorials.map(function (tutorial) {});
