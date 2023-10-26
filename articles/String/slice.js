/****************************** slice() ***************/
// JavaScript string are immutable
const name = "Kawsar";
console.log(name[0]);
name[0] = "J";
console.log(name);

// slice(start, end) => slice এর প্রথম প্যারামিটার হবে যেখান থেকে slice করা শুরু হবে সেটা । আর ২য় প্যারামিটার হবে যেখানে গিয়ে শেষ হবে তার আগ পর্যন্ত slice হবে। প্যারামিটার গুলো রিসিভ করে এরের ইন্ডেক্স নাম্বার তবে নেগেটিভ ভ্যালুর ক্রেত্রে ইন্ডেক্স নাম্বার ফলো করে না।

// প্যারামিটার ২টা অপশনাল
// start =>
// end=> end not included . Default is last element
