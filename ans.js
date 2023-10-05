

// Exercise 1.............
// Variables declaration and set value
// const name = "John Doe";
// const email = "john.doe@gmail.com";
// const age = 27;
// const isDeveloper = false;
// const goingToBeDesigner = null;





// Exercise 2.............
// printing by template string
// console.log(`Hey it's me "${name}". I am ${age}.you can contact me by this ${email}.I am a Developer and it's ${isDeveloper}. I am going to be a Designer-${goingToBeDesigner}
// `);


// printing by string concatenation
// console.log(
//   "Hey it's me " +
//     name +
//     " I am " +
//     age +
//     ".you can contact me by this " +
//     email +
//     ".I am a Developer and it's " +
//     isDeveloper +
//     ". I am going to be a Designer " +
//     goingToBeDesigner
// );



// Exercise 3.............

// multiple variables of the same name
/*
  let var1 = 20;
  let var1 = 30;
  console.log(var1);
  *** It shows an error: Identifier 'var1' has already been declared

  var var1 = 20;
  var var1 = 30;
  console.log(var1);
  *** If i use var instead of const or let, then it shows the value of last one.
*/



// Exercise 4.............
// Differences between undefined and null
/*
  undefined: If a programer do not initialize a variable, then its value is    undefined and its type is 'undefined' too.
  null: null is explicitly nothing. It is initialize by programmer. Its value is null but type is object. 
*/



// Exercise 5.............

// NaN in JavaScript and typeof NaN
// In JavaScript, NaN is short for "Not-a-Number".
// In JavaScript, NaN is a number that is not a legal number. The Global NaN property is the same as the Number.



// Exercise 6.............

// let thing;
// console.log(thing);
// we did not set any value thats why javascript will set the value as undefined.











// day 5 answer
// Exercise 1....What are the complex data type in JavaScript? (2)
/*
  1. Array
  2. Function
  3. Object
*/



// Exercise 2....When and why to use Array vs object? (3) (Mention any 3)
/*
  1. If we need a collection of data with specific order, then array will be better than object. 

  2. If we need a name/key for entity, then we must to use object and if we have a collection of data with same type and no need to a name/key for data then array will be better.

  3. Both dot and bracket notation allow us to access, add, change, and remove items from an object, while zero-based indexing and a variety of built-in methods let us access and alter items in an array.

  4. If there is multidimensional data need to represent like table 
        -> it is very difficult to use array, array inside array.
        -> But very easy to represent or describe data as an Object

*/




// Exercise 3....Create an profile object that has your firstName, lastName, and occupation as keys. (3)
// const profile10 = {
//   firstName: "Hasan",
//   lastName: "Imam",
//   occupation: "web developer",
// };
  

// Access each value from your object and console using both dot notation and bracket notation.
// console.log(profile10.firstName);
// console.log(profile10["firstName"]);


// Add a key for hobby to your existing object. Remove the key and value for occupation.
// profile10.hobby = "Music";
// console.log(profile10);

// delete profile10.occupation;
// console.log(profile10);


  
  
  // Exercise 4....when to use dot notation vs bracket notation to access data from object? (2)
  /*
     Dot notation is the most common way to access elements in JavaScript. 
     However, there are certain situations where bracket notation is more appropriate.
     When we want to use a variable to access a property, or if a property has special characters in its name, we should use bracket notation.
     Suppose we have a situation that, we want to access a property but don’t know the name of the property ahead of time. 
     For example, if we wanted to get all the keys in an object, and access their values, we could use bracket notation.
  */
  


  // Exercise 5....Write down the multiple ways to define an array and object. (2)
// const array1 = [];
// const array2 = new Array;
// const array3 = new Array();
// const obj1 = {};
// const obj2 = new Object;
// const obj3 = new Object();


  
  
// Exercise 6....Nested data access from array and object (4)

// Access university name from the object and array
// const userObj = {
//   name: "samim",
//   address: {
//     city: "Dhaka",
//     university: {
//       name: "Dhaka University",
//     },
//   },
// };

// access from object
// console.log(userObj.address.university.name);
// console.log(userObj["address"]["university"]["name"]);

// const userArr = ["samim", ["Dhaka", ["Dhaka university"]]];
// access from array
// console.log(userArr[1][1][0]);











  // day 6 ans
  // Exercise-1...When and why function is needed? (2)
/*
  When we need to avoid code repetition, we need to create a function. 
  We can call a function in any place of our script file. 
  Using parameter and argument, we can use a function for different persons/things. 
  It can help us to solve a complex problem in part by part. 
  Also it helps us to write clean and more comprehensible code.
*/



// Exercise-2...write down and recap the difference between console and Return  (2)
/*

If we console a result in a function then we can't manipulate this result outside the function. On the other hand the return keyword return a result and we can manipulate and reuse it outside the function. 

	point-1: When we need to get value out side of the function those time we have to use "return" keyword
	point-2: When we need to show the value inside the function those time we can use "console.log".

	Example of console.log: 
		function userName(name){
			console.log(name) // kamal
		}
		userName('kamal')

	Example of return keyword: 
	  function userName(name){
			return name
		}
		userName('Jamal') // Jamal
*/









// Exercise-3...write this function takes in two parameters and returns the difference of the two;  (2)
// function getDifference(num1, num2) {
//   return num1 - num2;
// }
// console.log(getDifference(10, 2));
// console.log(getDifference(0, 2));



// Exercise-4...Write a function that takes a value as argument and return the type of value  (2)
// function getTypeofValue(value) {
//   return typeof value;
// }
// console.log(getTypeofValue(1));
// console.log(getTypeofValue(false));
// console.log(getTypeofValue({}));
// console.log(getTypeofValue(null));
// console.log(getTypeofValue("string"));
// console.log(getTypeofValue(["array"]));




// Exercise-5...Write Down this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is saturday, 2 is Sunday, 3 is Monday etc.). If the number is less than 1 or greater than 7, the function should return undefined; Hint: you can use array to track down day of the week:)  (4)

// function showDayOfWeek(day) {
//   const arrDay = [
//     "Saturday",
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//   ];
//   return arrDay[day - 1];
// }
// console.log(showDayOfWeek(4));
// console.log(showDayOfWeek(7));
// console.log(showDayOfWeek(9));
// console.log(showDayOfWeek(0));




// Exercise-6...Write down this function takes in one parameter (an array) and returns the last value in the array
// It should return undefined if the array is empty.  (4)

// function showLastElement(arr) {
//   return arr[arr.length - 1];
// }
// console.log(showLastElement([1, 2, 4, 5, 6]));
// console.log(showLastElement([1, 2, 4, 5, "hello"]));
// console.log(showLastElement([]));




// Exercise-7...write a function that return a object based on passed arguments Returned object key must be x , y, z in order and value will be passed arguments order.  (4)

// Either of the below functions is correct
// function procedure1(x, y, z) {
//   return { x, y, z };
// }

