let text = "GOMYCODE IS MY CODING SCHOOL";

// String Reverse

function reversedText() {
  let reversedText = text.split(" ").reverse().join(" ");
  return console.log(reversedText);
}

reversedText(text);

// Character count
function charCount() {
  let charCount = text.length;
  return console.log(charCount);
}
charCount(text);

// Capitalize word
function capitalizeWord() {
  let capitalizeWord = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return console.log(capitalizeWord);
}
capitalizeWord(text);

// Array Functions

let array = ["GOMYCODE", "IS", "MY", "CODING", "SCHOOL"];
let array2 = [1, 2, 3, 4, 6, 9];

// Maximum Value

function maxValue() {
  let maxValue = Math.max(...array2);
  return console.log(maxValue);
}

maxValue(array2);

// minimum value

function minValue(a) {
  let minValue = Math.min(...a);
  return console.log(minValue);
}
minValue(array2);

// Sum of array

function sumOfArray(a) {
  let sum = a.reduce((a, b) => a + b, 0);
  return console.log(sum);
}
sumOfArray(array2);

// filter array

function arrayFilter(a) {
  let filteredArray = a.filter((word) => word.length > 3);
  return console.log(filteredArray);
}
arrayFilter(array);

// Math Functions

num = 7;
num2 = 3;

// Factorial
function arrayFactorial() {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(factorial);
}
arrayFactorial();

// Prime  number check
function primeNumber() {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
}

primeNumber();

// Fibonnaci sequence
function fibSequnce() {
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  console.log(fib);
}

fibSequnce();