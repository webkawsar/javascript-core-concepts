// case 1
console.log(0 === -0); // true
console.log(-0 === +0); // true
console.log(+0 === -0); // true
console.log(-0 === -0); // true

// case 2
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(Object.is(-0, +0));

console.log(Number(+0));
console.log(Number(-0));

// Object.is() doesn't coerce either value
// Object.is() and === is in their treatment of signed zeros and NaN values

// string is empty and no separator is specified
// console.log(emptyString.split(""));