// function procedure2(a, b, c) {
//   return { x: a, y: b, z: c };
// }
// console.log(procedure1(1, 2, 3));
// console.log(procedure2("a", "b", "c"));







// day 9  ans

/**
 * Exercise - 1 (What will be the result and explain why?) (3)
 
  const x = 10;
  const y = "a";
  y === "b" || x >= 10
 */
//  Answer:
/**
 * The result will be "True". Because here we used "OR" operator , it means if there is one condition becomes true it will result the true value. Here  the fist condition is false so the execution went to the next condition which is true, So the overall output came true.
 */
// ------------------------------------------------------------------------------------------------------






/**
 * Exercise - 2 (What will be the result and explain why?) (3)
 
  const x = 3;
  const y = 8;
  !(x == "3" || x === y) && !(y != 8 && x <= y)
 */
//  Answer:
/**
 * (x2 == "3" || x2 === y2) this part of the condition outputs true as we used "OR" operator and one of the condition is true but we also used "NOT" operator at the beginning so the output will swap to opposite. That means "False".
 *
 * (y2 != 8 && x2 <= y2)) this part of the condition have two conditions which output "False" and "True" and they are bind with "AND" operator. So the output will be false but this time also we used "NOT" operator at the beginning, so the answer will swap opposite to "True".
 *
 * So we have two different value bind with "AND" operator. So the final output will be False
 */

// ------------------------------------------------------------------------------------------------------





/**
 * Exercise - 3(Check the value ans show output whether it's truthy or falsy ).
 * What are the truthy and falsy value in Javascript (3)
  
  "Hello World"
  ""
  null
  0
  -1
  NaN
 */
//  Answer:
/**
 * "Hello World" -> Truthy Value
 * ""            -> Falsy Value
 * null          -> Falsy Value
 * 0             -> Falsy Value
 * -1            -> Truthy Value
 * NaN           -> Falsy Value
 * In Javascript , Truthy value is a value that outputs true when encountered in a Boolean context. There are a number of Falsy values such as {false, "", null, undefined, 0, NaN}, without these values all other values are Truthy Value
 */

// ------------------------------------------------------------------------------------------------------





/**
 * Exercise - 4 (What will be the result and explain why?) Explain short circuit (4)
  
  const str = "haha!";
  const msg = "";
  const isFunny = "false";
  !(str || msg || isFunny);
 */
//  Answer:
/**
 * ( str || msg ) this part will result in "True". And the whole condition will reult in True as we are using "OR" operator. But also we are using "NOT" operator at the beginning . As a result the whole answer will swap opposite to "False".
 * Short circuit: short circuits define that points are identified as false or stop the program and true the result .
In JavaScript short-circuiting, an expression is evaluated from left to right until it is confirmed that the result of the remaining conditions is not going to affect the already evaluated result.
 */
// ------------------------------------------------------------------------------------------------------





/**
 * Exercise-5: when to use == vs === ? (1)
 */
//  Answer:
/**
 * The (==) equality operator checks whether two operands are equal or not, it doesn't check the data type.
 * The (===) strict equality operator checks whether the two operand are equal or not also there data types
 */
// ------------------------------------------------------------------------------------------------------




/**
 * Exercise-6: what are the differences between a++ and ++a (2)
  
  let a = 10;
  a++;
  ++a;
 */
// Answer:
/**
 * With a++, we get the value of a and a is incremented afterwards.
 * With ++a, a is incremented fist and that is the value we get
 */
// ------------------------------------------------------------------------------------------------------




/**
 * Exercise-7: What will be the result? and explain why? (2)
  
  10 / 2 * 5 
  what to do if I want to get the result of 1 after calculation?
 */
// Answer:
/**
 * The result is 25 ; here is the first complete deviation and then multiplication because the associativity is Left to right.
 *
 * (10 / ( 2 * 5 )) will be equal to 1 , because parentheses () precedence is greater than / deviation. here is the first priority is parentheses().
 */
// ------------------------------------------------------------------------------------------------------



/**
 * Exercise-8: Write down what the following statements will return. 
 * Try to figure this out before putting the commands in the chrome console (2)
  
  2 == "2"
  2 === 2
  10 % 3
  10 % 3 === 1
  true && false
  false || true
  true || false
 */
// Answer:
/**
 * 2 == "2" // true
 * 2 === 2 // true
 * 10 % 3 // 1
 * 10 % 3 === 1 // true
 * true && false // false
 * false || true // true
 * true || false // true
 */
// ------------------------------------------------------------------------------------------------------







// day 10 ans
// ========= Exercise - 1 Answer ========= (2)

const isLearning = true;
if (isLearning) {
  console.log("Keep Learning");
} else {
  console.log("I hope you are learning....");
}

/**
 * This will console.log - "Keep Learning"
 */




// ========== Exercise - 2 Answer ============ (2)

/**
 * We do not need to specify (isLearning === true) because everything in javascript is true.
 * Which is called "Truthy Value". There are some specific falsy values in javascript,
 * which only returns false. This is why we do not need to specify (isLearning === true),
 * because javascript works on its own. And it's a default behaviour of javascript.
 */




// ========== Exercise - 3 Answer ============ (6)

// == if else statement ==
function ifAge(age) {
  if (age < 10) {
    console.log("Stay home under your mom supervision");
  } else if (age >= 10 && age < 15) {
    console.log("Try to gain knowledge from outside of home");
  } else if (age >= 15 && age < 18) {
    console.log("Prepare to cast vote");
  } else {
    console.log("You are out of range");
  }
}
ifAge(15);

// == Switch Case statement ==
function switchAge(age) {
  switch (true) {
    case age < 10:
      console.log("Stay home under your mom supervision");
      break;
    case age >= 10 && age < 15:
      console.log("Try to gain knowledge from outside of home");
      break;
    case age >= 15 && age < 18:
      console.log("Prepare to cast vote");
      break;
    default:
      console.log("You are out of range");
  }
}
switchAge(17);




// ========== Exercise - 4 Answer  ============ (2+1+1+1+1=6)

// let var1;
// const var2 = "";
// const var3 = 1;
// const secretMessage = "secret!";
// console.log(var1);

// if (var1) {
//   console.log("first");
// } else if (var1 || var2) {
//   console.log("second");
// } else if (var1 || var3) {
//   console.log("third");
// } else {
//   console.log("fourth");
// }

/**
 * (var1) is undefined false -> so it will check next condition
 * (var1 || var2) check undefined OR empty string, that results false -> so it will check next condition
 * (var1 || var3) check with undefined with value 1, results will be true so output will be 'third'.
 */

/**
 * the value of var1 is undefined. During the initialization it saves a value called undefined
 * and in the execution context we get undefined as there is no value assigned to it.
 */

/**
 * the value of var1 is a "falsy" value. Because during the initialization it saves a reference,
 * it is called undefined, and "undefined" is a falsy value in javaScript
 */

