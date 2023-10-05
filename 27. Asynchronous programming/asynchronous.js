
// asynchronous 
const printOne = () => {
    setTimeout(() => {
        return 1
    }, 1000)
}

const printTwo = () => {
    setTimeout(() => {
        return 2
    }, 1000)
}

const printThree = () => {
    setTimeout(() => {
        return 3
    }, 1000)
}

console.log(printOne())
console.log(printTwo())
console.log(printThree())






