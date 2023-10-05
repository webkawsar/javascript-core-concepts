


// day 4 exercise
// https://docs.google.com/document/d/1N9BPMUh8veIIDV9qAm9VfSczFU81oS-g/edit?usp=sharing&ouid=112411852663687677913&rtpof=true&sd=true

// Exercise: 1

// 1.Suppose you are presenting yourself to a interview Board.Write down some information about yourself Create the following variables(5):

// name, which is a string set to your current name ex: samim, Adnan, Jhair
// email, which is a string set to your current email. ex: samimfaz@gmail.com
// age, which is a number set to your current age. ex: 30, 40, 25
// isDeveloper, which is a boolean set to developer status. ex: true ,false
// goingToBeDesigner, set value to absolute negative. ex: null, undefined

// Note: Follow Best practices during defining variable





// 2. Form a sentence and print on console by using above variable.<variableName> part will be replaced by variable value(6):

// Hey it's me "<name>". I am <age>.you can contact me by this <email>.I am a Developer and it's <isDeveloper>. I am going to be a Designer-<goingToBeDesigner>

// Note- Use Both string concatenation format and template string format



// 3.See what happens when you have multiple variables of the same name. Which one takes precedence?

// 4.What is the difference between null and undefined?

// 5.What is NaN in JavaScript? What is the typeof NaN?

// 6.You can declare a variable by typing let thing;. What is the value of thing?







// day 5 
// https://drive.google.com/drive/u/1/folders/1NE7_JqW3aZ5OZgrO873FZoKChTGDGwmP

// Exercise(Complex Data type):
// 1.What are the complex data type in JavaScript? - 2

// 2.When and why to use Array vs object (Mention 3 point) -3



// 3.Create an profile object that has your firstName, lastName, and occupation as keys.

// Access each value from your object and console using both dot notation and bracket notation.
// Add a key for hobby to your existing object. Remove the key and value for occupation.


// 4.when to use dot notation vs bracket notation to access data from object?

// 5.Write down the multiple ways to define an array and object -2



// 6.Nested data access from array and object -4

// const userObj = {
//    name: 'samim',
//    address: {
//       city: 'Dhaka',
//       university: {
//          name: 'Dhaka University'
//       }
//    }
// }

// const userArr = ['samim', ['Dhaka', ['Dhaka university']]]

// Access university name from the object and array









// day 6
// Exercise:

// 1.When and why function is needed? -2

// 2.write down and recap the difference between console and Return -2

// 3.write this function takes in two parameters and returns the difference of the two;
// difference(10,2); // 8
// difference(0,2); // -2


// 4. Write a function that takes a value as argument and return the type of value-2
// myFunction(1) //'number'
// myFunction(false) //'boolean'
// myFunction({}) // 'object'
// myFunction(null) // 'object'
// myFunction('string') //'string'
// myFunction(['array']) //'object'



// 5.Write Down this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is saturday, 2 is Sunday, 3 is Monday etc.). If the number is less than 1 or greater than 7, the function should return undefined; Hint: you can use array to track down day of the week:) - 4
// printDay(4); // "Tuesday"
// printDay(7); // "Friday"
// printDay(41); // undefined



// 6.Write down this function takes in one parameter (an array) and returns the last value in the array
// It should return undefined if the array is empty.
// N.B: count last element index dynamically :) -4
// lastElement([1,2,3,4]); // 4
// lastElement([1,2,3,10]); // 10
// lastElement([1,2,3,'hi']); // 'hi'
// lastElement([]); // undefined


// 7. write a function that return a object based on passed arguments 
// Returned object key must be x , y, z in order and value will be passed arguments order- 4 
// createObj(1, 2, 3) //{x: 1, y: 2, z:3}
// createObj('a','b', 'c') //{x: 'a', y: 'b', z:'c'}
// createObj('ab','bc', 'ca') //{x: 'ab', y: 'bc', z:'ca'}














// day 9
// # Exercise - 1 

// What will be the result and explain why?

// const x = 10;
// const y = "a"
// y === "b" || x >= 10




// # Exercise - 2

// What will be the result and explain why?

// const x = 3;
// const y = 8;

// !(x == "3" || x === y) && !(y != 8 && x <= y)





// # Exercise - 3

// Check the value ans show output whether it's truthy or falsy. What are the truthy and falsy value in Javascript

// "Hello World" //true

// "" //false

// null //false

