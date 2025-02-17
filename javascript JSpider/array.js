//! **Arrays:**

//!   Array: 
//?         It is a huge block of memory which can store both homogeneous and heterogeneous type of data.

    // homogeneous: same kind of data
    // heterogeneous: different kind of data.


// Q) In how many ways we can create an array?

/* The above code is providing information about three different ways to create arrays in JavaScript:
1. Using array literals
2. Using the Array.of() method
3. Using the new Array() constructor */
//! Three ways:
//? 1. Array literals
//? 2. Array.of()
//? 3. new Array()

// -------------------
//! **1. Array literals:
let array = [10,20,30,40,50,60,70,80,90,100];
// console.log(array); //Output: [10, 20, 30, 40,  50, 60, 70, 80, 90, 100 ]

let array1 = [10,"hii",null,undefined,BigInt];
// console.log(array1); //Output: [ 10, 'hii', null, undefined, [Function: BigInt] ]
// console.log(array1[2]); // Output: null
// console.log(array1[3]); // Output: undefined
// console.log(array1[4]); // Output: [Function: BigInt]
// ----------------------------------------------------------------

//! **2. Array.of():
let array2 = Array.of(10,20,"hii");
// console.log(array2); //Output: [ 10, 20, 'hii' ]
// ----------------------------------------------------------------

//! **3. new Array():
let array3 = new Array(100,200);
// console.log(array3); //Output: [ 100, 200 ]

// ---------------------------------------------------------------------------------------------------------------------

//! **Note:If a single numeric (integer) value is passed, it is taken as the length of the array.
let arrayq = new Array(5);
// console.log(arrayq); // Output: [ , , , , ]
// console.log(arrayq.length); // Output: 5

// **If you want to create an array with a single numeric element, you should use array literals or Array.of() instead:
let arrayl = [5]; //array literals
// console.log(arrayl); // Output: [5]

let arrayof = Array.of(5); //Array.of()
// console.log(arrayof); // Output: [5]

// ---------------------------------------------------------------------------------------------------------------------

//! Q) How to fetch array elements?
let array4 = [10,20,30,40,50];
// console.log(array4[3]); // Output: 40 

// --------------------------------------------------

//! Q) How to update array elements?
// array4[3] = "hii";    //example1
// console.log(array4); // Output: [10, 20, 30, "hii", 50]

array4[2] = 100;     //example1
// console.log(array4); // Output: [10, 20, 100, "hii", 50]

// ________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________

// **Array Methods**:

//!01) Push() 
//? Appends new elements to the end of an array & returns the new length of an array.
//? The push() method changes the length of the array.
//? The push() method returns the new length.
//? The push() method will affect the original array.

// EXAMPLE 01:
let arraypu = [10, 20, 30, 40];
// console.log(arraypu.push(50)); // Output: 5
// console.log(arraypu); // Output: [10, 20, 30, 40, 50]

// EXAMPLE 01:
let arraypuu = [10, 20, 30, 40, 50];
let result = arraypuu.push("hi", "hey");
// console.log(result); // This will output the new length of the array
// console.log(arraypuu); // This will output the modified array

// console.log(arraypuu.push(50)); // Output: 5
// console.log(arraypuu); // Output: [10, 20, 30, 40, 50]

// _________________________________________________________-

//! 02) Pop():
//? Removes the last element from an array.
//? The pop() method removes the last element from an array and returns it. If the array is empty,
//? pop() returns undefined and the array is not modified.
//? The pop() method will affect the original array.

// EXAMPLE 01:
let arraypop = [10, 20, 30, 40, 50, 60, 70];
let result1 = arraypop.pop("hlo","hey"); //70 is the last element and will be removed.
// console.log(result1); // Output: 50
// console.log(arraypop);  // Output: [10, 20, 30, 40]

// _______________________________________________________________________

//! **unshift()**
//? The unshift() method inserts new elements at the start of the array and returns the new length of the array.
//? The unshift() method will affect the original array.

// EXAMPLE 01:
let arrayunshift = [10, 20, 30, 40, 50];
let resultunshift = array.unshift("Diyo"); //If you want to keep track of the removed element, you should assign it to a new variable(In this case it is "resultunshift").
// console.log(resultunshift); // Output: 6
// console.log(arrayunshift);  // Output: ["Diyo", 10, 20, 30, 40, 50]

// ___________________________________________________________________________

//! **shift()**
//? The shift() method removes the element from the start of the array and returns that removed element.
//? The shift() method will affect the original array.

// EXAMPLE 01:
let arrayshift = [10, 20, 30, 40, 50];
let resultshift = array.shift(); //removes the first element (10)                  //or arrayshift.shift();--> by using this we can't get value 10 which s deleted, this is why assign a new variable to the array.
// console.log(resultshift); // Output: 10
// console.log(arrayshift);  // Output: [20, 30, 40, 50]

