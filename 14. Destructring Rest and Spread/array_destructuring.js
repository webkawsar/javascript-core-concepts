
// array destructuring
const profile = ['Kawsar', 27, 'Web Developer', 'Aggro Farm'];

const [name = 'Unknown', , profession, hobby] = profile;
console.log(name)
// console.log(age)
console.log(profession)
console.log(hobby)

const users = [
    {
        firstName: 'Kawsar',
        lastName: 'Ahmed',
        userName: 'webKawsar',
        property: {
            aggro: true,
            goat: false,
            counts: [
                {
                    gavi: 1,
                    bachur: 1,
                    bokna: 1,
                    total: 3
                }
            ]
        }
    },
    {
        firstName: 'Imran',
        lastName: 'Ahmed',
        userName: 'imran'
    },
    {
        firstName: 'Samim',
        lastName: 'Mohammad',
        userName: 'samim'
    }

]

// const [firstUser, secondUser, lastUser] = users;
// const [firstUser, ...rest] = users;
const [{ userName, property: { aggro, counts: [{ gavi }] } }, ...rest] = users;
// console.log(firstUser)
// console.log(secondUser)
// console.log(lastUser)
// console.log(rest)
console.log(userName)
console.log(aggro)
// console.log(counts)
// console.log(one)
console.log(gavi)



// object destructuring
let cagingIt = {
    foo: {
      bar: 'Nick Cage',
      counts: [1, 2, 3]
    }
  };

let { foo: {counts: [ ct1, ct2, ct3 ]} } = cagingIt;
console.log(ct2);




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



// my research

// https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
// https://dmitripavlutin.com/javascript-object-destructuring/
// https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/