// 0 //false

// -1 //true

// NaN //false




// # Exercise - 4

// What will be the result and explain why?
// Explain short circuit -4

// const str = "haha!"
// const msg = ""
// const isFunny = "false"

// !(( str || msg ) || isFunny)



// # Exercise-5: when to use == vs === ? //1



// # Exercise-6: 

// operands++ vs ++operands

// const a = 10
// a++
// ++a
// what are the differences between a++ and ++a




// # Exercise-7: 

// What will be the result? and explain why?

// 10 / 2 * 5 
// what to do if I want to get the result of 1 after calculation?


// # Exercise-8: 
// Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console //2

// 2 == "2"
// 2 === 2
// 10 % 3
// 10 % 3 === 1
// true && false
// false || true
// true || false









// day 10
// https://docs.google.com/document/d/1OK_QPwJSjmlB0r6ceVZ6qSKe50uy2LMn/edit

// Total Number-20

// Exercise-1: 

// Answer the following questions about this code block:

// const isLearning = true;
// if(isLearning){
//     console.log("Keep Learning");
// } else {
//     console.log("I hope you are learning....");
// }

// What should the above code console.log?





// Exercise-2:

// Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?


// Exercise-3:

// Use both if and switch statement (6)
// ====================================================
// age: less then 10  
// output: stay home under your mom supervision

// age: more and equal then 10 and less then 15 
//  output: Try to gain knowledge from outside of home

// age: more then and equal to 15 and less than 18
// output: prepare to cast vote

// age: more or equal then 18 
//  output: cast you vote

// age: unknown
//   output: You are out of range



// Exercise-4:

// let var1;
// const var2 = "";
// const var3 = 1;
// const secretMessage = "secret!";

// if(var1){
//     console.log("first");
// } else if(var1 || var2){
//     console.log("second");
// } else if(var1 || var3){
//     console.log("third");
// } else {
//     console.log("fourth");
// }

// What should the above code console.log? Why? (2)
// What is the value of var1 when it is initialized? (1)
// Is the value of var1 a "truthy" value? Why? (1)
// Is the value of var2 a "truthy" value? Why? (1)
// Is the value of var3 a "truthy" value? Why?(1)




// Exercise-5:
// Choose the correct conditional (ternary) operator to console  "Too young" if age is less than 18, otherwise alert "Old enough" (2)


// Exercise-6:When to Use if else vs ternary vs switch? (2)






// day 12

// Total Number-20
// Try to use function as required

// # Exercise-1(what will be the output and explain)-2

// let num = 1;

// while(num <= 10) {
// console.log(num);
// num += 2;
// }




// # Exercise-2(what will be the output and explain)-2

// let num = 1

// while(num <= 20) {
// if(num % 4 === 0){
// console.log(num);
// }
// num++;
// }




// # Exercise-3(what will be the output and why?)-2

// let num = 100;
// while(num < 150) {
// console.log(num + 1);
// num--;
// }




// # Exercise-4(what will be the output? it May require if condition inside loop)-4

// Print out all even numbers between 1 and 100. Write two solutions: one with a while loop and one with a for loop.




// # Exercise-5(Run loop and add $ in each repetition)-4

// function repeat(num){
// // code
// }

// repeat(3)

// <!--
// $
// $$
// $$$ -->

// repeat(5)

// <!--
// $
// $$
// $$$
// $$$$
// $$$$$ -->




// # Exercise-6(what will be the output and Let's explain) -3

// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// function fizzBuzz(num){
// //code
// }

// fizzBuzz(100)

// <!--
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// ...
// ... -->





// Exercise-7:Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b - 3
// function myFunction(a, b) {
// return
// }
// myFunction('m', 'how many times does the character occur in this sentence?') //2
// myFunction('h', 'how many times does the character occur in this sentence?') //4
// myFunction('?', 'how many times does the character occur in this sentence?') //1
// myFunction('z', 'how many times does the character occur in this sentence?') //0
















// day 14 exercise questions
//total Number-20
//Exercise-1: (3)
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
// function myFunction(a, b) {
//     return
// }
  
// myFunction('cheese', 'cake') //'cheesecake'
// myFunction('lips', 's') //'slips'
// myFunction('Java', 'script') //'Javascript'
// myFunction(' think, therefore I am', 'I') //'I think, therefore I am'




