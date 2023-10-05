
// 21 no problem solving class
// problem - 27.47 second

// finding the abg percentage
// must pass (70%) each subject
// if failed any subject, should return null
// if all subject ar passed, then return any percentage

// input - array of numbers
// output - percentage


function avgPercentage(arr) { 
   
    for (const number of arr) {
        if(number < 700) {
            return null;
        }
    }

    let total = 0;
    for (const number of arr) {
        total += number;
    }

    const avgNumber = total / arr.length;
    const fractionPercentage = avgNumber / 1000;

    return Math.round(fractionPercentage * 100)
} 

console.log(avgPercentage([990, 770, 760, 900, 800])) 




// alternative way

function calculateAveragePercentage(subjectScores) {
    
    // Check if any subject score is less than 70%
    if (subjectScores.some(score => score < 70)) {
      return null; // Return null if any subject is failed
    }
  
    // Calculate the average percentage
    const totalScores = subjectScores.reduce((sum, score) => sum + score, 0);
    const averagePercentage = Math.round(totalScores / subjectScores.length);
  
    return averagePercentage;
}
  
console.log(calculateAveragePercentage([80, 90, 75]))
console.log(calculateAveragePercentage([60, 80, 85]))
 

  






// start from 55 minute

// get maximum number from an array

function getMax(arr) {

    let maxNum = arr[0];
    for (const num of arr) {
        if(num > maxNum) {
            maxNum = num;
        }
    }

    return maxNum;
}

console.log(getMax([10, 14, 8, 12, 20, 1]));




// alternative way

// function getMax(arr) {

//     return Math.max(...arr);

//     // or using apply method
//     // return Math.max.apply(null, arr);
// }

// console.log(getMax([10, 14, 8, 12, 20, 1]));




// alternative 

// function getMax(arr) {

//     return arr.reduce((maxNum, curr) => {
//         const max =  maxNum > curr ? maxNum : curr;
//         return max;
//     })
// }

// console.log(getMax([10, 14, 8, 12, 20, 1])); // 20




// alternative 

// function getMax(arr) {

//     arr.sort(function (a, b) {
//         return b - a;
//     });
    
//     return arr[0];
// }

// console.log(getMax([10, 14, 8, 12, 20, 1])); // 20






// get minimum number from an array

function getMin(arr) {

    let minNum = arr[0];
    for (const num of arr) {
        if(num < minNum) {
            minNum = num;
        }
    }

    return minNum;
}

console.log(getMin([10, 14, 8, 12, 20, 1, 11]));







// start from 1.15 minute
// compare array

function compareArray(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }      
    }

    return true;

    // alternative way
    // return arr1.toString() === arr2.toString();
}

console.log(compareArray([1, 3, 5, 7, 9], [1, 3, 5, 7, 9]))
console.log(compareArray([1, 3, 5, 7, 9], [1, 3, 5, 7, 9, 10]))
console.log(compareArray([1, 3, 5, 7, 9], [1, 3, 7, 5, 9]))













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

// function reverse(str){
//     let output = '';
//     for (let i = (str.length - 1); i >= 0; i--) {
//         output += str[i]
//     }
//     return output
// }

// console.log(reverse('apple'))
// console.log(reverse('hello'))



// alternative
// function reverse(str){
//     let output = '';
//     for (const char of str) {
//         output = char + output;
//     }
//     return output;
// }

// console.log(reverse('apple'))
// console.log(reverse('hello'))





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


function reverseInt(num) {
    let reveredNum = num.toString().split('').reverse().join('');
    if(reveredNum.endsWith('-')) {
        reveredNum = '-' + reveredNum.slice(0, reveredNum.length-1)
    }

    return parseInt(reveredNum);
}

console.log(reverseInt(15));   // Output: 51
console.log(reverseInt(500));  // Output: 5
console.log(reverseInt(-15));  // Output: -51
console.log(reverseInt(-90));  // Output: -9





// alternative way

// function reverseInt(num) {

//     const reversed = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
//     return reversed;
// }

// console.log(reverseInt(15));   // Output: 51
// console.log(reverseInt(500));  // Output: 5
// console.log(reverseInt(-15));  // Output: -51
// console.log(reverseInt(-90));  // Output: -9





// alternative way
// function reverseInt(num) {
//     const reversed = parseInt(num.toString().split('').reverse().join(''));
//     return num < 0 ? -reversed : reversed;
// }

// console.log(reverseInt(15));   // Output: 51
// console.log(reverseInt(500));  // Output: 5
// console.log(reverseInt(-15));  // Output: -51
// console.log(reverseInt(-90));  // Output: -9

















