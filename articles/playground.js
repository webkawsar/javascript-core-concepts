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

let profession = "JavaScript Developer";
profession[0] = "E";
console.log(profession); // "JavaScript Developer"

const arr = [NaN];
console.log(arr.includes(NaN)); // true

function sameValueZero(a, b) {
  if (a === b || (Number.isNaN(a) && Number.isNaN(b))) {
    return true;
  }

  return false;
}

console.log(sameValueZero("Hello", "Hello"));
console.log(sameValueZero(NaN, NaN));
console.log(sameValueZero(NaN, "Hello"));
console.log(Number.isNaN("Hello"));
