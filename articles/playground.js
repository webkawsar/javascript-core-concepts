let teams = ['Gias', 'Samim', 'Mustakim', 'Ruhi'];
let profile = {
    firsName: 'Kawsar',
    lastName: 'Ahmed',
    profession: 'Developer'
}

// array checking
if(Array.isArray(teams)) {
    console.log('এটা একটা Array')
} else {
    console.log('আমি জানিইইইইইই না!')
}

// object checking
if(typeof profile === 'object' && profile !== null && !Array.isArray(profile)) {
    console.log('এটা একটা Object')
} else {
    console.log('আমি জানিইইইইইই না!')
}