/**
 * the value of var2 is a "falsy" value. Because in Javascript Empty string is "falsy".
 */

/**
 * the value of var3 is a "truthy" value. Because there is a value assigned to it which is a number
 * and A number value is considered as "truthy" value only number 0
 */




// ========== Exercise - 5 Answer  ============ (2)
// const ageHolder = 19;
// console.log(ageHolder < 18 ? "Too young" : " Old enough");



// ========== Exercise - 6 Answer ============ (2)

/**
 * The "if - else" statement contains a single expression or multiple expressions for multiple choices. In this, an expression is evaluated based on the range of values or conditions. It checks both equality and logical expressions.
 */
/**
 * The "switch" statement contains multiple cases or choices. The user will decide the case, which is to execute. It contains only single equality expression.
 */
/**
 * We use the ternary operator to get the result of a condition in one single line
 */








// day 12 ans

// exercise 1 ans
/**
 * what will be the output and explain (2)
    let num = 1;
    while(num <= 10) {
        console.log(num);
        num += 2;
    }
 */

/**
 * output:
    1
    3
    5
    7
    9
*/

// explanation:
// Initial value of num is 1
// so when the loop starts. 1 will print in console.
// Then the value of num will increase by 2.
// this will happen in every iteration.
// The iteration will stop when the value of num is less than or equal to 10.
// So when the output is 9 , in the next line the value of num will be 11,
// so the iteration will stop.




// exercise 2 ans

/**
 * what will be the output and explain (2)
    let num = 1;
    while(num <= 20) {
        if(num % 4 === 0){
            console.log(num);
        }
        num++;
    }
 */

/**
 * output:
    4
    8
    12
    16
    20
*/

// explanation:
// Initial value of num is 1.
// so when the loop starts, it will check if the value of num is divisible by 4 or not.
// firstly the value is 1 and 1 is not divisible by 4, so it won't print anything.
// Then it will proceed to next line and num will increase by 1.
// In this way the loop will continue.
// when the value of num is 4,
// it will check if 4 is divisible by 4 or not.
// we know, 4 is divisible by 4.
// so it will print 4 in the console.
// then it will proceed to next line and the value of num will be 5.
// In this way the iteration will go on.
// When the output is 20, in the next line the value of num will be 21.
// So the iteration will stop as it meets the condition.





// exercise 3 ans

/**
 * what will be the output and explain (2)
    let num = 100;
    while(num < 150) {
        console.log(num + 1);
        num--;
    }
 */

/**
 * output:
 * 101
 * 100
 * 99
 * ... ... ...
 * it will print the outputs infinite time.
 * If you check it in your browser, it will crash at some point.
 * so, it is wise not check infinite loop in browser.
 */

// explanation:
// Initial value of num is 100
// So when the loop starts
// it will check if 100 is less then 150 or not
// it will satisfy
// then it will print 101
// then it will proceed on the next line
// the value will decrease by 1 , so value will be 99
// then it will proceed to the next iteration
// it will check if 99 is less then 150 or not
// it will satisfy
// then it will print 100
// then it will proceed on the next line
// the value will decrease by 1 , so value will be 98
// then it will proceed to the next iteration
// in this way the loop will go on and on




// exercise 4 ans

/**
 * Print out all even numbers between 1 and 100. (2+2=4)
 * Write two solutions: One with a while loop and One with a for loop.
 */

/**
 * using for loop 
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) console.log(i);
    }
 * using while loop 
    let i = 1;
    while (i <= 100) {
        if (i % 2 == 0) console.log(i);
        i++;
    }
 */




// exercise 5 ans

/**
 * Run loop and add $ in each repetition (4)
 *
 * function repeat(num){
 * //code
 * }
 *
 * repeat(3)
 *
 * <!--
 * $
 * $$
 * $$$ -->
 *
 * repeat(5)
 *
 * <!--
 * $
 * $$
 * $$$
 * $$$$
 * $$$$$ -->
 */

/**
 * Answer:
 */

