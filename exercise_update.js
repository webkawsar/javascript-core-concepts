


// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// function findLongestWordLength(str) {
//   let longestWord = '';

//   const wordsArr = str.split(' ');
//   for (const word of wordsArr) {
//       if(word.length > longestWord.length) {
//           longestWord = word;
//       }
//   }

//   return longestWord.length;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")) // 6
// console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")) // 19
// console.log(findLongestWordLength("Google do a barrel roll")) // 






// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// function sumAll(arr) {
//     const start = arr[0] > arr[1] ? arr[1] : arr[0];
//     const end = arr[0] < arr[1] ? arr[1] : arr[0];
//     let sum = 0;

//     for (let i = start; i <= end; i++) {
//         sum += i
//     }

//     return sum;
// }


// console.log(sumAll([4,1])) // 10
// console.log(sumAll([1, 4])) // 10
// console.log(sumAll([5, 10])) // 45
// console.log(sumAll([10, 5])) // 45





// Sum All Primes

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
// prime number  => A number only divisible by 1 and itself

// function isPrime(number) {
//     if (number <= 1) {
//       return false; // Numbers less than or equal to 1 are not prime
//     }
  
//     // Check for divisibility from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false; // If the number is divisible by any integer, it's not prime
//         }
//     }
  
//     return true; // If no divisors were found, it's a prime number
// }


// function sumPrimes(num) {

//     let sum = 0;

//     for (let i = 2; i <= num; i++) {
//       if (isPrime(i)) {
//         sum += i;
//       }
//     }
  
//     return sum;
// }

// // 2 + 3 + 5
// console.log(sumPrimes(2)) // 2
// console.log(sumPrimes(3))
// console.log(sumPrimes(16)) // 41
// console.log(sumPrimes(10)) // 17
// console.log(sumPrimes(977)) // 73156







// variable telwsmati

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)


// let one = 0,
// two
// three = 3
// four = 4


// let one = 0, two, three = 3, four = 4

// console.log(one) // ?
// console.log(two) // ?
// console.log(three) // ?
// console.log(four) // ?


// const name = "Kawsar Ahmed";
// const isDeveloper = true;
// const team = ['Samim', 'Kawsar', 'Mustakim', 'Gias', 'Ruhi'];




// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.


// function smallestCommons(arr) {
//     return arr;
// }

// // 2*3*4
// console.log(smallestCommons([1,5])) // 60
// console.log(smallestCommons([5, 1])) // 60
// console.log(smallestCommons([2, 10])) // 2520
// console.log(smallestCommons([1, 13])) // 360360
// console.log(smallestCommons([23, 18])) // 6056820



function smallestCommons(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Initialize the result as the maximum number in the range
    let result = arr[1];

    // Keep looping until we find the smallest common multiple
    while (true) {

        let isCommonMultiple = true;
        

        // Check if the current result is evenly divisible by all numbers in the range
        for (let i = arr[0]; i <= arr[1]; i++) {
                        
            if (result % i !== 0) {
                
                isCommonMultiple = false;
                break;
            }
        }

        // If it's a common multiple, return it
        if (isCommonMultiple) {
            return result;
        }

        // Increment the result by the maximum number in the range
        result += arr[1];
    }
}

console.log(smallestCommons([1, 3])) // 6


























// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// function dropElements(arr, func) {
//     const results = [];

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(func(element)) {
//             results.push(...arr.slice(i));
//             break;
//         }
//     }
//     return results;
// }

// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3})) // [3, 4]
// console.log(dropElements([1, 2, 3], function(n) {return n > 0})) // [1, 2, 3]
// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5})) // []
// console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2})) // [3, 9, 2]
// console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1})) // [1, 0, 1]









// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
// Global variables should not be used.
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.


// function steamrollArray(arr) {
//     const flattenedArray = [];

//     function flatten(element) {

//         const isArray = Array.isArray(element);
//         if (isArray) {
//             for (const subElement of element) {
//                 flatten(subElement);
//             }
//         } else {
//             flattenedArray.push(element);
//         }
//     }

//     for (const value of arr) {
//         flatten(value);
//     }

//     return flattenedArray;
// }

// console.log(steamrollArray([[["a", [["b"]]]]])) // ["a", "b"]
// console.log(steamrollArray([1, [2], [3, [[4]]]])) // [1, 2, 3, 4]
// console.log(steamrollArray([1, [], [3, [[4]]]])) // [1, 3, 4]
// console.log(steamrollArray([1, {}, [3, [[4]]]])) // [1, {}, 3, 4]



// alternative way

// function steamrollArray(arr) {
//     const flattenedArray = [];
//     // Loop over array contents
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         // Recursively flatten entries that are arrays
//         //  and push into the flattenedArray
//         flattenedArray.push(...steamrollArray(arr[i]));
//       } else {
//         // Copy contents that are not arrays
//         flattenedArray.push(arr[i]);
//       }
//     }
//     return flattenedArray;
//   };
  

// console.log(steamrollArray([1, [2], [3, [[4]]]]))
// console.log(steamrollArray([[["a", [["b"]]]]])) // ["a", "b"]
// console.log(steamrollArray([1, [2], [3, [[4]]]])) // [1, 2, 3, 4]
// console.log(steamrollArray([1, [], [3, [[4]]]])) // [1, 3, 4]
// console.log(steamrollArray([1, {}, [3, [[[[4]]]]]])) // [1, {}, 3, 4]



// alternative way

// function steamrollArray(arr) {
//     const flat = [].concat(...arr);
//     return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }

// console.log(steamrollArray([[["a", [["b"]]]]])) // ["a", "b"]
// console.log(steamrollArray([1, [2], [3, [[4]]]])) // [1, 2, 3, 4]
// console.log(steamrollArray([1, [], [3, [[4]]]])) // [1, 3, 4]
// console.log(steamrollArray([1, {}, [3, [[[[4]]]]]])) // [1, {}, 3, 4]


// alternative way

// function steamrollArray(val,flatArr=[]) {
//     val.forEach(item => {
//       if (Array.isArray(item)) steamrollArray(item, flatArr);
//       else flatArr.push(item);
//     });
//     return flatArr;
// }

// console.log(steamrollArray([[["a", [["b"]]]]])) // ["a", "b"]
// console.log(steamrollArray([1, [2], [3, [[4]]]])) // [1, 2, 3, 4]
// console.log(steamrollArray([1, [], [3, [[4]]]])) // [1, 3, 4]
// console.log(steamrollArray([1, {}, [3, [[[[4]]]]]])) // [1, {}, 3, 4]


// alternative way

// function steamrollArray(arr) {
//     return arr.reduce((acc, current) => {
//         return acc.concat(Array.isArray(current) ? steamrollArray(current) : current);
//     }, []);
// }


// console.log(steamrollArray([1, [2], [3, [[4]]]]))
// console.log(steamrollArray([[["a", [["b"]]]]])) // ["a", "b"]
// console.log(steamrollArray([1, [2], [3, [[4]]]])) // [1, 2, 3, 4]
// console.log(steamrollArray([1, [], [3, [[4]]]])) // [1, 3, 4]
// console.log(steamrollArray([1, {}, [3, [[4]]]])) // [1, {}, 3, 4]






// String.prototype.charCodeAt
// String.fromCharCode


// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


// function binaryAgent(str) {
//     // Split the binary string into an array of binary representations of characters
//     const binaryArray = str.split(" ");

//     // Convert each binary representation to decimal and then to ASCII characters
//     const translatedString = binaryArray.map(binary => String.fromCharCode(parseInt(binary, 2)));

//     // Join the characters to form the English sentence
//     return translatedString.join("");
// }

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// )) // Aren't bonfires fun!?

// console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))
// // I love FreeCodeCamp!


// alternative way

// function binaryAgent(str) {
//     return String.fromCharCode(
//       ...str.split(" ").map((char) => parseInt(char, 2))
//     );
// }

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// )) // Aren't bonfires fun!?

// console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))
// // I love FreeCodeCamp!


// alternative way

// function binaryAgent(str) {

//     //split, convert the binary, and join the result
//     return str.split(' ').map((bi) => String.fromCharCode(parseInt(bi, 2))).join(''); 
// }

// console.log(binaryAgent(
//     "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// ))







// Everything Be True

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// function truthCheck(collection, pre) {
//     return collection.every(person => person[pre]);
// }
  
// console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")) // false
// console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number")) // true
// console.log(truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users") ) // true








// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

// function addTogether(param1, param2) {
//   function isNumber(val) {
//     return typeof val === "number";
//   }

//   if (!isNumber(param1)) {
//     return undefined;
//   }

//   if (param2 === undefined) {
//     if (arguments.length < 2) {
//       return function (param3) {
//         if (param3 === undefined || !isNumber(param3)) {
//           return undefined;
//         }
//         return param1 + param3;
//       };
//     } else {
//       return undefined;
//     }
//   } else if (!isNumber(param2)) {
//     return undefined;
//   } else {
//     return param1 + param2;
//   }
// }

// console.log(addTogether(2, 3)); // Output: 5
// console.log(addTogether(23, 30)); // Output: 53
// console.log(addTogether("2", 3)); // Output: undefined
// console.log(addTogether(5, undefined)); // Output: undefined
// console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // Output: undefined
// console.log(addTogether(5)); // Output: a function
// console.log(addTogether(5)(7)); // Output: 12
// console.log(addTogether(2)([3])); // Output: undefined
// console.log(addTogether(2, "3")); // Output: undefined

// const sumTwoAnd = addTogether(2);
// console.log(sumTwoAnd) // return a function




// alternative way

// function addTogether() {
//     const [first, second] = arguments;
  
//     if (typeof (first) === "number") {
//       if (typeof (second) === "number") return first + second;
//       if (arguments.length === 1) return (second) => addTogether(first, second);
//     }
// }

// console.log(addTogether(2, 3)); // Output: 5
// console.log(addTogether(23, 30)); // Output: 53
// console.log(addTogether("2", 3)); // Output: undefined
// console.log(addTogether(5, undefined)); // Output: undefined
// console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // Output: undefined
// console.log(addTogether(5)); // Output: a function
// console.log(addTogether(5)(7)); // Output: 12
// console.log(addTogether(2)([3])); // Output: undefined
// console.log(addTogether(2, "3")); // Output: undefined

// const sumTwoAnd = addTogether(2);
// console.log(sumTwoAnd) // return a function






// Make a Person

// const Person = function(first, last) {
//     this.getFullName = function() {
//       return "";
//     };
//     return "";
// };




// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// function sumFibs(num) {
//     let prev = 0;
//     let current = 1;
//     let sum = 0;
  
//     for (let i = 1; current <= num; i++) {

//       if (current % 2 !== 0) {
//         sum += current;
//       }
  
//       const next = prev + current;
//       prev = current;
//       current = next;
//     }
  
//     return sum;
// }

// 1 + 1 + 2 + 4
// console.log(sumFibs(4));     // Output: 5
// console.log(sumFibs(1000));   // Output: 1785
// console.log(sumFibs(75025));  // Output: 135721





// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// function uniteUnique() {
//     const mergedArray = [].concat(...arguments);
    
//     return mergedArray.reduce((uniqueArray, current) => {
//       if (!uniqueArray.includes(current)) {
//         uniqueArray.push(current);
//       }
//       return uniqueArray;
//     }, []);
// }
  
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
// console.log(uniteUnique([1, 2, 3], [5, 2, 1])) // [1, 2, 3, 5]
// console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])) // [1, 3, 2, 5, 4, 6]
// console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])) // [1, 3, 2, 5, 4]




// alternative way

// function uniteUnique() {

//     // Use the spread operator and Set to remove duplicates
//     return [...new Set([].concat(...arguments))];
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
// console.log(uniteUnique([1, 2, 3], [5, 2, 1])) // [1, 2, 3, 5]
// console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])) // [1, 3, 2, 5, 4, 6]
// console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])) // [1, 3, 2, 5, 4]






// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// function fearNotLetter(str) {

//     for (let i = 0; i < str.length - 1; i++) {
    
//       // Check if the ASCII code of the next character is not one greater than the current character
//       if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
//         // If not, return the missing letter
//         return String.fromCharCode(str.charCodeAt(i) + 1);
//       }
//     }
    
//     // If no missing letter is found, return undefined
//     return undefined;
// }

// console.log(fearNotLetter("abce")); // Output: "d"
// console.log(fearNotLetter("abcdefghjklmno")) // i
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // undefined




// alternative way

// function fearNotLetter(str) {
//     let currCharCode = str.charCodeAt(0);
//     let missing = undefined;
  
//     str
//       .split("")
//       .forEach(letter => {
//         if (letter.charCodeAt(0) === currCharCode) {
//           currCharCode++;
//         } else {
//           missing = String.fromCharCode(currCharCode);
//         }
//       });
  
//     return missing;
// }
  
// console.log(fearNotLetter("abce")); // Output: "d"
// console.log(fearNotLetter("abcdefghjklmno")) // i
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // undefined







// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
  
// Note: You can return the array with its elements in any order.


// function diffArray(arr1, arr2) {
//     const newArr = [];
  
//     // Iterate through arr1
//     for (let i = 0; i < arr1.length; i++) {
//       const element = arr1[i];
  
//       // If element is not in arr2, add it to newArr
//       if (!arr2.includes(element)) {
//         newArr.push(element);
//       }
//     }
  
//     // Iterate through arr2
//     for (let i = 0; i < arr2.length; i++) {
//       const element = arr2[i];
  
//       // If element is not in arr1, add it to newArr
//       if (!arr1.includes(element)) {
//         newArr.push(element);
//       }
//     }
  
//     return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // Output: [4]
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])) // [1, "calf", 3, "piglet", 7, "filly"]
// console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))// []



