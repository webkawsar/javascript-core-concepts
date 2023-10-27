

mutable => মানে পরিবর্তনযোগ্য  আর immutable মানে আপরিবর্তনযোগ্য 

জাভাস্ক্রিপ্টে Primitive Data টাইপ এর ভ্যালু immutable মানে আপরিবর্তনযোগ্য । এই ডাটা টাইপের কোন ভ্যালু একবার কোন ভ্যারিয়েবল এ ডিক্লেয়ার করলে পরিবর্তীতে দুইয়ার যত কাজ ই করেন না কেন এই ভ্যারিয়েবল নিয়ে এর ভ্যালু কিন্তু পরিবর্তন হবে না যেমনঃ 

let profession = "JavaScript Developer";
profession[0] = "E";
console.log(profession) // "JavaScript Developer"

আমরা তো যেকোন স্ট্রিং এর ভ্যালু এভাবে `[index]` ইনডেক্স নাম্বার ধরে এক্সেস করতেই পারি তাই না? আমি যদি এক্সেস করতে পারি তাহলে এভাবে ধরে এই ০ নাম্বার ইনডেক্স এর ভ্যালু পরিবর্তন হয়ে যাওয়ার কথা, কিন্তু হবে না। কেন হবে না? 

কারন জাভাস্ক্রিপ্টে ভ্যারিয়েবল এর মাঝে Primitive Data Type এর  actual value স্টোর হয় কোন রেফারেন্স স্টোর হয় না। actual value স্টোর হয় বলেই এটাকে পরিবর্তন করা যায় না 

> primitive data types are immutable, meaning their values cannot be changed once they are created. 
They are directly stored in memory, and when you work with them, you operate on the actual value itself, not a reference to an object.


আর `Reference/Complex` ডাটা টাইপের ক্ষেত্রে সরাসরি কোন ডাটাকে স্টোর না করে বরং মেমরীতে একটি জায়গা নির্ধারন করে **ঐ জায়গার রেফারেন্স স্টোর করে** ভ্যারিয়েবল এর মাঝে। ফলে এই ধরনের ডাটাকে পরিবর্তন করা যায় যেমনঃ 

let profile = {
    name: "Kawsar Ahmed"
}
profile.profession = "JavaScript Developer";
console.log(profile) // { name: "Kawsar Ahmed", profession: "JavaScript Developer" }


আরেকটা এক্সাম্পল দেখে নেই--- 

const friends = ['Kawsar', 'Imran', 'Samim'];
friends.push('Ajel');
console.log(friends) // ['Kawsar', 'Imran', 'Samim', 'Ajel']



> Mutability refers to data types that can be accessed and changed after they've been created and stored in memory. Immutability, on the other hand, refers to data types that you can't change after creating them – but that you can still access in the memory.




/**************************** Reference **************************/
https://developer.mozilla.org/en-US/docs/Glossary/Mutable

https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/#:~:text=Mutability%20refers%20to%20data%20types,still%20access%20in%20the%20memory.
