

// pass by value

let a = 10;
function passedByValue(num) {

    console.log(num);
    num = 20;
    
    console.log(num);
}

passedByValue(a)
console.log(a);