// alternative
// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // Output: [4]
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])) // [1, "calf", 3, "piglet", 7, "filly"]
// console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))// []









// Seek and Destroy
// You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

// function destroyer(arr, ...args) {
//     // Use filter to create a new array that excludes elements in args
//     return arr.filter(item => !args.includes(item));
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Output: [1, 1]
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)) // [1]
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)) // [1, 5, 1]
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53)) // ["hamburger"]





// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.


// function whatIsInAName(collection, source) {
    
//   const sourceKeys = Object.keys(source);
//   return collection.filter(obj => sourceKeys.every(key => obj[key] === source[key]));
// }

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })) // [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) )
// // [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]




// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


// function spinalCase(str) {
//     return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
// }

// // console.log(spinalCase('This Is Spinal Tap'))
// console.log(spinalCase("thisIsSpinalTap"))
// console.log(spinalCase("The_Andy_Griffith_Show"))
// console.log(spinalCase("AllThe-small Things"))






// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// function translatePigLatin(str) {
    
//     let txt = str;
//     const matchedValue = str.match(/^[^aeiou]+/);

//     if(matchedValue) {

//       const replacedValue = str.replace(/^[^aeiou]+/, '');
//       txt = `${replacedValue}${matchedValue}ay`
      
//     } else {
//       txt += `way`
//     }

