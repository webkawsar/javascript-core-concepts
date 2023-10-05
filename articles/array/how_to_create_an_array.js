



// জাভাস্ক্রিপ্টে একটা Array তৈরী করা যায় তিন ভাবে -- 
// ১. বিল্ট ইন কনস্টাক্টর দিয়ে যেমনঃ  new Array();
// ২. বিল্ট ইন কনস্টাক্টর দিয়ে তবে new কিওয়ার্ড ছাড়া যেমনঃ Array();
// ৩. লিটারেল সিনট্যাক্স দিয়ে যেমনঃ [1, 2, 3]  যেটা স্ট্যান্ডার্ড। 

// built-in array constructor
let newArr = new Array();
console.log(newArr) // []
console.log(newArr.length) // 0

newArr = new Array(1, 3, 5);
console.log(newArr) // [1, 3, 5]


// length প্রোপার্টি দিয়ে চেক করলে length দেখাবে
console.log(newArr.length) // 3


// এভাবে তৈরী করলে কিছু অপ্রত্যাশিত রেজাল্ট পাবেন । এভাবে বিল্ট ইন কনস্টাক্টর দিয়ে Array তৈরী করা হলে সেটা "Empty Slot" তৈরী করে ফেলে। 
newArr = new Array(1, 3, 5);
console.log(newArr) // [1, 3, 5]

newArr = new Array(1, 40, 101);
console.log(newArr) // [1, 40, 101]


// এভাবে শুধুমাত্র একটা ইলিমেন্ট দিলে সে এতটা "Empty Slot" তৈরী করে ফেলে। "Empty Slot" আর "undefined" ভ্যালু এক না
newArr = new Array(3);
console.log(newArr) // [<empty element>, <empty element>, <empty element>]


// length প্রোপার্টি দিয়ে চেক করলে length ঠিকই দেখাবে
console.log(newArr.length) // 3


// কিন্তু ইনডেক্স ধরে এক্সেস করলে undefined পাবেন । 
console.log(newArr[0]) // undefined
console.log(newArr[1]) // undefined
console.log(newArr[2]) // undefined


// পুরাতন কিছু method "Empty Slot" কে স্কিপ করে চলে যায়, তবে নতুন ভার্শনের কিছু কিছু method "undefined" হিসেবে ট্রিট করে ফলে ব্যবহার করা যায়। Array এর মাঝে "Empty Slot" থাকতে পারে তবে, এটা আর "undefined" সেট আছে এমন কোন স্লটের ভ্যালু এক না 
newArr = new Array(3);
console.log(newArr) // [<empty element>, <empty element>, <empty element>]

newArr.forEach(element => {
    console.log('Built in constructor') // console হবে না
})

newArr.map(element => {
    console.log('Built in constructor') // console হবে না
    return true;
})

// "undefined" হিসেবে ট্রিট করছে । 
newArr.find(element => {
    console.log('Treat as an undefined') // console হবে
})

// এমন সিচুয়েশনে পড়তে পারেন যেমন ধরেন আপনি React এ Declarative এপ্রোচে একটা integer নাম্বার এর উপর বেইজ করে লুপ করাবেন। আজকে আমি এমন সিচুয়েশনে পড়ে জাভাস্ক্রিপ্টে বিল্ট ইন কিছু আছে কিনা দেখতে দেখতে এই ফিচারকে কাজে লাগিয়ে সমাধান করলাম
newArr = new Array(3);
newArr = [...newArr];
newArr.map(element => {
    console.log('Built in constructor') // console হবে এবার
})




// এভাবেও Array তৈরী করতে পারবেন । এটা আর প্রথম পদ্ধতি পুরোপুরি সেইম্ভাবে কাজ করে
newArr = Array();
console.log(newArr)
console.log(newArr.length)

// created array with element
newArr = Array(3)
console.log(newArr)
console.log(newArr.length)
console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])

// skip iteration
newArr.forEach(element => {
    console.log('OK')
})
newArr.map(element => {
    console.log('OK')
    return true;
})

// modify 
newArr = [...newArr]
console.log(newArr)
console.log(newArr.length)
console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])
newArr.forEach(element => {
    console.log('working')
})


delete newArr[1]
console.log(newArr)
console.log(newArr.length)
console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])

// empty slot skip on iteration
newArr.forEach(element => {
    console.log('OK')
})


// Array constructor:
const a = Array(5); // [ <5 empty items> ]
console.log(a)
a.find(element => {
    console.log('Empty slot')
})

// Consecutive commas in array literal:
const b = [1, 2, , undefined, 5]; // [ 1, 2, <2 empty items>, 5 ]
console.log(b)



// আর ৩ নাম্বার অয়ে নিয়ে লেখলাম না, এটা সবাই ব্যবহার করে এবং সেইফ জোনে থাকতে হলে এভাবে লেখা স্ট্যান্ডার্ড



