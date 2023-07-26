

// helps to avoid code repetition


function greet(msg="Hi", name="Kawsar") {
    return `${msg} ${name}`;
}


console.log(greet(undefined, 'Imran'))



// loop inside function
const names = ['Kawsar', 'Ahmed', 'Imran'];
function printNames(names) {
    let string = '';
    for (const name of names) {
        string += name + ' '
    }
    return string;
}
console.log(printNames(names))


