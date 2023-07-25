

// JavaScript Bind, Call, Apply

// rules
// implicit this binding (javascript define this)
// explicit this binding

// Global Context
// global context e this window ke indicate kore

// Functional Context
// plain way te function call korle, this window ke indicate korbe
// lej dore call korle, this object ke indicate korbe

// inside method this will represent object
// in a constructor function this will {} empty object
// otherwise this always indicate window





// Zonayed vai rules
// ১। গ্লোবাল রুলস
// ২। অবজেক্ট রুলস
// ৩। স্পষ্ট রুলস
// ৪। new কীওয়ার্ড রুলস


// স্পষ্ট রুলস examples
// examples 1
function profile(age, profession) {

    console.log(`Hi ${this}, You are ${age} and You are a ${profession}`);
}

// profile.call('Kawsar', 26, 'Web Developer');
profile.apply('Kawsar', [26, 'Web Developer']);


// examples 2
function profile2(laptop) {

    this.laptop = laptop;
    console.log(this);
    
}

// Here, the value of 'this' will be object
// const profileBindingValue = profile2.bind({});
// profileBindingValue.call(undefined, 'Lenovo IdeaPad 310');

// profile2.call({name: 'Kawsar', age: 26, profession: 'Web Developer'}, 'Lenovo IdeaPad 310');
profile2.apply({name: 'Kawsar', age: 26, profession: 'Web Developer'}, ['Lenovo IdeaPad 310']);



// examples 3
function sayHi(num1, num2) {

    // Here this will represent string 'Kawsar' (constructor new String('Kawsar'))
    // console.log(this);

    console.log(`Hi, ${this}`);
    console.log(num1)
    console.log(num2)
}

// normal function call
// sayHi();

// define this value in function
const bindingValue = sayHi.bind('Kawsar');
bindingValue(1, 2);
// bindingValue([1, 2]);

// bindingValue.call(undefined, [1, 2]);
// bindingValue.call(undefined, 1, 2);

// sayHi.call('Kawsar', 1, 2);
// sayHi.apply('Kawsar', [1, 2]);


// examples 4
const karim = {
    name: 'Karim Rahman',
    dob: 1996,
    age: function(currentYear, msg) {

        console.log(`${msg} ${this.name}`);
       console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
    }
}

const rahim = {
    name: 'Abdur Rahim',
    dob: 1986
}

// karim.age(2020, 'Hello');

// karim.age.call(rahim, 2022, 'Hi');
// karim.age.apply(rahim, [2044, 'Hi']);


// const rahimAge = karim.age.bind(rahim);
// rahimAge(2022, 'Hi Guys')


// bind method e argument pass kora jay or pore o argument pass kora jay
// const rahimAge = karim.age.bind(rahim, 2022, "Hi Guys");
// rahimAge()

const rahimAge = karim.age.bind(rahim, 2022);
rahimAge("Hi Guys")



