
// postmortem of this


// scenario of this
const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 27,
    profession: 'Developer',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const { firstName, lastName, age: myAge = {}, fullName } = profile;
console.log(firstName)
console.log(lastName)
console.log(myAge)
console.log(fullName())
console.log(profile.fullName())


// rules
// Global Context
// global context e this window ke indicate kore

// Functional Context
// plain way te function call korle, this window ke indicate korbe
// lej dore call korle, this object ke indicate korbe

// inside method this will represent object
// in a constructor function this will {} empty object
// otherwise this always indicate window




// inside method this will represent object
const object10 = {
    name: 'Sadia',
    age: 25,
    profession: 'Jani na',
    // showInfo: function() {
    //     return this.name + '-' + this.age + '-' + this.profession;
    // },

    showInfo() {
        return this.name + '-' + this.age + '-' + this.profession;
    },

    // arrow function er nijjosso kuno this binding nei
    // showInfo: () => {
    //     return this.name + '-' + this.age + '-' + this.profession;
    // }

}
console.log(object10.showInfo());


// in a constructor function this will {} empty object
function Product(name, price) {
    
    this.name = name;
    this.price = price;
    this.description = function() {
        return this.name + ' - $' + this.price;
    }

}
const product1 = new Product('School Bag', 120);
console.log(product1);
console.log(product1.description());


// otherwise always indicate window
function sayHello() {
    console.log('Hi, Guys!');

    // Here this represent global window
    console.log(this);
}
sayHello();







// global execution context
// functional execution context


// ১। গ্লোবাল রুলস
// ২। অবজেক্ট রুলস
// ৩। স্পষ্ট রুলস
// ৪। newকীওয়ার্ড রুলস


// Global rules
function sayHi(){

    console.log('Hi');
    console.log(this, 'this inside in function');
}
sayHi();


// Object / method rules
const object = {
    name: 'Kawsar Ahmed',
    age: 25,
    sayHi: function() {

        console.log(this === object); // true
        console.log('Hi');
        console.log(this, 'this inside in method'); // this refer object

        return function() {

            console.log(this === object); // false
            console.log('Anonymous function');
            console.log(this, 'this inside in another function'); // this refer global object
        }
    }
}
object.sayHi()();

// const test = object.sayHi;
// test()()


// solve top problem by using arrow function lexical this keyword
const object1 = {
    name: 'Kawsar Ahmed',
    age: 25,
    sayHi: function() {

        console.log(this === object1); // true
        console.log('Hi');
        console.log(this, 'this inside in method'); // this refer to object1

        return () => {

            console.log(this === object1);  // true
            console.log(this, 'this inside in another function'); // this refer to object1 
        }
    }
}
object1.sayHi()();



const myObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    timer: function() {
        console.log('My name is ' + this.name); // My name is Zonayed Ahmed

       setTimeout(function() {

            console.log('This denote to global object');
            console.log('My name is ' + this.name); // My name is undefined

       }, 5000)
     }
}
// myObj.timer();



const text1 = {
    age: 25
}

const text2 = {
    age: 25
}
console.log(text1 === text2); // false
console.log(text1 === text1);


const myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    msg: function() {

        console.log(this === myCustomObj); // true
        console.log('My name is '+ this.name);
    } 
 }
 myCustomObj.msg();


 // স্পষ্ট রুলস
const myCustomObj2 = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Ahmed Zonayed',

       msg: function() {

            console.log(this);
            console.log('My name is: ' + this.name);
       }
    }
}

//  myCustomObj2.anotherObj.msg() // this refers here anotherObj
// bind / call / apply rules
myCustomObj2.anotherObj.msg.call(myCustomObj2); // this refers here myCustomObj2



// newকীওয়ার্ড রুলস
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
 
const obj = {sex: 'male'}
// console.log(Person.call(obj, 'Imran Ahmed', 25, 'Bekar'));

const kawsar = new Person('Kawsar Ahmed', 25, 'Developer');
const shamim = new Person('Shamim Mohammad', 25, 'Pilot');

console.log(kawsar);
console.log(shamim);



const Teacher = function(name, age, job, subject) {
    //eta buji nai
    Person.call(this, name, age, job);
    this.subject = subject;
}

const kamaljeet = new Teacher('Kamaljeet Saini', 53, 'Teacher', 'CSE');
console.log(kamaljeet);


const GeneralPeople = function(name, age, job) { 
    this.name = name;
    this.age = age;
    this.job = job;
}

const Athlete = function(name, age, job, prize) {
    GeneralPeople.call(this);
    this.prize = 100;
}

const pAthlete = new Athlete('Sahjahan', 25, 'probashi', 10)
console.log(pAthlete);



