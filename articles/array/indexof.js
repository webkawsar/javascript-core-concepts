// Life is easy
const numbers = [1, 3, 5, 7, 9];
console.log(numbers.indexOf(5)); // 2
console.log(numbers.indexOf(10)); // -1


// Life is Boring
function customIndexOf(array, searchElement) {

    for (let index = 0; index < array.length; index++) {

        const element = array[index];
        if(element === searchElement) {
            return index;
        }
    }

    return -1;
}

console.log(customIndexOf(numbers, 5)) // 2
console.log(customIndexOf(numbers, 10)) // -1


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


