// var, let, const

// const arr = [1, 2, 3, 5]
// arr[1] = 10


// console.log([] === [])



// const arr1 = [1, 2, 3]
// const arr2 = [3, 4, 6]
// what will be the output and why
// console.log(arr1[2] === arr2[0])


//what will be the output and why
// console.log(1 + 2 + '3')

// '33'

//you have given an array
//write a function that sum up the number after multipliplied by 2 resulting greater than 5 and sum is not including the negative resulting number
//can you solve it using array helper methods
// function sumOfNum(arr) {

//     let sum = 0;
//      arr.forEach(num => {
//         const multipliedNum = num * 2;
//         if(multipliedNum > 5) {
//             sum += multipliedNum
//         }
//     })

//     return sum
// }

// console.log(sumOfNum([-1, 10, -5, 3, 9, 2, 12])) // 68


// 10 * 2 = 20 
// 3 * 2 = 6
// 9 * 2 18
// 12 * 2 = 24





//Find common elements between array and count the occurence of those elemet from first array
//can you write it more efficient way

function countCommonElementOccurences(arr1, arr2) {

    let count = {};

    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];

        // console.log(element)
        

        for (let j = 0; j < arr2.length; j++) {
            const element2 = arr2[j];
            console.log(element2)

           
        }
    }

    console.log(arrOneObject)

}

countCommonElementOccurences([1, 3, 5, 7, 9, 12, 3, 5], [3, 5, 6, 9, 12])

/*
    {
        3: 2,
        5: 2
        9:1,
        12:1
    }

*/