//     return txt;
// }
  

// console.log(translatePigLatin("consonant")); // Output: "onsonantcay"
// console.log(translatePigLatin("rhythm")); // Output: "rhythmay"
// console.log(translatePigLatin("paragraphs")) // aragraphspay







// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
    
    const matchedValue = before.match(/^[A-Z]/);
    const capitalizeValue = after.charAt(0).toUpperCase();
    const replaceValue = after.replace(/^[a-z]/, '')

    if(before === 'up') {
        after = 'down';
    }

    let txt = str;
    if(matchedValue) {
        
        txt = txt.replace(before, `${capitalizeValue}${replaceValue}`)

    } else {
        txt = txt.replace(before, after)
    }
   
    return txt;
}
  
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));




// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.



function pairElement(str) {
    const arr = str.split('')
    console.log(arr);
    // AT CG
    const A = ['A', 'T'];
    const T = ['T', 'A'];
    const C = ['C', 'G'];
    const G = ['G', 'C'];

    const modifiedArr = arr.map(char => {
        if(char === 'A'){
            return A;
        } else if(char === 'T'){
            return T;
        } else if(char === 'C'){
            return C;
        } else if(char === 'G') {
            return G;
        }
    })
    return modifiedArr;
}
  
console.log(pairElement("ATCGA"));
[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]





// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


// function rot13(str) {
//   let decodedStr = '';

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (/[A-Z]/.test(char)) {
//       // If the character is an uppercase letter
//       const charCode = char.charCodeAt(0);
//       let decodedCharCode;

//       if (charCode >= 65 && charCode <= 77) {
//         // Rotate within the range A-M (65-77)
//         decodedCharCode = charCode + 13;
//       } else {
//         // Rotate within the range N-Z (78-90)
//         decodedCharCode = charCode - 13;
//       }

//       decodedStr += String.fromCharCode(decodedCharCode);
//     } else {
//       // Non-alphabetic characters, such as spaces or punctuation, are kept as is
//       decodedStr += char;
//     }
//   }

//   return decodedStr;
// }

// console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
// console.log(rot13("SERR YBIR?")) // FREE LOVE?





// Array.prototype.myMap = function(callback) {
//   console.log(this)
//   const newArray = [];
//   // Only change code below this line
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   // Only change code above this line
//   return newArray;
// };

// console.log([1, 2, 3].myMap((item, index, arr) => arr))




// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// function factorialize(num) {
//     let result = 1;
//     for (let i = num; i > 0; i--) {
        
//         result = result * i
//     }

//     return result
// }

// console.log(factorialize(5)) // 120
// console.log(factorialize(10)) // 3628800
// console.log(factorialize(20)) // 2432902008176640000
// console.log(factorialize(0)) // 1







// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.
// function findLongestWordLength(str) {
//     let longestWord = '';

//     const wordsArr = str.split(' ');
//     for (const word of wordsArr) {
//         if(word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord.length;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))








// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // Create an array to store the largest numbers
  const largestNumbers = [];

  // Iterate through each sub-array
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0]; // Initialize the largest number with the first element

    // Iterate through the elements of the current sub-array
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j]; // Update the largest number if a larger number is found
      }
    }

    largestNumbers.push(largest); // Add the largest number to the result array
  }

  return largestNumbers;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
