
// Array helper utilities

function printName() {

    console.log(arguments)
    console.log(Array.from(arguments))
}

printName('Kawsar', 'Samim', 'Imran')



console.log(Array.of(5))
console.log(Array.of(1, 2, 3))
console.log(Array.of('foo', 2, 'bar', true));


console.log(Array(5))
console.log(Array(1, 2, 3))

console.log(new Array(5))
console.log(new Array(1, 2, 3))

console.log(Object.assign({previousKey: true} , {hasKey: true}))


