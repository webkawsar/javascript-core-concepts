
// index
// callback function, 
// higher order function,
// array helper method and
// IIFE



// callback function
// A callback is a function passed as an argument to another function

const washHand = (fn) => {
    setTimeout(() => {

        fn(true);
    }, 5000)
}

const eat = (value) => {
    if(value) {

        console.log('Se khabar khete parbe')
    } else {
        console.log('Se khabar khete parbe na');
    }
}

washHand(eat);

//Higher order function
// a function that take function as arguments, or returns a function 


// Array helper method
const myArr = [1, 2, 3, 4];

const initialValue = 0;
const callback = (acc, cur) => {
    console.log(acc)
    console.log(cur)
    return acc + cur;
}

const sum = myArr.reduce(callback, initialValue);
console.log(sum);

// 100 + 1
// 101
// 101 + 2
// 103
// 103 +3
// 106
// 106 + 4
// 110


// JavaScript IIFE (Immediately Invoked Function Expression)

(() => {
    const names = ['Kawsar', 'Ahmed', 'Imran', 'Javed'];
    names.forEach((name) => {
        console.log(name)
    })
})();


(function printName() {
    const names = ['Kawsar', 'Ahmed', 'Imran', 'Javed'];
    names.forEach((name) => {
        console.log(name)
    })
})();

