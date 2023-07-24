


const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    profession: 'Web Developer',
}

// Dot Notation
console.log(profile.profession); // Web Developer

// Bracket Notation
console.log(profile['profession']); // Web Developer

// Dynamic Access
const pro = 'profession';
console.log(profile[pro]); // Web Developer

// Object Destructuring
const { profession } = profile;
console.log(profession); // Web Developer

// checking key 
console.log('firstName' in profile);

