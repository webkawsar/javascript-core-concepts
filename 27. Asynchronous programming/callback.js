


// callback 
const printOne = (fn) => {
    setTimeout(() => {
        fn(1)
    }, 1000)
}

const printTwo = (fn) => {
    setTimeout(() => {
        fn(2)
    }, 1000)
}

const printThree = (fn) => {
    setTimeout(() => {
        fn(3)
    }, 1000)
}

console.log(printOne((num) => {
    console.log(num)
}))

console.log(printTwo((num) => {
    console.log(num)
}))

console.log(printThree((num) => {
    console.log(num)
}))


// callback chaining - callback hell
printOne((num1) => {
    console.log(num1)

    printTwo((num2) => {
        console.log(num2)

        printThree((num3) => {
            console.log(num3)
        })
    })
})



