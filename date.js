
// working with date
const date = new Date();

console.log(date)




// formatting date
console.log(typeof date)
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


// getting date 
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.getTime())


// setting date
console.log(date.setFullYear(2020))
console.log(date)