// function repeat(num) {
//   let string = "";
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j <= i; j++) {
//       string += "$";
//     }
//     string += "\n";
//   }
//   console.log(string);
// }
// repeat(3);
// repeat(5);



// alternative way
// function repeat(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log('$'.repeat(i));
//   }
// }

// repeat(3);


// alternative way
function repeat(num, current = 1) {
  if (current > num) {
    return;
  }

  console.log('$'.repeat(current));
  repeat(num, current + 1);
}

repeat(3);





// exercise 6 ans

/**
 * Write a function (3)
 *
 * The function will print the numbers from 1 to 100.
 * But for multiples of three print “Fizz” instead of the number
 * and for the multiples of five print “Buzz”.
 * For numbers which are multiples of both three and five print “FizzBuzz”.
 *
 * function fizzBuzz(num){
 * //code
 * }
 *
 * fizzBuzz(100)
 * <!--
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 * ...
 * ... -->
 */

/**
 * Answer:
 **/

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(10);




// exercise 7 ans

/**
 * Write a function that takes two strings (a and b) as arguments. (3)
 * Return the number of times 'a' occurs in 'b'
 *
 * function myFunction(a, b) {
 * return
 * }
 *
 * myFunction('m', 'how many times does the character occur in this sentence?') //2
 * myFunction('h', 'how many times does the character occur in this sentence?') //4
 * myFunction('?', 'how many times does the character occur in this sentence?') //1
 * myFunction('z', 'how many times does the character occur in this sentence?') //0
 */

/**
 * Answer:
 */

// function myFunction(a, b) {
//   let sum = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] === a) sum++;
//   }
//   return sum;
// }

// console.log(myFunction('m', 'how many times does the character occur in this sentence?'))
// console.log(myFunction('h', 'how many times does the character occur in this sentence?'))
// console.log(myFunction('?', 'how many times does the character occur in this sentence?'))
// console.log(myFunction('z', 'how many times does the character occur in this sentence?'))



// alternative way
// function myFunction(a, b) {
//   const count = (b.match(new RegExp(a, 'g')) || []).length;
//   return count;
// }

// const result = myFunction('m', 'how many times does the character occur in this sentence?');
// console.log(result);



// alternative way
// function myFunction(a, b) {
//   const count = (b.split(a).length - 1) || 0;
//   return count;
// }

// console.log(myFunction('m', 'how many times does the character occur in this sentence?'))
// console.log(myFunction('h', 'how many times does the character occur in this sentence?'))
// console.log(myFunction('?', 'how many times does the character occur in this sentence?'))
// console.log(myFunction('z', 'how many times does the character occur in this sentence?'))



// alternative way
function myFunction(a, b) {
  const count = Array.from(b).reduce((acc, char) => char === a ? acc + 1 : acc, 0);
  return Math.max(count, 0); // Ensure the result is non-negative
}

console.log(myFunction('m', 'how many times does the character occur in this sentence?'))
console.log(myFunction('h', 'how many times does the character occur in this sentence?'))
console.log(myFunction('?', 'how many times does the character occur in this sentence?'))
console.log(myFunction('z', 'how many times does the character occur in this sentence?'))





















// day 14 ans

/**
 * -------------------------------------
 * Answer: 1
 * ------------------------------------- 
 */

// function myFunction(a, b) {
//    return a.includes(b) ? b + a : a + b;
// }

// console.log(myFunction('cheese', 'cake')); // 'cheesecake'
// console.log(myFunction('lips', 's')); // 'slips'
// console.log(myFunction('Java', 'script')); // 'Javascript'
// console.log(myFunction(' think, therefore I am', 'I')); // 'I think, therefore I am'



// alternative way

// function myFunction(a, b) {
//   if (a.indexOf(b) !== -1) {
//       return b + a;
//   } else {
//       return a + b;
//   }

//   //  short syntax
//    return a.indexOf(b) !== -1 ? b + a : a + b;
// }

// console.log(myFunction('cheese', 'cake')); // 'cheesecake'
// console.log(myFunction('lips', 's')); // 'slips'
// console.log(myFunction('Java', 'script')); // 'Javascript'
// console.log(myFunction(' think, therefore I am', 'I')); // 'I think, therefore I am'







/**
 * -------------------------------------
 * Answer: 2
 * ------------------------------------- 
 */

// function myFunction(a, b) {
//   let result = [];
//   let rest = a;
//   while (rest.length) {
//       result.push(rest.slice(-3));
//       rest = rest.slice(0, -3);
//   }
//   return result.reverse().join(b);
// }

// console.log(myFunction('1234567', '.')); // '1.234.567'
// console.log(myFunction('abcde', '$')); // 'ab$cde'
// console.log(myFunction('zxyzxyzxyzxyzxyz', '$')); // 'zwxyzwxyzwxyzwxyzwxyz'



// alternative way
// function myFunction(a, b) {
//    let result = '';
//    let start = -3;
//    let end = a.length;

//    // Start a loop that iterates from the length of 'a' down to 1, with a decrement of 3 in each step.
//    for (let i = a.length; i > 0; i -= 3) {

//       // Slice the string 'a' to extract a segment of 3 characters, starting from 'start' and ending at 'end'.
//       const sliced = a.slice(start, end);
//       result = b + sliced + result;

//       // Update 'end' to 'start' and decrement 'start' by 3, preparing for the next iteration.
//       end = start;
//       start -= 3;
//    }

//    // Remove the extra 'b' added at the beginning
//    result = result.substring(1);

//    return result;
// }

// console.log(myFunction('1234567', '.')); // '1.234.567'
// console.log(myFunction('abcde', '$')); // 'ab$cde'
// console.log(myFunction('zxyzxyzxyzxyzxyz', '$')); // 'zwxyzwxyzwxyzwxyzwxyz'







/**
 * -------------------------------------
 * Answer: 3
 * ------------------------------------- 
 */

// function myFunction(a) {
//    let b = [];
//    for (i = 0; i < a.length; i++){
//       b[i] = String.fromCharCode(a.charCodeAt(i) + 1)
//    }
//    return b.join("");
// }

// console.log(myFunction('bnchmf')) //'coding'
// console.log(myFunction('bgddrd')) //'cheese'
// console.log(myFunction('sdrshmf')) //'testing'




// alternative way
// function myFunction(str) {
//    const result = str
//      .split('')
//      .map(char =>  String.fromCharCode(char.charCodeAt(0)+1))
//      .join('');
 
//    return result;
//  }
 
//  console.log(myFunction('bnchmf')); // 'coding'
//  console.log(myFunction('bgddrd')); // 'cheese'
//  console.log(myFunction('sdrshmf')); // 'testing'
 



// ALTERNATIVE way
// function myFunction(str) {
//    return Array.from(str, (char) => String.fromCharCode(char.charCodeAt(0)+1)).join('');
//  }
 
//  console.log(myFunction('bnchmf')); // 'coding'
//  console.log(myFunction('bgddrd')); // 'cheese'
//  console.log(myFunction('sdrshmf')); // 'testing'
 


// alternative way
// function myFunction(str) {
//    const charMap = {
//      a: 'b', b: 'c', c: 'd', d: 'e', e: 'f', f: 'g', g: 'h', h: 'i', i: 'j',
//      j: 'k', k: 'l', l: 'm', m: 'n', n: 'o', o: 'p', p: 'q', q: 'r', r: 's',
//      s: 't', t: 'u', u: 'v', v: 'w', w: 'x', x: 'y', y: 'z', z: 'a'
//    };
 
//    return str.split('').map(char => charMap[char]).join('');
//  }
 
//  console.log(myFunction('bnchmf')); // 'coding'
//  console.log(myFunction('bgddrd')); // 'cheese'
//  console.log(myFunction('sdrshmf')); // 'testing'
 






/**
 * -------------------------------------
 * Answer: 4
 * ------------------------------------- 
 */

// function myFunction(a, n) {
//    return a.slice(a.length - n);

//   //  alternative way
//   //  return a.slice(-n);
// }

// console.log(myFunction([1, 2, 3, 4, 5], 2)) // [ 4, 5 ]
// console.log(myFunction([1, 2, 3], 6)) // [ 1, 2, 3 ]
// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [ 6, 7, 8 ]








/**
 * -------------------------------------
 * Answer: 5
 * ------------------------------------- 
 */

// function myFunction(a, b) {
//    return a < b ? (a / b) : (a * b);
// }


// console.log(myFunction(10, 100)) // 0.1
// console.log(myFunction(90, 45)) // 4050
// console.log(myFunction(8, 20)) // 0.4
// console.log(myFunction(2, 0.5)) // 1






// Ans -6

/**
 * -------------------------------------
 * Answer-1: 
 * ---------
      for(let i of people){
          console.log(i)
      }
 *
 * Answer-2:
 * ---------
      people.shift();
 *
 * Answer-3:
 * ---------
      people.pop();
 *
 * Answer-4:
 * ---------
      people.unshift('ifat');
 *
 * Answer-5:
 * ---------
      people.push('virat');
 *
 * Answer-6:
 * ---------
      for (let i of people) {
         if (i === "Anis") {
            console.log(i);
            break;
         }
      }
 *
 * Answer-7:
 * ---------
      people.slice(0,1).concat(people.slice(2))
 *
 * Answer-8:
 * ---------
      people.indexOf("Anis")
 *
 * Answer-9:
 * ---------
      people.indexOf("Foo")
 *
 * Answer-10:
 * ---------
      people.splice(2,1,"Elizabeth","Bob")
 *
 * Answer-11:
 * ---------
      let withMiraz = people.concat('Miraz');
 * 
 */





      




// day 17 ans
// Ans 1

/**
 * -------------------------------------
 * Answer (part - 1)
 * -------------------------------------
 * The output 'window' object in browser or client side
 * because in global execution context this always refers window object in browser
 */

/**
 * -------------------------------------
 * Answer (part - 2)
 * -------------------------------------
 * The output is 'window' object in browser or client side.
 *
 * Explanation:
 * -------
 * This is because in plain function call 'this' refers the window object
 */






// exercise 2

/**
 * -------------------------------------
 * Answer:
 * -------------------------------------
 * Output will be 'Hello! Adnan'.
 *
 * Explanation:
 * -------
 * Inside an object 'this' refers that object (instructor) itself.
 * As we are calling the method (function inside object) by object reference like instructor.sayHi(), this referes left side of the dot(.) (instructor object)  
 * Here in this.firstName, 'this' refers the instructor object
 * and by using this.firstName, value 'Adnan' is found.
 */







// ans 3

/**
 * -------------------------------------
 * Answer: (part 1)
 * -------------------------------------
 * The output is "Cat owner? -undefined".
 *
 * Explanation:
 * -------
 * This is because 'this' here refers the object instructor. that's why this.catOwner results undefined
 * but catOwner is the property of the another inner object 'info'.
 * we have to bind "this" properly to info object to get the correct output
 */

/**
 * -------------------------------------
 * Answer: (part 2)
 * ------------------------------------- 
   const bounddisplayInfo = instructor.displayInfo.bind(instructor.info);
   bounddisplayInfo();
 */





// ans 4
   
/**
 * -------------------------------------
 * Answer: 4
 * -------------------------------------
 * This function will output 'Residing Dhaka'.
 *
 * Explanation:
 * -------
 * Here 'this' keyword is defined in 'displayLocation' method. as we are calling displayLocation method by object(info) reference that's why 'this' refers  the info object
 * And we are trying to access the info object's property named 'data' and it results perfectly fine
 */





// ans 5

// instructor.info.data.logLocation() //  This will throw an error.

// Because logLocation is a method reference which indicates displayLocation method reference
// During calling of logLocation method by data object reference this inside data object refers to data object
// As there is no displayLocation property inside data object it set to undefined ex: logLocation: undefined
// we are calling logLocation but it's undefined and not a function to be called  like undefined() results error






// ans 6

// the ways to deep or shallow copy for array and object are given below
// Using Assign operator for shallow copy
// Using Spread operator for shallow copy
// JSON.stringify() for deep copy. 





// ans 7

// All Primitive Data such as string, number, boolean etc is Immutable Data
// All Complex or Non-primitive Data like Function, Object or Array are Mutable Data



// ans 8

// Pass by Value is used for primitive Data where value can be copied

const outside = 'burnt outside';
function passByValue(inside) {
   let b = inside;
   b = 'ok inside'
   return b;
}
console.log(passByValue(outside));
console.log(outside);
// 1st output will be 'ok inside'
// 2nd output will be 'burnt outside'


// Pass by Reference  is used for complex data like object or array. for complex data type value can not be copied but the reference can be copied. 

let profile = { name :'john' }
function passByRef(input) {
   let copy = input;
   copy.name = 'cena';
   return copy
}
console.log(passByRef(profile));
console.log(profile);
// 1st & 2nd output will be same.  {name: 'cena'}























// day 19 ans
// ans 1 

// function myFunction(a, b) {
//   return a - b === 0;
// }

// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))) //false
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) //true
// console.log(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) //false