//Exercise-2:(3)
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
// function myFunction(a, b) {}
// myFunction('1234567', '.') //'1.234.567'
// myFunction('abcde', '$') //'ab$cde'
// myFunction('zxyzxyzxyzxyzxyz', 'w') //'zwxyzwxyzwxyzwxyzwxyz'


  
  
  //Exercise-3:(3)
//   Write a function that takes a string as argument
//   As it is, the string has no meaning
//   Increment each letter to the next letter in the alphabet
//   Return the correct word
//   function myFunction(str) {
//     return
//   }
//   myFunction('bnchmf') //'coding'
//   myFunction('bgddrd') //'cheese'
//   myFunction('sdrshmf') //'testing'
  



  //Exercise-4:(3)
//   Write a function that takes an array (a) and a number (n) as arguments
//   It should return the last n elements of a
//   make sure you don't mutate original array
//   function myFunction(a, n) {
//     return
//   }
//   myFunction([1, 2, 3, 4, 5], 2) //[ 4, 5 ]
//   myFunction([1, 2, 3], 6) //[ 1, 2, 3 ]
//   myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3) //[ 6, 7, 8 ]
  




  //Exercise-5:(3)
//   Write a function that takes two numbers (a and b) as arguments
//   If a is smaller than b, divide a by b
//   Otherwise, multiply both numbers
//   Return the resulting value
//   function myFunction(a, b) {
//     return
//   }
  
//   myFunction(10, 100) // 0.1
//   myFunction(90, 45) //4050
//   myFunction(8, 20) //0.4
//   myFunction(2, 0.5) //1
  
  


//   Exercise-6:(5)
//   For each of the exercises below, assume you are starting with the following people array.
  
//   let people = ["samim", "Anis", "Adnan", "Karim"];
//   1.Using a loop, iterate through this array and console.log all of the people one by one.
//   2.Write the command to remove "samim" from the array.
//   3.Write the command to remove "Karim" from the array.
//   4.Write the command to add "Ifat" to the front of the array.
//   5.Write the command to add your name to the end of the array.
//   6.Using a loop, iterate through this array and after console.logging "Anis", exit from the loop.
//   7.Write the command to make a copy of the array using slice. The copy should NOT include "Anis" or "Ifat".
//   8.Write the command that gives the indexOf where "Anis" is located.
//   9.Write the command that gives the indexOf where "Foo" is located (this should return -1).
//   10.Redefine the people variable with the value you started with. Using the splice command, remove "Adnan" from the array and add "Elizabeth" and "Bob". Your new array should look like this when you are done ["samim", "Anis", "Elizabeth", "Bob", "Karim"].
//   11.Create a new variable called withMiraz and set it equal to the people array concatenated with the string of "Miraz".









// day 17 exercise questions

// Total Number-20

// 1. What is the value of the keyword this in the following example: (3)
// const data = this;
// console.log(data);

// What does this function output? Why?
// function logThis(){
//     return this;
// }

// logThis(); // ?



// 2. What does this function output? Why? (2)
// const instructor = {
//     firstName: 'Adnan',
//     sayHi(){
//         console.log("Hello! " + this.firstName);
//     }
// }

// instructor.sayHi() // ?





// 3. What does this function output? Why? (3)
// const instructor = {
//     firstName: 'Adnan',
//     info: {
//         catOwner: true,
//         boatOwner: false
//     },
//     displayInfo: function(){
//         console.log("Cat owner? "+ '-' + this.catOwner);
//     }
// }

// instructor.displayInfo() // ?
// Bind this to get correct output ex: "Cat owner?-true "






// 4.What does this function output? Why? (3)
// const instructor = {
//     firstName: 'Adnan',
//     info: {
//         catOwner: true,
//         boatOwner: false,
//         displayLocation: function(){
//             return  `Residing ${this.data.location}`;
//         },
//         data: {
//             location: "Dhaka"
//         }
//     },
// }

// instructor.info.displayLocation() // ?




// 5.What does this function output? Why? (3)
// const instructor = {
//     firstName: 'Adnan',
//     info: {
//         catOwner: true,
//         boatOwner: true,
//         displayLocation: function(){
//             return  `Residing ${this.data.location}`;
//         },
//         data: {
//             location: "Dahaka",
//             logLocation: this.displayLocation
//         }
//     },
// }

// instructor.info.data.logLocation() // Why might we be getting an error here?



// 6.What are the ways to deep or shallow copy for array and object? -2

