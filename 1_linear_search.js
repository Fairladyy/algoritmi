const array = [1, 4, 3, 6, 7, 3, 5, 10, 2, 9, 8, 11];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 9));
console.log("count = " + count);