// exercise ans 2

// function myFunction(a, b) {
//   return Math.abs((a.valueOf() - b.valueOf()) / (24 * 60 * 60 * 1000));
// }

// console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01'))) //10
// console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01'))) //7457




// exercise 3

// function myFunction(a, b) {
//   return a < b ? true : false;
// }

// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))) //true
// console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))) //false
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) //false






// exercise 4

// function myFunction(a, b) {
//   let hrs = Math.abs(a.getHours() - b.getHours());
//   let min = Math.abs(a.getMinutes() - b.getMinutes());
//   let sec = Math.abs(a.getSeconds() - b.getSeconds());
//   return { hrs, min, sec };
// }

// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')))
//  //{ hrs: 0, min: 45, sec: 10 }

// console.log(myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')))
//  //{ hrs: 1, min: 50, sec: 23 }

// console.log(myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')))
//  //{ hrs: 3, min: 4, sec: 12






// ans 5

// function generateRandomNum(startNum, endNum) {
//   return Math.floor(Math.random() * Math.abs(startNum - endNum) + startNum);
// }

// console.log(generateRandomNum(5, 10))















// day 20 ans

/**
 * exercise:1,  mark:3
 * Define a function that outputs max of two values   (3)
 * Don't use Built in Method
     function max(a, b){ // To Do }
     max(20, 25); //25
     max(100, 25); //100
 *
 */

/**
 * -------------------------------------
 * Solution
 * -------------------------------------
 */

// function max(a, b) {
//    return a > b ? a : b 
// }

// console.log(max(20, 25)) //25
// console.log(max(100, 25)) //100






/**
 * exercise:2
/**
 * -------------------------------------
 * Solution
 * -------------------------------------
 */

// function arrayFromRange(num1, num2) {

//    // Calculate the starting and ending points of the range
//    const start = num1 > num2 ? num2 : num1;
//    const end = num1 > num2 ? num1 : num2;
 
//    // Initialize an empty array to store the elements within the range
//    const result = [];
 
//    // Loop through the range and add each number to the result array
//    for (let i = start; i <= end; i++) {
//      result.push(i);
//    }
 
//    // Return the array containing all elements in the range
//    return result;
//  }
 

//  const rangeOne = arrayFromRange(1, 10);
//  console.log(rangeOne); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
//  const rangeTwo = arrayFromRange(10, 5);
//  console.log(rangeTwo); // Output: [5, 6, 7, 8, 9, 10]
 








/**
 * exercise:3
 * -------------------------------------
 * Solution
 * -------------------------------------
 */

// function showNumber(num1, num2) {
//    const start = num1 > num2 ? num2 : num1;
//    const end = num1 > num2 ? num1 : num2;
//    let sum = 0;
//    for (let i = start; i <= end; i++) {
//        sum += i;
//    }
//    return sum;
// }

// console.log(showNumber(2, 4)) //9 (2 + 3 + 4)
// console.log(showNumber(5, 2)) //14 (2 + 3 + 4 + 5)









/**
 * exercise:4
 * -------------------------------------
 * Solution
 * -------------------------------------
 * 
 */

// const numbers = [1, 2, 3, 4]; 
// function getMax(arr) {
//    let maxValue = arr[0];
//    for (i = 1; i < arr.length; i++) {
//        if (arr[i] > maxValue) {
//            maxValue = arr[i];
//        }
//    }
//    return maxValue;
// }

// console.log(getMax(numbers)) // 4



// alternative way

// function getMax(array) {
   
//    // Use Math.max() and the spread operator to find the maximum number in the array.
//    // return Math.max(...array);
   
//    // using apply method
//    // return Math.max.apply(null, array);

//    // using reduce method
//    return array.reduce((max, current) => {
//       return current > max ? current : max;
//    }, array[0]);
// }

