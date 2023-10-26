// Life is easy
const numbers = [1, 3, 5, 7, 9];
console.log(numbers.indexOf(5)); // 2
console.log(numbers.indexOf(10)); // -1

// Life is Boring
function customIndexOf(array, searchElement) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === searchElement) {
      return index;
    }
  }

  return -1;
}

console.log(customIndexOf(numbers, 5)); // 2
console.log(customIndexOf(numbers, 10)); // -1