// 7. What are the mutable and immutable data in Javascript? -2

// 8. Explain pass by value vs pass by reference with example -2








// day 19 exercise 
// 1.Exercise-1 (3) 

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

// function myFunction(a, b) {
//   return
// }

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) //false
// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) //true
// myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) //false




// 2.Exercise-2 (3)

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// function myFunction(a, b) {
//   return
// }

// myFunction(new Date('2020-06-11'), new Date('2020-06-01')) //10
// myFunction(new Date('2000-01-01'), new Date('2020-06-01')) //7457




// 3.Exercise-3 (3)

// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise

// function myFunction(a, b) {
//   return
// }

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) //true
// myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')) //false
// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) //false





// 4.Exercise-4(6) 

// This is a more difficult challenge, you have to research little on internet 
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

// function myFunction(a, b) {
//   // code
// }
// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')) //{ hrs: 0, min: 45, sec: 10 }
// myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')) //{ hrs: 1, min: 50, sec: 23 }
// myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')) //{ hrs: 3, min: 4, sec: 12





// 5.Exercise-5 (5)

// Generate a Random Number between two values
// Number must be a full Number (not fraction)
// endNum must be exclusive

// function generateRandomNum(startNum, endNum){
//   // code
// }

// generateRandomNum(5, 10) 
















// day 20 exercise
// Exercise -1(3)
// ======================================

// 1.Define a function that outputs max of two values, Don't use Built in Method

// function max(a, b){
//   ToDo
// }
// max(20, 25); //25
// max(100, 25); //100





// Exercise-2(3)
// ========================================

// Must result a array including all elements in the defined range

// function arrayFromRange(num1, num2) {
// //TODO

// }

// const rangeOne = arrayFromRange(1, 10);
// console.log(rangeOne) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const rangeTwo = arrayFromRange(10, 5);
// console.log(rangeTwo) //[ 5, 6, 7, 8, 9, 10]






// Exercise-3 (3)
// ========================================

// Sum up all the numbers in between passed arguments
// function showNumber(num1, num2){
// //TODO
// }
// showNumber(2, 4) //9 (2 + 3 + 4)
// showNumber(5, 2) //14 (2 + 3 + 4 + 5)






// Exercise-4 (3)
// ==================================

// Get the maximum number from the array

// const numbers = [1, 2, 3, 4]; 
// function getMax(array) { 
//   //TODO
// }

// console.log(getMax(numbers)) // 4







// Exercise-5 (3)
// ========================================

// Write a function calculateAverage and receives arr as arguments, 
// you have to calculate the average and return the grade
// Ex:
// <60-F
// 60-69-D
// 70-79-c
// 80-89-B
// >90-A

// function calculateAverage(arr){
//   //TODO
// }

// calculateAverage([60, 70, 90, 50, 55])	// D
// calculateAverage([83, 70, 90, 50, 55])	// C







// Exercise-6 (2)
// ========================================

// Suppose you are given a function which receive a object , you have to find the key with value type of string and concat, return the information in specified format
// Ex: key-value


// const movie = { 
//  title: 'a',
//  releaseYear: 2018,
//  rating: 4.5,
//  director: 'b' 
// };
// function showProperties(movieData){
//   //TODO
// }
// showProperties(movie); //title-a director-b






// Exercise-7 (3)
// ========================================

// count the truthy value and return 

// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array)); //2




// Exercise-8 (Bonus Exercise) -Number won't be counted
// ==========================================================

// count the occurrence of numbers 
// result will be number of occurrence   

// function countOccurrences(array, searchElement) {
//   //TODO
// }


// const count = countOccurrences([1, 2, 3, 1], 1); 
// console.log(count); //2










// day 21 exercise
/* 
Exercise: 1 (4)
*/

// Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

// function placeInMiddle(arr, vals){
    
// }

// placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
// placeInMiddle([1],[3,4,5]) // [1,3,4,5]
// placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
// placeInMiddle([],[2,3,4,5]) // [2,3,4,5]








// Exercise: 2 (3)

// Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together

// function joinArrays(){
//     // code
// }

// joinArrays([1],[2],[3]) // [1,2,3]
// joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
// joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
// joinArrays([1],[3],[0],[7]) // [1,3,0,7]








// Exercise: 3 (4)

// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

// function sumEvenArgs(){
    
// }