// ___________________________________________________________________________

//! **slice()**
//? The slice() method selects elements from an array and returns them as a new array.
//? The slice() method selects elements from the start index up to, but not including, the end index.
//? The slice() method does not modify the original array.

// EXAMPLE 01:
let arrayslice = [10, 20, 30, 40, 50, 60, 70];
let array2slice = arrayslice.slice(1, 5);                  //start index up to, not including, the end index.
// console.log(array2slice); // Output: [20, 30, 40, 50]
// console.log(arrayslice);  // Output: [10, 20, 30, 40, 50, 60, 70]

// ___________________________________________________________________________

//! **splice()**
//? The splice() method removes elements from an array at the specified position and returns them in a new array.
//? The splice() method can be used to add or remove elements.

// EXAMPLE 01:
let arraysplice = [10, 20, 30, 40, 50, 60, 70];
arraysplice.splice(2, 3, 100, 200, "hi", "prajwal");
// let array2splice = arraysplice.splice(2, 3, 100, 200, "hi", "prajwal"); //The splice method removes 3 elements starting from index 2, which are [30, 40, 50].It then inserts 100 and 200 at index 2.
// console.log(array2splice); // Output: [30, 40, 50]  //returned removed elements
// console.log(arraysplice);  // Output: [10, 20, 100, 200, 60, 70] //returns updated array

// ___________________________________________________________________________
//! **sort**
//? The sort() method sorts the elements of an array
// ?The sort() method sorts the elements as strings in alphabetical and ascending order
// ?The sort() method overwrites the original array
let arrayso = ['banana', 'apple', 'mango', 'pineapple'];
// console.log(arrayso);
// arrayso.sort();
// console.log(arrayso);//['apple', 'banana', 'mango', 'pineapple'


 //! flat()
 //? flat() is used to convert multi dimension array into single dimension array
 //?flat() will not effect the original array

let arr =[[[[[[[[[[[1]]]]]]]]]]]
// console.log(arr);

let resultflat = arr.flat(9);
// console.log(resultflat);
// console.log(array);


//!reverse
// ?The reverse() method reverses the order of the elements in an arra
// ?The reverse() method overwrites the original array

// let arrayreverse [10, 20, 30, 40, 50];
// console.log(arrayreverse);
// arrayreverse.reverse();
// console.log(arrayreverse);

// let demo "UDNUKUM"
// console.log(demo.split("").reverse(). join("")


// ! find()
// ?The find() method returns the value of the first element that passes a test
// ?The find() method executes a function for each array element
// ?The find() method returns undefined if no elements are found
// ?The find() method does not execute the function for empty elements
// ?The find() method does not change the original array

// let arrayfind = [10, 20, 30, 40, 50];
// console.log(arrayfind);
// let resultfind = array.find((f)=>{ 
// return f>28
// });



// !I findIndex(/
// ?The findIndex() method returns the index (position) of the first element that passes a test.
// ?The findIndex() method executes a function for each array element.
// ?The findIndex() method returns 1 if no match is found.
// ?The findIndex() method does not execute the function for empty array element.
// ?The findIndex() method does not change the original array.

// let arrayfindIndex = [10, 20, 30, 40, 50];
// let resultfindIndex = arrayfindIndex.findIndex((f)=>{ 
// return f>20;
// });
// console.log(resultfindIndex);

// ___________________________________________________________________________

//!           ****************Map()******************
//? Map() creates a new array from calling a function for every array element.
//? Map() does not execute the function for empty elements.
//? Map() does not change the original array.

let arraym = [10, 20, 30, 40, 50];
// console.log(arraym);//this line prints original array

arraym.map((element, index) => {
    // console.log(element, index);
    // console.log(arraym);//this line prints original array 5 times
}); 
//output:
// 10 0
// 20 1
// 30 2
// 40 3
// 50 4


//! **Filter()**
//? The filter() method creates a new array filled with elements that pass a test provided by a function.
//? The filter() method does not execute the function for empty array elements.
//? The filter() method does not change the original array.

let arrayn = [10, 20, 30, 40, 50]
// console.log(arrayn);//this line prints original array

let newArray = array.filter((element) => {
    return element > 10
});
// console.log(newArray);// returns all those elements which are greater than  10.
// output:[ 20, 30, 40,  50, 60, 70, 80, 90, 100]
// ___________________________________________________

//! **1. `reduce()`**
//? higher order function that reduces to an single value
let arrayre = [10, 20, 30, 40, 50]
let resultre = arrayre.reduce((acc, val) => {
    return acc + val
})
// console.log(resultre); // 150

