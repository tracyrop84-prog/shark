/*const word = "javascript";
//Index:   0 1 2 3 4 5 6 7 8 9
//         j a v a s c r i p t
//1. get a character by its position[]

console.log(word[0]);
//output j

//2. charAt()
console.log(word.charAt(4));
//output s

//2 slice()
console.log(word.slice(0, 4));
// output java
console.log(word.slice(1));
//output avascript
const name = "tracy";
console.log(name[0].toUpperCase() + name.slice(1));
// output Tracy


const word1 = "apple";
const word2 = "banana";
const word3 = "kenya";

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord(word1));
console.log(capitalizeWord(word2));
console.log(capitalizeWord(word3));
*/
const books = [
  "the lord of the rings",
  "harry potter and the goblet of fire",
  "atomic habits",
  "clean code",
];
const formattedbooks = books.map(function (title) {
  const words = title.split(" ");
  const capitalizeWords = words.map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capitalizeWords.join(" ");
});

console.log(formattedbooks);