// const numbers = [1, 2, 3, 4];
// console.log(getMax(numbers)); // Output: 4










    /**
 * exercise:5
 * -------------------------------------
 * Solution
 * -------------------------------------
 */

// function calculateAverage(arr) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//          sum += arr[i];
//    }

//    const average = Math.round(sum / arr.length);
//    let grade = "";
//    switch (true) {
//          case average < 60:
//             grade = "F";
//             break;
//          case average >= 60 && average <= 69:
//             grade = "D";
//             break;
//          case average >= 70 && average <= 79:
//             grade = "C";
//             break;
//          case average >= 80 && average <= 89:
//             grade = "B";
//             break;
//          case average > 89:
//             grade = "A";
//             break;
//          default:
//             grade = "Invalid Input";
//             break;
//    }
//    return grade;
// }

// console.log(calculateAverage([60, 70, 90, 50, 55]))	// D
// console.log(calculateAverage([83, 70, 90, 50, 55]))	// C







/**
 * exercise:6
 * -------------------------------------
 * Solution
 * -------------------------------------
 */


// function showProperties(movieData) {
//   let str = "";
//   for (const key in movieData) {
//       if (typeof movieData[key] === "string") {
//           str += `${key}-${movieData[key]} `;
//       }
//   }
//   return str;
// }

// const movie = { 
//  title: 'a',
//  releaseYear: 2018,
//  rating: 4.5,
//  director: 'b' 
// };
// console.log(showProperties(movie)); //title-a director-b








    /**
 * exercise:7
/**
 * -------------------------------------
 * Solution
 * -------------------------------------
 */


// function countTruthy(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i]) {
//           count++;
//       }
//   }
//   return count;
// }

// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array)); //2


// alternative way
// function countTruthy(array) {
//   const truthyValues = array.filter(Boolean);
//   return truthyValues.length;
// }

// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array)); // 2


// alternative way
// function countTruthy(array) {
//   return array.reduce((count, element) => (element ? count + 1 : count), 0);
// }

// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array)); // 2





/**
 * exercise:8 (bonus)
/**
 * -------------------------------------
 * Solution
 * -------------------------------------
 */

// function countOccurrences(array, searchElement) {
//   let count = 0;
//   for (let index = 0; index < array.length; index++) {
//       if (array[index] === searchElement) {
//           count++;
//       }
//   }
//   return count;
// }

// const count = countOccurrences([1, 2, 3, 1], 1); 
// console.log(count); //2



// alternative way
// function countOccurrences(array, searchElement) {
//   return array.reduce((count, currentElement) => currentElement === searchElement ? count + 1 : count, 0);
// }

// const count = countOccurrences([1, 2, 3, 1], 1);
// console.log(count); // Outputs 2


// alternative way
// function countOccurrences(array, searchElement) {
//   // Use the `filter` method to create a new array containing only the elements equal to `searchElement`.
//   const filteredArray = array.filter(element => element === searchElement);

//   // The length of the filtered array is the count of occurrences.
//   return filteredArray.length;
// }

// const count = countOccurrences([1, 2, 3, 1], 1);
// console.log(count); // Outputs 2










  // day 21 ans

/**
 * exercise:1
 * -------------------------------------
 * Solution 
 * -------------------------------------
 */

// function placeInMiddle(arr, vals) {
//   const middleIndex = Math.floor(arr.length / 2);

//   // Use the `slice` method to split the 'arr' into two parts.
//   const firstHalf = arr.slice(0, middleIndex);
//   const secondHalf = arr.slice(middleIndex);

//   // Concatenate the 'firstHalf', 'vals', and 'secondHalf' arrays to form the result.
//   return [...firstHalf, ...vals, ...secondHalf];
// }

// console.log(placeInMiddle([1,2,6,7],[3,4,5])); // [1,2,3,4,5,6,7]
// console.log(placeInMiddle([1],[3,4,5])); // [1,3,4,5]
// console.log(placeInMiddle([1,6],[2,3,4,5])); // [1,2,3,4,5,6]
// console.log(placeInMiddle([], [2,3,4,5])); // [2,3,4,5]



// alternative way
// function placeInMiddle(arr, vals) {
//   // Calculate the middle index of the 'arr' array by dividing its length by 2 and rounding up.
//   const middleIndex = Math.ceil(arr.length / 2);

//   // Use the 'splice' method to insert the 'vals' array at the middleIndex.
//   // The '0' as the second argument indicates that no elements should be removed.
//   // The '...vals' spreads the 'vals' array into individual elements to insert.
//   arr.splice(middleIndex, 0, ...vals);

//   // Return the modified 'arr' with 'vals' inserted in the middle.
//   return arr;
// }


// console.log(placeInMiddle([1,2,6,7],[3,4,5])) // [1,2,3,4,5,6,7]
// console.log(placeInMiddle([1],[3,4,5])) // [1,3,4,5]
// console.log(placeInMiddle([1,6],[2,3,4,5])) // [1,2,3,4,5,6]
// console.log(placeInMiddle([],[2,3,4,5])) // [2,3,4,5]








/**
 * exercise:2
 * -------------------------------------
 * Solution
 * -------------------------------------
 */

// function joinArrays(...params) {
//   let joinedArrays = [];
//   for (let i of params) {
//       joinedArrays.push(...i);
//   }
//   return joinedArrays;
// }

// console.log(joinArrays([1],[2],[3])) // [1,2,3]
// console.log(joinArrays([1],[2],[3],[1],[2],[3])) // [1,2,3,1,2,3]
// console.log(joinArrays([1,2,3],[4,5,6],[7,8,9])) // [1,2,3,4,5,6,7,8,9]
// console.log(joinArrays([1],[3],[0],[7])) // [1,3,0,7]



// alternative way
// function joinArrays() {
//   return [].concat(...arguments);
// }

// console.log(joinArrays([1],[2],[3])); // [1,2,3]
// console.log(joinArrays([1],[2],[3],[1],[2],[3])); // [1,2,3,1,2,3]
// console.log(joinArrays([1,2,3],[4,5,6],[7,8,9])); // [1,2,3,4,5,6,7,8,9]
// console.log(joinArrays([1],[3],[0],[7])); // [1,3,0,7]










    

/**
 * exercise:3
 * -------------------------------------
 * Solution
 * -------------------------------------
 */

// function sumEvenArgs(...params) {
//   let sum = 0;
//   for (let i of params) {
//       if (i % 2 === 0) {
//           sum += i;
//       }
//   }
//   return sum;
// }

// console.log(sumEvenArgs(1,2,3,4)) // 6
// console.log(sumEvenArgs(1,2,6)) // 8
// console.log(sumEvenArgs(1,2)) // 2



// alternative way
// function sumEvenArgs(...args) {
//   return args.reduce((sum, current) => current % 2 === 0 ? sum + current : sum, 0);
// }