let resultrf = arrayre.reduce((acc, val) => {
    return acc - val
})
// console.log(resultrf); // -130

let resultrg = arrayre.reduce((acc, val) => {
    return acc + val
}, 10)
// console.log(resultrg); // 160
// _______________________________________________________

//! **2. `sort()`**
// The `sort()` method sorts the elements of an array.
// The `sort()` method sorts the elements of an array in alphabetical and ascending order.
//! The `sort()` method overwrites the original array.

let arraysor = [100, 20, 50, 40, 30];
let resultso = arraysor.sort((a, b)=>{
    return a-b; //output: [ 20, 30, 40, 50, 100 ]
    // return b-a;//output: [ 100, 50, 40, 30, 20 ]
})
// console.log(resultso);
//? Since the comparison function returns b - a, the array will be sorted in descending order. If you wanted ascending order, you would use a - b instead (which is commented out in your code).
//? Comparison Function: The comparison function (a, b) => { return b-a; } is used to compare two elements a and b. In this function:
//? If the result of b - a is positive, it means b is greater than a, and b should come before a in the sorted array.
//? If the result of b - a is negative, it means a is greater than b, and a should come before b in the sorted array.
//? If the result of b - a is zero, it means a and b are equal, and their order doesn't change.
// ___________________________________________________

//! ** FOR IN AND FOR OF**
let arrayfor = [10, 20, 30, 40, 50];

// 1) for-in-loop  // returns the index value of the keys
for (let keyjj in arrayfor) {
    // console.log(keyjj);
}

// 2) for-of-loop
for (let value of arrayfor) {
    // console.log(value); //will return the value fo the keys of an array.
}

// 3) for-of-loop with keys()
for (let key of arrayfor.keys()) {
    // console.log(key); // will returns the index of keys 
}

// 4) for-of-loop with values()
for (let value of arrayfor.values()) {
    // console.log(value); // will return the values.
}

// 5) for-of loop with keys()
for (let keys of arrayfor.entries()) { // it will return both keys and value(index position and value);
    // console.log(keys);
}
// ___________________________________________________

// Destructuring in JavaScript
// Destructuring Assignment is a javascript expression that allows to unpack of  values from arrays.

let arrayde = [10, 20, 30, 40, 50, 60, 70, 80];
let [a, b, c, d, e, f, g, h] = arrayde;
// console.log(a); //output:10
// console.log(b); //output:20
// console.log(c); //output:30
// console.log(d); //output:40
// console.log(e); //output:50
// console.log(f); //output:60
// console.log(g); //output:70
// console.log(h); //output:80
// ___________________________________________________

//! **Rest Operator:**
// In order to assign some array elements to variables and rest of the array elements to only a single variable, use the Rest Operator `...`

let arrayrest = [10, 20, 30, 40, 50];

let [x, y, ...z] = arrayrest;

// console.log(a); // 10
// console.log(y); // 20
// console.log(z); // [30, 40, 50]

//? The rest operator `...` allows you to capture the remaining elements of an array into a single variable. In this example, `a` is assigned the first element, `b` the second, and `c` takes the rest of the elements in the array. Pretty handy for managing arrays.
// ___________________________________________________

// let [a,...b,c]; // uncaught syntax error; 
//  element must be last element
//todo the rest operator does not apply to strings or objects in the same way.

// _____________________________________________________

//! *Spread Operator***
// The JavaScript spread opertor ... is used to expand spread out elements of an iterable, such as an array, String, or Object.
let arraysp = [10, 20, 30, 40, 50];
let newArr = [...arraysp, 60, 70];
// console.log(newArr);    // Output: [10, 20, 30, 40, 50, 60, 70]

let arrayspp = [10, 20, 30, 40, 50]; //rest
let [m, ...n] = arrayspp;            //rest
// console.log(m);    // Output: 10
// console.log(n);    // Output: [20, 30, 40, 50]

//todo we can INSERT or combine arrays the beginning and both begin and end together also.
let p = [10, 20];
let s = [888, 2000];
let so = [899, 2066];
let q = [...s, 30, ...so, 40, ...p];
// console.log(q);    // Output: [ 888, 2000, 30, 899, 2066, 40, 10,   20];

//! example: with string
//? You can spread the characters of a string into an array.
//? The string "hello" is spread into individual characters and stored in the array characters.
let string = "hello";
let characters = [...string];
// console.log(characters);    // Output: ["h", "e", "l", "l", "o"]

//! example of Objects:
//? You can spread the properties of one object into another object.
let obj = {x: 1, y: 2, z: 3};
let newObj = {...obj, a: 4};
// console.log(newObj);    // Output: {x: 1, y: 2, z: 3, a: 4}

// ___________________________________________________
// ___________________________________________________
// ___________________________________________________
// ___________________________________________________