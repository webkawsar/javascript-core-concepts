

// array er ei syntax ke ki bole daka hoy
let array = new Array("Kawsar", "Mustakim", "Gias", "Ruhi");
console.log(array); // ['Kawsar', 'Mustakim', 'Gias', 'Ruhi']

array = new Array(1, 2, 3);
console.log(array); // [1, 2, 3]

array = new Array(1, 2);
console.log(array); // [1, 2]

array = new Array(3);
console.log(array); // ?

// array er ei syntax ke ki bole daka hoy
array = ["Kawsar", "Mustakim", "Gias", "Ruhi"];
console.log(array);

// evabe jodi likhi tahole ki output pabo
array = Array("Kawsar", "Mustakim", "Gias", "Ruhi");
console.log(array);

// https://www.freecodecamp.org/news/how-to-declare-an-array-in-javascript-creating-an-array-in-js/
// https://javascript.plainenglish.io/six-ways-to-create-an-array-in-javascript-ac4aa115b926
// https://www.freecodecamp.org/news/how-to-create-an-array-in-javascript/

// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.

// In JavaScript, objects use named indexes.

// const fruits = ["Banana", "Orange", "Apple"];

// fruits instanceof Array;

// Array.isArray(fruits);

// refernce data type er maje ki ki ase?
// Array object, function

// how get output from an array

let profile = ["Kawsar", "Ahmed", "Developer"];
const name = ""; // ?
console.log(name); // "Kawsar Ahmed"

// how update an element
profile = ["Kawsar", "Ahmed", "Developer"];
profile[3] = "Designer";
console.log(profile); // ?

// how to dynamically access last element from ana array?
profile = ["Kawsar", "Ahmed", "Developer", true];
const lastElement = profile[profile.length - 1];
console.log(lastElement);

// template string
// profile = `${profile[0] profile[1]}`

// how to works array helper method includes
const arr = [1, 2, 3, 4, 5, 1, 3];
console.log(arr.includes(5));

function myIncludes(array) {
  let results = [1];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    console.log(results[i] === element);
  }

  return;
}

console.log(myIncludes(arr));

profile = {
  firstName: "Kawsar",
  lastName: "Ahmed",
  profession: "Developer",
  skills: [
    "JS",
    "React",
    "Redux",
    "Vue",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "Strapi",
  ],
};

// console.log('lastName' in profile); // true

// variable telesmati

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)

// let one = 0,
// two
// three = 3
// four = 4

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)

// let one = 0, two, three = 3, four = 4

// console.log(one) // ?
// console.log(two) // ?
// console.log(three) // ?
// console.log(four) // ?


// const name = "Kawsar Ahmed";
// const isDeveloper = true;
// const team = ['Samim', 'Kawsar', 'Mustakim', 'Gias', 'Ruhi'];

// 1. home page e course gulo lomba kore dekhabe
// 2. /courses e gele grid kore dekhabe
// 3. course details default jeta udemy er moto
// 4. dashboard er sidebar collapsable kore dite hobe
// 5. home profile er jonno bachhar pick profile ta

// 👉 => Like

// 📌  📌প্রাইস

// 🏆🏆 প্রাইসঃ

// ✅ পাইথন

// 🔗 কোর

// Quiz 2



// 4
// const numbers = [1, 3, 5, 7, 9];

// for (let i = numbers.length - 1; i > 0; i--) {
//   const element = numbers[i];

//   if (element > numbers[i - 1]) {
//     numbers[i] = numbers[i - 1];
//     numbers[i - 1] = element;

//     i = numbers.length;
//   }
// }

// console.log(numbers); // ?




// 7 => incomplete
// Create a function that receives an array of numbers and returns an array containing only the positive numbers

// function getPositives(array) {
//     let results = [];
    
//     // change code below this line

//     // change code above this line
    
//     return results;
// }

// console.log(getPositives([-5, 10, -3, 12, -9, 5, 90, 0, 1])) // [10, 12, 5, 90, 1, 0]




// 10 => incomplete
// Find Unique Positive Numbers from Array
// uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]
// uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]
// uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]



// provided

// 1
const animals = {
  horse: "🐴",
  dog: "🐕‍🦺",
  cow: "🐄",
};

console.log("dog" in animals); // true



// 2
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}



// 3
let stop = false;

for (let i = 0; i < 10; i++) {
  // change code below this line
  if(i===0) {
    stop = true;
    break;
  }
  // change code above this line
}

console.log(stop); // Expected Output: true


// 4
// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(base, power) {
  return base**power;
}

console.log(calculateExponent(5, 5)) // 3125
console.log(calculateExponent(10, 10)) // 10000000000
console.log(calculateExponent(3, 3)) // 27


// 5
// Create a function that takes an array and a string as arguments and returns the index of the string.
function findIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element === target) {
      return i;
    }
  }
}

console.log(findIndex(["hi", "bitbyte", "fgh", "abc"], "fgh")) // 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")) // 1
console.log(findIndex(["a", "g", "y", "d"], "d")) // 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")) // 0




// 6
// Add item beginning of the array
function addItemInArray(array, item) {
  
}

console.log(addItemInArray([1, 3, 5, 7, 9], 11)); // Expected Output: [11, 1, 3, 5, 7, 9]



// 7
function makeAnArray(string) {
  // code
}

console.log(makeAnArray("I Love Bangladesh")); // Expected Output: ["I", "Love", "Bangladesh"]


// 8
// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
function myFunction(a, n) {
  return a[n - 1] || "Invalid";
}

console.log(myFunction('abcd', 1)) // Expected Output: 'a'
console.log(myFunction('zyxbwpl', 5)) // Expected Output: 'w'
console.log(myFunction('gfedcba', 3)) // Expected Output: 'e'



// 9
// Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max

function range(min, max) {
  for (let i = min; min <= max; i++) {
    console.log(min)    
  }
}

console.log(range(77, 89));
// Expected Output: [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89]


// 10
const one = 1;
const two = 2;
const ten = '10';

console.log(1 + 20 + 4) // ?
console.log(1 + 20 + '4') // ?
console.log('4' + 1 + 20) // ?
console.log(one + two); // ?
console.log(one + two + ten) // ?
console.log(ten + one + two) // ?



// 11
// What will be the output and why ?
const result = 2 + 5 * 20;
console.log(result) // ?

