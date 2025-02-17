// 1️⃣ Spread Operator (...)
// 🔹 Key Use Cases:
// ✔ Copying arrays/objects
// ✔ Merging arrays/objects
// ✔ Passing elements as function arguments


// Here are **examples for each key use case** of the **spread operator (`...`)** in JavaScript:

// ## **✔ 1. Copying Arrays**  
// The spread operator is used to create **shallow copies** of arrays.

// ### ✅ **Example: Copy an Array**

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]
console.log(originalArray ===
 copiedArray); // false (Different memory references)
// > 🔹 **Why use spread?** Avoids modifying the original array.


// ## **✔ 2. Copying Objects**  
// Similarly, we can **copy an object** using spread.

// ### ✅ **Example: Copy an Object**

const person = { name: "Alice", age: 25 };
const copiedPerson = { ...person };

console.log(copiedPerson); // { name: 'Alice', age: 25 }
console.log(person === copiedPerson); // false (Different memory references)

// > 🔹 **Why use spread?** Avoids unintentional mutations of the original object.


// ## **✔ 3. Merging Arrays**  
// Spread can be used to **combine multiple arrays into one**.

// ### ✅ **Example: Merge Two Arrays**

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]


// > 🔹 **Why use spread?** A simple way to merge arrays **without using `.concat()`**.
// ## **✔ 4. Merging Objects**  
// We can also merge objects using spread.

// ### ✅ **Example: Merge Two Objects**

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }

// > 🔹 **Why use spread?** A clean way to merge objects instead of `Object.assign()`.


// ## **✔ 5. Passing Elements as Function Arguments**  
// We can use spread to pass an array as **individual arguments** to a function.

// ### ✅ **Example: Using Spread in a Function**
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// > 🔹 **Why use spread?** It allows passing **array elements** as separate arguments.

// _____________________________________________________________________________
// _____________________________________________________________________________


// const originalArray = [1, 2, 3];
// const [...copiedArray] = originalArray;
// console.log(copiedArray); // [1, 2, 3]
// ✅ Yes, this works and prints [1, 2, 3].
// 🚀 So what’s happening here?

// 🔍 Why Does This Work?
// Even though we usually see the rest operator (...) used with at least one named variable before it (e.g., [first, ...rest] = arr), this syntax is still valid.

// The rest operator gathers all elements from originalArray into copiedArray.
// Since there's no named variable before ...copiedArray, it simply collects all elements into copiedArray, making it equivalent to [...originalArray].
// Effectively, this behaves just like the spread operator (...originalArray)! 🎯


//________________________________________________________________
// _____________________________________________________

// 2️⃣ Rest Operator (...)
// 📌 Used to collect multiple values into a single array or object.

// ✅ Example: Collecting Function Arguments
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
// ✅ Example: Destructuring an Array
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]

// ✅ Example: Destructuring an Object
// const { name, ...details } = { name: "Alice", age: 30, city: "London" };
console.log(name);    // "Alice"
console.log(details); // { age: 30, city: "London" };

// 🔹 Key Use Cases:
// ✔ Collecting function arguments
// ✔ Array/Object destructuring

// ____________________________________________________________________________________

// 🟢 Spread (...) →(Expands elements)
// 🟠 Rest (...) → (Collects elements)

// ________________________________________________________________________

// ✅ **This is a Spread Operator example.** 
const originalArray1 = [1, 2, 3];
const copiedArray1 = [...originalArray1]; // ✅ Correct
console.log(copiedArray1); // [1, 2, 3]

// ### **🔹 Why is This Spread?**
// The **spread operator (`...originalArray`)** **expands** the elements of `originalArray` into a new array.
// This happens inside an **array literal (`[...]`)**, so it creates a **shallow copy**.
// This is the standard way to copy an array in JavaScript.


// ✅ **🔹 Now, the Same Example Using Rest**
// The **rest operator (`...`)** works inside **destructuring** and **gathers** elements:
const originalArray2 = [1, 2, 3];
const [...copiedArray2] = originalArray2; // ✅ Rest Operator
console.log(copiedArray2); // [1, 2, 3]


// ### **🔍 Key Difference Between Rest and Spread**
// | **Operator** | **Use Case** | **Syntax** | **What It Does?** |
// |-------------|-------------|------------|--------------------|
// | **Spread (`...`)** | Expands elements | `const copy = [...arr];` | Creates a new copy of an array |
// | **Rest (`...`)** | Collects remaining elements | `const [...rest] = arr;` | Gathers elements into a variable |


// ### **🚀 Conclusion**
// ✔ **Spread (`...originalArray`) is used for copying an array.**  
// ✔ **Rest (`...[variable] = array`) is used in destructuring to collect elements.**  