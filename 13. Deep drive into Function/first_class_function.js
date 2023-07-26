

// first class function
// function is considered as like any other data


// characteristics of data
// can be assigned to right side of the variable
// can be passed as function arguments
// can be returned from function
// First class function

const a = 10;
const b = a;

function print(num) {
    return num;
}

console.log(print(a))


// function assign in variable
const sum = function(num1, num2) {
    return num1 + num2;
}
const result = sum(5, 6);
console.log(result)



// practical example
function add(num1) {
    return (num2) => {
        return num1 + num2;
    }
}

console.log(add(3)(2))



// Higher order function => A higher order function is a function that accepts function as a parameter or returns a function.

// callback function
// lambda function