// console.log(sumEvenArgs(1, 2, 3, 4)); // 6
// console.log(sumEvenArgs(1, 2, 6)); // 8
// console.log(sumEvenArgs(1, 2)); // 2







    /**
 * exercise:4,  mark:4
 * You have given a object with some nested properties and methods,
 * you have to access the properties and methods in single statement (using destructuring)
 * 
 * Access city, getAddress from the object and console the output - (2 marks)
 * Get the correct output by calling getAddress function. Ex: Dhaka-Bangladesh - (2 marks)
        const obj = {
            name: 'samim',
            email: 'samimfazlu091@gmail.com',
            address: {
                location: {
                    country: {
                        name: 'Bangladesh',
                        city: 'Dhaka',
                    },
                },
                getAddress() {
                    return this.country.city + '-' + this.country.name
                },
            },
        }
 *
 */

/**
 * -------------------------------------
 * Solution
 * -------------------------------------
    const {
        address: { getAddress } = {},
        address: { location: { country: { city } = {} } = {} } = {},
    } = obj;
    console.log(city);
    console.log(getAddress.call(obj.address.location));
 * 
 */


    const obj = {
      name: 'samim',
      email: 'samimfazlu091@gmail.com',
      address: {
        location: {
          country: {
            name: 'Bangladesh',
            city: 'Dhaka',
          },
        },
        getAddress() {
          return this.country.city + '-' + this.country.name
        },
      },
    }
    
    
    const {address: {location} = {}} = obj;
    console.log(location)













/**
 * exercise:5
/**
 * -------------------------------------
 * Solution
 * -------------------------------------
 */

// function sum(values) {

//     let sum = 0;
//     for (let item of values) {
//       if (typeof item === "number") {
//         sum += item;
//       }
//     }
//     return sum;
// }
// console.log(sum([1, 2, 3, 4]))









    /**
 * exercise:6,  mark:2
 * What are the difference between rest(...) and spread(...) operator.
 * Explain with Example. When to use what
 *
 */

/**
 * -------------------------------------
 * Solution
 * -------------------------------------
 * 
 * -------------------------
 * Rest
 * -------------------------
 * Rest is a collection of all remaining elements/properties.
 * It packs the collections in an array.
 * We can use it in destruction or as a parameter of a function. It can take all types of data.
 * 1st Example of rest operator.
        const arr = [1, 2, 3, 4, 5, 6];
        const [, , ...restEl] = arr;
 * Here, after skipping 1 and 2, restEl takes rest of all values in an array,
 * because of rest(...) operator.
 * 2nd Example of rest operator.
        function restVal(el, ...rest) {}
        restVal(1, 2, 3, 4, 5);
 * Here, In the function 'el' receive 1 and then rest of all arguments (2,3,4,5) store in rest parameter,
 * as an array because of rest (...) operator.
 *
 * -------------------------
 * Spread
 * -------------------------
 * The spread operator unpacks array elements into single data.
 * It is used only for unpacking an array.
        const arr = [1, 2, 3, 4, 5];
        console.log(...arr);
 * 
 */







// day 23 ans


// Question -1 answer
// const valTimesIndex = (arr) => arr.map((element, index) => element * index);

// console.log(valTimesIndex([1,2,3])) // [0,2,6]
// console.log(valTimesIndex([1,-2,-3])) // [0,-2,-6]






// Question -2 answer

// function doubleOddNumbers(arr) {
//   // Use filter to get only the odd numbers and then map to double them
//   return arr.filter(num => num % 2 !== 0).map(num => num * 2);
// }

// console.log(doubleOddNumbers([1, 2, 3, 4, 5])); // [2, 6, 10]
// console.log(doubleOddNumbers([4, 4, 4, 4, 4])); // []



// alternative way
// function doubleOddNumbers(arr) {
//   return arr.reduce((result, num) => (num % 2 !== 0 ? [...result, num * 2] : result), []);
// }

// console.log(doubleOddNumbers([1, 2, 3, 4, 5])); // [2, 6, 10]
// console.log(doubleOddNumbers([4, 4, 4, 4, 4])); // []






// Question -3 answer

// const showFirstAndLast = (arr) => arr.map((item) => item[0] + item[item.length - 1]);

// console.log(showFirstAndLast(['obaydullah','Karim', 'miraz', 'kawsar', 'ruhi', 'udemy']))
// // ["oh", "km", "mz", "kr", 'ri', 'uy']
// console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])) // ['hi', 'ge', 'se']




// Question -4 answer
// const addKeyAndValue = (arr, key, value) =>
//   arr.map((el) => {
//     el[key] = value;
//     return el;
//   });

// console.log(addKeyAndValue([{name: 'Samim'}, {name: 'Miraz'}, {name: 'Matt'}, {name: 'Anam'}], 'title', 'instructor'))
// // [{name: 'Samim', title:'instructor'}, 
// // {name: 'Miraz', title:'instructor'}, {name: 'Matt', title:'instructor'}, 
// // {name: 'Anam', title:'instructor'}]




// Question -5 answer
// const vowelCount = (str) =>
//   str
//     .toLowerCase()
//     .split("")
//     .filter(
//       (el) => el === "a" || el === "e" || el === "i" || el === "o" || el === "u"
//     )
//     .reduce((obj, l) => {
//       obj[l] ??= 0;
//       obj[l]++;
//       return obj;
//     }, {});

// console.log(vowelCount('samim')) // {a:1,i:1};
// console.log(vowelCount('Tim')) // {i:1};
// console.log(vowelCount('Matt')) // {a:1})
// console.log(vowelCount('hmmm')) // {};
// console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1};


// alternative way
// function vowelCount(str) {
//   // Convert the input string to lowercase to ensure case insensitivity
//   str = str.toLowerCase();

//   // Define an array of vowels
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   // Use the reduce method to count the occurrences of each vowel and store them in an object
//   const result = str.split('').reduce((countObj, char) => {
//     if (vowels.includes(char)) {
//       countObj[char] = (countObj[char] || 0) + 1;
//     }
//     return countObj;
//   }, {});

//   return result;
// }

// console.log(vowelCount('samim')); // {a: 1, i: 1}
// console.log(vowelCount('Tim')); // {i: 1}
// console.log(vowelCount('Matt')); // {a: 1}
// console.log(vowelCount('hmmm')); // {}
// console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1}






// Question -6 answer
// const hasOnlyOddNumbers = (arr) => arr.every((el) => el % 2 === 1);

// console.log(hasOnlyOddNumbers([1,3,5,7])) // true
// console.log(hasOnlyOddNumbers([1,2,3,5,7])) // false






// Question -7 answer
// const hasNoDuplicates = (arr) => arr.every((elm, ind) => arr.indexOf(elm) === ind);
// console.log(hasNoDuplicates([1,2,3,1])) // false
// console.log(hasNoDuplicates([1,2,3])) // true



// Question -8 answer
// const findInObj = (arr, key, searchValue) =>
//   arr.find((obj) => obj[key] === searchValue);

