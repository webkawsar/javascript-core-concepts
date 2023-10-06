

// loop, nested loop, for in loop, for of loop

// operands
// increment, decrement

// urinary operator
// typeof operator => Done
// instanceof operator => Done


// elevele javascript 
// object

// type conversation
// indexOf => Done

// kunta kiser sate loop korte hoy
// for in / for of =>


// global properties and methods



// let numbers = [1, 3, 5, 7, 9];
// if(numbers.length > 0) {
//     console.log('পেট ভরা আছে!') // পেট ভরা আছে!
// } else {
//     console.log('একেবারে ক্ষুধার্ত')
// }


// if(numbers.length) {
//     console.log('পেট ভরা আছে!') // পেট ভরা আছে!
// } else {
//     console.log('একেবারে ক্ষুধার্ত')
// }


// numbers = [];
// if(numbers) {
//     console.log('পেট ভরা আছে!') // পেট ভরা আছে!
// } else {
//     console.log('একেবারে ক্ষুধার্ত')
// }




// আজকে আমরা দেখব একটা স্ট্রিং কে কতভাবে নাম্বারে কনভার্ট করা যায়। 

// একটু এক্সাম্পল দেখে নিলে আমাদের বুঝতে সুবিধা হবে, যেমনঃ 
```
let stringNumber = '420';
```

// আমরা যদি এটার টাইপ চেক করি তাহলে স্ট্রিং দেখাচ্ছে
```
let stringNumber = '420';
console.log(typeof stringNumber); // string
```

// আমি চাচ্ছি এটাকে নাম্বারে কনভার্ট করতে তাহলে প্রথমে যেটা আমরা করতে পারি Number কনস্ট্রাক্টর দিয়ে ডাটা টাইপ পরিবর্তন করে ফেলতে পারি এভাবেঃ

let number = Number(stringNumber);
console.log(typeof number) // number





// global JavaScript methods
// let stringNumber = '420';
// let number = Number(stringNumber);
// console.log(typeof number) // number


// let stringNumber = '420';
// let number = new Number(stringNumber);
// console.log(typeof number) // object


// global JavaScript methods
// let stringNumber = '420';
// let number = parseInt(stringNumber);
// console.log(typeof number) // number

// global JavaScript methods
// let stringNumber = '420';
// let number = parseFloat(stringNumber);
// console.log(typeof number) // number

// unary plus operator
// unary operator
// let stringNumber = '420';
// let number = +stringNumber
// console.log(typeof number) // number


// let stringNumber = '420';
// let number = Math.floor(stringNumber);
// console.log(typeof number) // number


// let stringNumber = '420';
// let number = Math.ceil(stringNumber);
// console.log(typeof number) // number


// let stringNumber = '420';
// let number = Math.ceil(stringNumber);
// console.log(typeof number) // number



let myString = '129' 
console.log(parseInt(myString)) // expected result: 129

// let a = 12.22
let a = 12.52
console.log(parseInt(a)) // expected result: 12


let str = '2344' * 1
console.log(typeof str) // number

// bitwise NOT operator
str = '1234'
console.log(~~str) // expected result: 1234
console.log(typeof str) // string

str = ~~str;
console.log(typeof str) // number



negStr = '-234'
console.log(~~negStr) // expected result: -234

const n = Number();
console.log(n instanceof Number)



// https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
// https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
// https://i.stack.imgur.com/PXxhB.png
// https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l




const name = "Kawsar Ahmed";
console.log(name) // "Kawsar Ahmed"
console.log(name.length) // 12
console.log(name.toUpperCase())


const profile = {
    name: "Kawsar",
    isDeveloper: true,
    sayHi() {
        return 'Hi! ' + this.name ;
    }
}

console.log(profile.name) // 'Kawsar'
console.log(profile.sayHi()) // "Hi! Kawsar"








