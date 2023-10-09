

// const result = !10 + '10';
// console.log(result)




const myObject = {
    value: 42,
    getValue: function () {
        return this.value;
    }
}

const getValue = myObject.getValue;
console.log(getValue())