// sumEvenArgs(1,2,3,4) // 6
// sumEvenArgs(1,2,6) // 8
// sumEvenArgs(1,2) // 2







/* 
Exercise: 4 (4)
you have given a object with some nested properties and method , you have to access the property and method in single statement(using destructuring)

Access city, getAddress from the object and console the output - 2
Get the correct output form by getAddress function calling .Ex: Dhaka-Bangladesh -2
*/
// const obj = {
//   name: 'samim',
//   email: 'samimfazlu091@gmail.com',
//   address: {
//     location: {
//       country: {
//         name: 'Bangladesh',
//         city: 'Dhaka',
//       },
//     },
//     getAddress() {
//       return this.country.city + '-' + this.country.name
//     },
//   },
// }


// const {address} = obj;
// console.log(address)



/*
Exercise: 5 (3)
*/

// You have given a function sum with arr of number as arguments, you have to Sum up those Number and return the result
// you can check validation before summing up the number 

// function sum(...values) {}
// console.log(sum([1, 2, 3, 4]));




// Exercise: 6 (2)
// what are the difference between rest(...) and spread(...) operator.Explain with Example.When to use what 





// day 23 qns

/*
Exercise-1 
*/

// Use Array helper methods as possible as you can
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
// function valTimesIndex(arr) {
//     //your code goes here
// }

// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1,-2,-3]) // [0,-2,-6]







/*
Exercise-2 
*/

// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

// function doubleOddNumbers(arr) {
//     //code goes here... 
// }
// doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
// doubleOddNumbers([4,4,4,4,4]) // []






/*
Exercise-3
*/

// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

// function showFirstAndLast(arr) {
//     //write code here
// }

// showFirstAndLast(['obaydullah','Karim', 'miraz', 'kawsar', 'ruhi', 'udemy']) 
// // ["oh", "km", "mz", "kr", 'ri', 'uy']
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']






/*
Exercise-4
*/

// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

// function addKeyAndValue(arr, key, value) {
//     //your code goes here
// }


// addKeyAndValue([{name: 'Samim'}, {name: 'Miraz'}, {name: 'Matt'}, {name: 'Anam'}], 'title', 'instructor') 

// // [{name: 'Samim', title:'instructor'}, 
// // {name: 'Miraz', title:'instructor'}, {name: 'Matt', title:'instructor'}, 
// // {name: 'Anam', title:'instructor'}]








/*
Exercise-5:(2)
*/

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count. You may use  reduce to solve the problem

// function vowelCount(str) {
//     //your code goes here
// }

// vowelCount('samim') // {a:1,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};







/*
Exercise-6
*/

Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

function hasOnlyOddNumbers(arr) {
  //code goes here...
}

hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false






// Exercise-7

Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

function hasNoDuplicates(arr) {
    //code goes here
}

hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true





/*
Exercise-8
*/

Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

function findInObj(arr, key, searchValue) {
    //your code goes here
}

findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Samim', last:"Hasan", isCatOwner: false}], 'isCatOwner', true) 
// {first: 'Tim', last:"Garcia", isCatOwner: true}






/*
Exercise-9
*/

Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

function hasCertainValue(arr, key, searchValue) {
  // code 
}

var arr = [
  {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
  {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
  {title: "Instructor", first: 'Matt', last:"Lane"}, 
  {title: "Instructor", first: 'Anam', last:"Ahmed", isCatOwner: true}
]

hasCertainValue(arr,'title','Instructor') // true
hasCertainValue(arr,'first','Elie') // false






/*
Exercise-10
*/

This one will be little bit challenging, you have to use first class function criteria
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

function partition(arr, callback) {
  // code
}


function isEven(val){
  return val % 2 === 0;
}
var arr = [1,2,3,4,5,6,7,8];
partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];


function isLongerThanThreeCharacters(val){
  return val.length > 3;
}
var names = ['Elie', 'Colt', 'Tim', 'Matt'];
partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]







/*
Exercise-11 Number won't be counted
*/

Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

function extractValue(arr, key) {
  // code
}

var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Max'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Max']







// day 27 qns
// Exercise-1:

// You have been given a html document.Answer the below questions with necessary code

// !DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
// </head>
// <body>
//     <div class="header">
//     </div>
//     <section id="container">
//         <ul>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//             <li class="five">Five</li>

//         </ul>
//         <ol>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ol>
//     </section>
//     <div class="footer">
//     </div>
// </body>
// </html>

// Write the code necessary to do the following: (12) (1 per each question)

