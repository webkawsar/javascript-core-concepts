

const productOne = {
    name: 'Friezean Cow',
    price: 200000,
    children: true
}
console.log(productOne);



const productTwo = {
    name: 'Sahiwal Cow',
    price: 200000,
    children: true
}
console.log(productTwo);




// factory function
function cow(name, price, children) {
    return {
        name,
        price,
        children
    }
}

console.log(cow('Friezean Cow', 400000, true))
console.log(cow('Sahiwal Cow',2500000, true))



















