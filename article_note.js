// for in, for loop

// let modifiedStr = '';
// for (let i = 0; i < str.length; i++) {

//     const element = str[i];
//     modifiedStr = element + modifiedStr;
// }

// str[i]; eta array na hoyew evabe access kra gelo kivabe?
// str.split('').reverse().join('');

// let text = "How are you doing today?";
// let myArray = text.split();
// console.log(myArray)

// slice(), endsWith(), replace(), splice(); join(), sort()

// problem buji nai
// 53, 560, 209, 59, 28, 392 week 4.2 incomplete // week 5.2 radix sort incomplete
// 15

const name = "Kawsar Ahmed";
console.log(name); // "Kawsar Ahmed"
console.log(name.length); // 12
console.log(name.toUpperCase());

const profile = {
  name: "Kawsar",
  isDeveloper: true,
  sayHi() {
    return "Hi! " + this.name;
  },
};

console.log(profile.name); // 'Kawsar'
console.log(profile.sayHi()); // "Hi! Kawsar"