// [27, 5, 39, 1001]

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))
// [9, 35, 97, 1000000]

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
// [25, 48, 21, -3]



// function largestOfFour(arr) {
//   return arr.map(function(group) {
//     return group.reduce(function(prev, current) {
//       return current > prev ? current : prev;
//     });
//   });
// }






// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// function confirmEnding(str, target) {
//     const lastChar = str.slice(-target.length);
//     if(lastChar === target) {
//       return true;
//     } else {
//       return false;
//     }
// }
  
// console.log(confirmEnding("Bastian", "n")) // true
// console.log(confirmEnding("Open sesame", "same")) // true
// console.log(confirmEnding("Open sesame", "sage")) // false





//   Palindrome Checker
//   Return true if the given string is a palindrome. Otherwise, return false.
  
//   A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
  
//   Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
  
//   We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
  
//   We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

// function palindrome(str) {
  

//     const lowercaseStr = str.toLowerCase();
//     const matchesStr = lowercaseStr.match(/[a-zA-Z0-9]/g);

//     const reversedValue = matchesStr.reverse();
//     const isTrue = reversedValue.join('') === lowercaseStr.match(/[a-zA-Z0-9]/g).join('');

//     return isTrue;
// }

// console.log(palindrome("not a palindrome"));






// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// function repeatStringNumTimes(str, num) {
//   let result = '';
//   for (let i = 0; i < num; i++) {
    
//     result += str
//   }
//   return result;
// }

// console.log(repeatStringNumTimes("*", 3)) // ***
// console.log(repeatStringNumTimes("abc", 3)) //  abcabcabc





// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// function truncateString(str, num) {
//   const slicedStr = str.slice(0, num);

//   return str.length> num ? slicedStr + '...' : str
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)) // A-tisket a-tasket A green and yellow basket





// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// function findElement(arr, func) {
//   let num = undefined;
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(func(element)) {
//       num = element;
//       break;
//     }
//   }
//   return num;
// }

// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) // 8
// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)) // 2
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })) // undefined





// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(word => {
//     const firstChar = word[0].toUpperCase();
//     const remainingChar = word.slice(1);
//     return `${firstChar}${remainingChar}`;
//   }).join(' ')
// }

// console.log(titleCase("I'm a little tea pot")) // I'm A Little Tea Pot
// console.log(titleCase("sHoRt AnD sToUt")) // Short And Stout
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) // Here Is My Handle Here Is My Spout





// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//   const copiedArr2 = arr2.slice();
//   copiedArr2.splice(n, 0, ...arr1);

//   return copiedArr2;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5], 1)) // [4, 1, 2, 3, 5]
// console.log(frankenSplice([1, 2], ["a", "b"], 1)) // ["a", 1, 2, "b"]










// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//     const chunkedArray = [];
    
//     for (let i = 0; i < arr.length; i += size) {
//       const chunk = arr.slice(i, i + size);
//       chunkedArray.push(chunk);
//     }
  
//     return chunkedArray;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)) // [["a", "b"], ["c", "d"]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) // [[0, 1, 2], [3, 4, 5]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)) // [[0, 1, 2, 3], [4, 5]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)) // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]






// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// function mutation(arr) {
//     for (let i = 0; i < arr[1].length; i++) {
//         const element = arr[1][i];
//         if(!arr[0].toLowerCase().includes(element.toLowerCase())) {
//             return false;
//         }
//     }
    
//     return true;
// }
  
// console.log(mutation(["hello", "hey"])) // false
// console.log(mutation(["hello", "Hello"])) // true
// console.log(mutation(["Mary", "Army"])) // true






// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).







// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function printUpTo(num) {
    for (let i = 1; i <= num; i++) {
        console.log('*')        
    }
}

console.log(printUpTo(3))























