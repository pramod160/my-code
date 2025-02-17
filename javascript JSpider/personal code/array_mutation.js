// ### Methods That Mutate and Return Specific Values:

// #### `push()`
// **Returns:** New length of the array.

let arr1 = [10, 20, 30];
let newLength1 = arr1.push("hi");
console.log(arr1); // [10, 20, 30, "hi"]
console.log(newLength1); // 4
// ___________________________________________________

// #### `pop()`
// **Returns:** The removed element.

let arr2 = [10, 20, 30];
let removedElement1 = arr2.pop();
console.log(arr2); // [10, 20]
console.log(removedElement1); // 30
// ___________________________________________________

// #### `unshift()`
// **Returns:** New length of the array.

let arr3 = [10, 20, 30];
let newLength2 = arr3.unshift("hi");
console.log(arr3); // ["hi", 10, 20, 30]
console.log(newLength2); // 4
// ___________________________________________________

// #### `shift()`
// **Returns:** The removed element.

let arr4 = [10, 20, 30];
let removedElement2 = arr4.shift();
console.log(arr4); // [20, 30]
console.log(removedElement2); // 10
// ___________________________________________________

// #### `splice()`
// **Returns:** An array of removed elements.

let arr5 = [10, 20, 30, 40];
let removedElements = arr5.splice(1, 2);
console.log(arr5); // [10, 40]
console.log(removedElements); // [20, 30]
// ___________________________________________________

//! ### Methods That Mutate and Return the Modified Array:

// #### `sort()`

let arr6 = [30, 10, 20];
let sortedArr = arr6.sort();
console.log(arr6); // [10, 20, 30]
console.log(sortedArr); // [10, 20, 30]
// ___________________________________________________

// #### `reverse()`

let arr7 = [10, 20, 30];
let reversedArr = arr7.reverse();
console.log(arr7); // [30, 20, 10]
console.log(reversedArr); // [30, 20, 10]
// ___________________________________________________

// `fill()`

let arr8 = [10, 20, 30];
let filledArr = arr8.fill(0);
console.log(arr8); // [0, 0, 0]
console.log(filledArr); // [0, 0, 0]
// ___________________________________________________

// #### `copyWithin()`

let arr9 = [10, 20, 30, 40];
let copiedArr = arr9.copyWithin(0, 2);
console.log(arr9); // [30, 40, 30, 40]
console.log(copiedArr); // [30, 40, 30, 40]
// ___________________________________________________

//! ### Methods That Do Not Mutate the Original Array:

// #### `flat()`
// **Returns:** A new, flattened array.

let arr10 = [1, [2, [3, 4]], 5];
let flatArray = arr10.flat(2);
console.log(arr10); // [1, [2, [3, 4]], 5]
console.log(flatArray); // [1, 2, 3, 4, 5]
// ___________________________________________________

// #### `slice()`
// **Returns:** A new array containing the sliced elements.

let arr11 = [10, 20, 30, 40];
let newArr = arr11.slice(1, 3);
console.log(arr11); // [10, 20, 30, 40]
console.log(newArr); // [20, 30]
// ___________________________________________________

// #### `find()`
// **Returns:** The value of the first matching element (or `undefined` if none found).

let arr12 = [10, 20, 30];
let found = arr12.find(element => element > 15);
console.log(arr12); // [10, 20, 30]
console.log(found); // 20
// ___________________________________________________

// #### `findIndex()`
// **Returns:** The index of the first matching element (or `-1` if none found).

let arr13 = [10, 20, 30];
let foundIndex = arr13.findIndex(element => element > 15);
console.log(arr13); // [10, 20, 30]
console.log(foundIndex); // 1

// ___________________________________________________