// console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Samim', last:"Hasan", isCatOwner: false}], 'isCatOwner', true)) 
//   // {first: 'Tim', last:"Garcia", isCatOwner: true}
  




// Question -9 answer
// const hasCertainValue = (arr, key, searchValue) =>
//   arr.every((el) => el[key] === searchValue);

//   var arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
//     {title: "Instructor", first: 'Matt', last:"Lane"}, 
//     {title: "Instructor", first: 'Anam', last:"Ahmed", isCatOwner: true}
//   ]

// console.log(hasCertainValue(arr,'title','Instructor')) // true
// console.log(hasCertainValue(arr,'first','Elie')) // false
  





// Question -10 answer

// function isEven(val) {
//   return val % 2 === 0;
// }
// function isLongerThanThreeCharacters(val) {
//   return val.length > 3;
// }
// const partition = (arr, callback) => {
//   const notMatched = [];
//   const matched = arr.reduce((acc, el) => {
//     if (callback(el)) {
//       acc.push(el);
//     } else {
//       notMatched.push(el);
//     }
//     return acc;
//   }, []);
//   return [matched, notMatched];
// };



// var arr = [1,2,3,4,5,6,7,8];
// console.log(partition(arr, isEven)) // [[2,4,6,8], [1,3,5,7]];

// const names = ["Elie", "Colt", "Tim", "Matt"];
// console.log(partition(names, isLongerThanThreeCharacters)) // [['Elie', 'Colt', 'Matt'], ['Tim']]











// Question -11 answer

const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Max" },
  { age: 30 },
];
const extractValue = (arr, key) => arr.filter((el) => el[key]).map((val) => val[key]);

console.log(extractValue(arr,'name')) // ['Elie', 'Tim', 'Matt', 'Max']







// day 27 ans
/**
 * Write the code necessary to do the following: (12) (1 per each question)
 */

// exercise 1

//  a.Select the section with an id of container without using querySelector.
//  const section = document.getElementById("container");
//  ----------------------------------------------------------------------------
//  b.Select the section with an id of container using querySelector.
//  const section = document.querySelector("#container");
//  ----------------------------------------------------------------------------
//  c.Select all of the list items with a class of "second".
//  const allSection = document.querySelectorAll(".second");
//  ----------------------------------------------------------------------------
//  d.Select a list item with a class of third, but only the list item inside of the ol tag.
//  const third = document.querySelector("ol li.third");
//  ----------------------------------------------------------------------------
//  e.Give the section with an id of container the text "Hello!".
//  const section = document.querySelector("#container");
//  section.insertAdjacentText("afterbegin", "Hello!");
//  ----------------------------------------------------------------------------
//  f.Add the class main to the div with a class of footer.
//  document.querySelector(".footer").classList.add("main");
//  ----------------------------------------------------------------------------
//  g.Remove the class main on the div with a class of footer.
//  document.querySelector(".footer").classList.remove("main");
//  ----------------------------------------------------------------------------
//  h.Create a new li element.
//  const newLI = document.createElement("li");
//  ----------------------------------------------------------------------------
//  i.Give the li the text "four".
//  const newLI = document.createElement("li");
//  newLI.appendChild(document.createTextNode("four"));
//  ----------------------------------------------------------------------------
//  j.insert this li before the li with class of five
//  const newLI = document.createElement("li");
//  newLI.appendChild(document.createTextNode("four"));
//  const ul = document.querySelector("ul");
//  const liFive = document.querySelector("ul li.five");
//  ul.insertBefore(newLI, liFive);
//  ----------------------------------------------------------------------------
//  k.Loop over all of the lis inside the ol tag and give them a background color of "green".
//  const olLists = document.querySelectorAll("ol li");
//  olLists.forEach((li) => (li.style.backgroundColor = "green"));
//  ----------------------------------------------------------------------------
//  l.Remove the div with a class of footer.
//  document.querySelector(".footer").remove();






// exercise 2
/**
 * Try to create following structure by using Dom properties and method
 * insert into body of your html document (3)
    <div class="container" id="container">
        <h1 class="h1">Product List</h1>
        <ul class="product-collection mb-3">
            <li class="product-collection-item" id="sample">Shoes</li>
        </ul>
    </div> 
 */


// const body = document.body;
// const div = document.createElement("div");
// const mp = document.createElement("h1");
// const lp = document.createElement("ul");
// const lc = document.createElement("li");
// div.className = "container";
// mp.className = "h1";
// lp.className = "product-collection";
// lp.classList.add("mb-3");
// lc.className = "product-collection-item";
// div.id = "container";
// lc.id = "sample";
// body.append(div);
// mp.appendChild(document.createTextNode("Product List"));
// div.append(mp);
// div.append(lp);
// lc.appendChild(document.createTextNode("Shoes"));
// lp.append(lc);







// exercise 3
/**
 * Try to Examine the common event like mouse Events and Keyboard events found in MDN DOCS
 * "https://developer.mozilla.org/en-US/docs/Web/Events") (1)
 */

// Some Common events are:
// click
// dblclick
// mousedown
// mouseup
// mouseover
// mousemove
// mouseout
// mouseleave
// keydown
// keypress
// keyup


 




//Exercise-4: What are the difference between event bubbling and event capturing(1)

// Bubbling phase: event moves child to parent (down to up)
// Capturing phase: event moves parent to child (up to down)








// exercise 5
/**
 * Write down the benefits of using event delegation? (1)
 * Explain with a practical Example (2)
 */

// If we have a lot of elements handled in a similar way,
// then instead of assigning a handler to each of them
// we put a single handler on their common ancestor.
// In the handler we get evt.target to see where the event actually happened and handle it.
// Benefits:
// 1. Simplifies initialization and saves memory: no need to add many handlers.
// 2. Less code: when adding or removing elements, no need to add/remove handlers.
 




/**
 * Example:
 */

// const ul = document.querySelector("ul");
// ul.addEventListener("click", (evt) => {
//   const target = evt.target.tagName;
//   if (target === "LI") {
//     // here we can handle all li in ul without assigning a handler
//     // to each of them because of event delegation
//     console.log("Delegation: ", evt.target.textContent);
//   }
// });





//     <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Exercise1</title>
//   </head>
//   <body>
//     <div class="header"></div>

//     <section id="container">
//       <ul>
//         <li class="first">one</li>
//         <li class="second">two</li>
//         <li class="third">three</li>
//         <li class="five">Five</li>
//       </ul>

//       <ol>
//         <li class="first">one</li>
//         <li class="second">two</li>
//         <li class="third">three</li>
//       </ol>
//     </section>

//     <div class="footer"></div>
//     <script src="./exercise1.js"></script>
//     <script src="./exercise5.js"></script>
//   </body>
// </html>





// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Exercise2</title>
//   </head>
//   <body>
//     <script src="./exercise2.js"></script>
//   </body>
// </html>
















