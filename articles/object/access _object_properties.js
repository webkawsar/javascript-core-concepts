
আজকে আমরা জাভাস্ক্রিপ্টের Object সম্পর্কে একটু জানার চেষ্টা করব। জাভাস্ক্রিপ্টের Complex/Reference ডাটা টাইপের মাঝে Object খুব গুরুত্বপূর্ন। আমি চাচ্ছি আমার ইনফরমেশনগুলো খুব সুন্দর করে সাজিয়ে রাখতে। Object এর মাঝে ডাটাগুলো নাম দিয়ে সাজিয়ে সাজিয়ে রাখতে পারি। Object এর ক্ষেত্রে এই নাম দেয়াকে "Key" বলে। আর যদি কোন ডাটা এই "Key" এর আন্ডারে রাখি, তাহলে সেটাকে "Value" বলে। এভাবে ডাটাগুলো সুন্দর করে "Key: Value" pair করে  সাজিয়ে রাখলে যখন প্রয়োজন তখন খুব সহজে পেতে পারি। এই "Key: Value" pair কে জাভাস্ক্রিপ্টে অবজেক্ট এর properties বলে।

const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    profession: 'Developer',
    skills: ['JS', 'React', 'Redux', 'Vue', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Strapi']
}

এখানে profile হচ্ছে একটা Object। এই Object এর মাঝে "Key: Value" pair করে ডাঁটা রাখা হয়েছে। এখন আমরা দেখব এই Object থেকে কিভাবে ডাটা এক্সেস করতে পারি। 


ডাটা এক্সেস করার বেশ কয়েকটা উপায় আছে তার মাঝে খুব বেশী ব্যবহৃত একটা উপায় হচ্ছে Dot Notation। 
// Dot Notation
console.log(profile.firstName); // Kawsar


ডাটা এক্সেস করার ২য় যে পদ্ধতি সেটা হচ্ছে Bracket Notation। 
// Bracket Notation
console.log(profile['lastName']); // Ahmed


২য় যে পদ্ধতি দেখেছি এভাবে হার্ডকোড করে দিলে সবসময় হয় না। মাঝে মধ্যে প্রয়োজন পড়ে ডাটা ডায়নামিক ভাবে এক্সেস করার, তখন আমরা এ পদ্ধতি ব্যবহার করতে পারি।
// Dynamic Access
const pro = 'profession';
console.log(profile[pro]); // Developer


এটা হচ্ছে আরোও বেশী ব্যবহৃত একটা পদ্ধতি। structure মানে কাঠামো আর Destructure হচ্ছে কাঠামোকে ভেংগে ফেলা। এভাবে কাঠামো ভেংগে একটা অবজেক্ট থেকে প্রয়োজনীয় ডাটা বের করে নিয়ে আসতে পারি। 
// Object Destructuring
const { profession } = profile;
console.log(profession); // Developer


এটা ডাটা এক্সেস করার কোন উপায় না তবে, মাঝে-মাঝে এমন প্রয়োজন হতে পারে আপনি শুধু জানতে চাচ্ছেন এই ডাটা এই অবজেক্ট এর মাঝে আছে কি না। এই হ্যা বা না উপর আপনার কাজ শেষ, তখন এভাবে চেক করতে পারেন। 
// checking key exist or not
console.log('lastName' in profile); // true