// a.Select the section with an id of container without using querySelector.
// b.Select the section with an id of container using querySelector.
// c.Select all of the list items with a class of "second".
// d.Select a list item with a class of third, but only the list item inside of the ol tag.
// e.Give the section with an id of container the text "Hello!".
// f.Add the class main to the div with a class of footer.
// g.Remove the class main on the div with a class of footer.
// h.Create a new li element.
// i.Give the li the text "four".
// j.insert this li before the li with class of five
// k.Loop over all of the lis inside the ol tag and give them a background color of "green".
// l.Remove the div with a class of footer.








// Exercise-2

// Try to create following structure by using Dom properties and method) insert into body of your html document

// <div class="container" id="container">
//   <h1 class="h1">Product List</h1>
//   <ul class="product-collection  mb-3">
//     <li class="product-collection-item" id="sample">Shoes</li>
//   </ul>
// </div> 





// Exercise-3
Try to Examine the common event like mouse Events and Keyboard events found in MDN DOCS
link: https://developer.mozilla.org/en-US/docs/Web/Events


// Exercise-4
What are the difference between event bubbling and event capturing


// Exercise-5
Write down the benefits of using event delegation? Explain with a practical Example (3)


















// 24 no problem solving class

// “FizzBuzz”
// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
      } else if (i % 3 === 0) {
          console.log("Fizz");
      } else if (i % 5 === 0) {
          console.log("Buzz");
      } else {
          console.log(i);
      }
  }
  
}

fizzBuzz(15);


// 18 minute theke start
// Adding sum from an array
// you have been provide an array of number
// you have to sum the numbers

function sum(arr) {

  let sum = 0;
  for (let num of arr) {
      sum += num  
  }

  return sum;
}

console.log(sum([10, 15, 5, 30]))


// find out max or min num
function min(arr) {
  let minNum = arr[0];
  for (const num of arr) {
      minNum = num < minNum ? num : minNum
  }

  return minNum;
}

console.log(min([10, 1, 3, 30, 5]))



// string reversal
// given a string, return a new string with the reversed order of character
// examples
// reverse('apple') === 'elppa'
// reverse('hello') === 'olleh'

function reverse(str){
  let output = '';
  // for (let i = (str.length - 1); i >= 0; i--) {
  //     output += str[i]
  // }
  // return output

  for (const char of str) {
      output = char + output;
  }
  return output;
}

console.log(reverse('apple'))
console.log(reverse('hello'))


// alternative way
// function reverse(str) {
//     // Split the string into an array of characters, reverse it, and join it back into a string
//     return str.split('').reverse().join('');
// }

// console.log(reverse('apple'))
// console.log(reverse('hello'))


// alternative way
// function reverse(str) {
//     if (str === '') {
//         return '';
//     } else {
//         return reverse(str.substr(1)) + str[0];
//     }
// }

// console.log(reverse('apple'))
// console.log(reverse('hello'))



// alternative way
// function reverse(str) {
//     return str.split('').reduce((reversed, char) => char + reversed, '');
//   }

// console.log(reverse('apple'))
// console.log(reverse('hello'))



// integer reversal
// given an integer, return an integer that is the reverse ordering of numbers
// examples
// reverseInt(15) === 51
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

// function reverseInt(num) {
//     let reveredNum = num.toString().split('').reverse().join('');
//     if(reveredNum.endsWith('-')) {
//         reveredNum = '-' + reveredNum.slice(0, reveredNum.length-1)
//     }

//     return parseInt(reveredNum);
// }

// console.log(reverseInt(-90))
// console.log(reverseInt(-15))



// alternative way
// function reverseInt(num) {
//     console.log(Math.sign(num))
//     const reversed = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
//     return reversed;
//   }

// Example usage:
//   console.log(reverseInt(15));   // Output: 51
//   console.log(reverseInt(500));  // Output: 5
//   console.log(reverseInt(-15));  // Output: -51
//   console.log(reverseInt(-90));  // Output: -9



// alternative way
function reverseInt(num) {
  const reversed = parseInt(num.toString().split('').reverse().join(''));
  return num < 0 ? -reversed : reversed;
}

// Example usage:
console.log(reverseInt(15));   // Output: 51
console.log(reverseInt(500));  // Output: 5
console.log(reverseInt(-15));  // Output: -51
console.log(reverseInt(-90));  // Output: -9



















