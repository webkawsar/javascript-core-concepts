
/********************************************************** */

// Number.isNaN() is an ECMAScript6 (ES6) feature.
// Number.isNaN() returns true if a number is Not-a-Number.
// In JavaScript, NaN is a number that is not a legal number.
// The Number.isNaN() method returns true if the value is NaN, and the type is a Number.


// isNaN(value) er value NaN hole true or false return korbe
// isNaN() er value ke se first e  Number e convert korar try kore. converted value NaN hole isNaN() true or false

// first part code examples

console.log(typeof NaN);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(NaN == null);
console.log(Number.NaN === NaN);


console.log(Number(10)); // 10
console.log(Number('Hello')); // NaN
console.log(Number('5')); // 5
console.log(Number(NaN)); // NaN
console.log(Number('NaN')); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number({})); // NaN
console.log(Number('123ABC')); // NaN 
console.log(Number('')); // 0
console.log(Number(true))
console.log(Number(false))



console.log(isNaN(10)); // false
console.log(isNaN('Hello')); // true
console.log(isNaN('5')); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('NaN')); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN('123ABC')); // true
console.log(isNaN('')); // false
console.log(isNaN()); // true
console.log(isNaN(0/0)); // true
console.log(isNaN(0)); // false
console.log(isNaN(1)); // false


console.log(NaN == Number('hi'));






