// const result = !10 + '10';
// console.log(result)

const profile = {
  name: "Kawsar Ahmed",
  profession: "JavaScript Developer",
  greetings() {
    return `Hi Kawsar!`;
  },
};

console.log(profile.name);
console.log(profile.greetings());

const userArr = ["Saleh", ["Dhaka", ["AIUB"]]];

console.log(typeof String("Kawsar"));

// let x = "John";
// let y = new String("John");

let x = new String("John");
let y = new String("John");

console.log(x == y);
console.log(x === y);
console.log(Object.is(x, y));
console.log(Object.is(NaN, NaN));
