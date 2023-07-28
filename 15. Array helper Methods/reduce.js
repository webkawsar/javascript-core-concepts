

// reduce
const friends = [
    {
        name: 'Kawsar',
        books: ['Rahe Belayat', 'Hadiser name Jaliyati', 'Kobira Gunah']
    },
    {
        name: 'Samim',
        books: ['Paradoxical Sajid', 'Tel Habib', 'Guyends Series']
    },
    {
        name: 'Imran',
        books: ['Paradoxical Sajid 2', 'Ki korle ki hoy', 'Omuker Boyan']
    }
];

const allBooks = friends.reduce((acc, cur) =>  acc.concat(cur.books), [])
console.log(allBooks)

