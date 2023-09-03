// Task 1: Swap

let x = 5;
let y = 10;
[x, y] = [y, x];
console.log("x:", x); 
console.log("y:", y); 

// -------------------------------------------------

// Task 2: 

const minMax = (...values) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return [min, max];
}

const numbers = [3, 8, 1, 9, 5];
const [minValue, maxValue] = minMax(...numbers);

console.log("Min:", minValue); // 1
console.log("Max:", maxValue); // 9

// -------------------------------------------------

// Task 3: 

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a. Test if every element is a string
const allStrings = fruits.every(item => typeof item === "string");
console.log("Every element is a string:", allStrings);

// b. Test if some elements start with "a"
const someStartsWithA = fruits.some(item => item.startsWith("a"));
console.log("Some elements start with 'a':", someStartsWithA);

// c. Generate a new array with elements starting with "b" or "s"
const filteredArray = fruits.filter(item => item.startsWith("b") || item.startsWith("s"));
console.log("Filtered array:", filteredArray);

// d. Generate a new array with liking each fruit
const likeFruitsArray = fruits.map(item => `I like ${item}`);
console.log("Array with liking each fruit:", likeFruitsArray);

// e. Display elements of the new array using forEach
likeFruitsArray.forEach(item => { console.log(item); });

// -------------------------------------------------

