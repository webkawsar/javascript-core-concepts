
// array destructuring
const profile = ['Kawsar', 27, 'Web Developer', 'Aggro Farm'];

const [name = 'Unknown', , profession, hobby] = profile;
console.log(name)
// console.log(age)
console.log(profession)
console.log(hobby)


// object destructuring





// rest

// spread

// rest in function
function printName(...rest) {
    // console.log(kawsar)
    console.log(rest)
    // return `${kawsar} ${delowar} ${mohammad}`
}

// eivabe coma separated kore dile rest er value array hoye jabe
// console.log(printName('Kawsar',  'Delowar', 'Mohammad'))

const names = ['Kawsar',  'Delowar', 'Mohammad'];
// console.log(printName(names))


// eivabe object pass korle ar parameter  rest diye dorle rest er value array er vitore object hoye jabe
const myProfileObj = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    email: 'kawsarahmed.dev@gmail.com',
    profession: 'Web Developer'
}
console.log(printName(myProfileObj))
