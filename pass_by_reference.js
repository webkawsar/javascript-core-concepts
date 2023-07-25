


// Pass by reference
let obj1 = { value: 1 };
function passedByReference(obj) {
    
    console.log(obj);
    obj.value = 100;

    console.log(obj);
}

passedByReference(obj1);
console.log(obj1);



