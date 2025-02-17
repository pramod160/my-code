// In JavaScript, operators are used to perform operations on variables and values.


// ### 1. **Arithmetic Operators**  
// Used for basic mathematical calculations.  
// **Examples**:
console.log("Arithmetic Operators");
let a = 10, b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.333...
console.log(a % b);  // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 1000 (10^3)


// ### 2. **Comparison Operators**  
// Used to compare two values, returning a boolean (`true` or `false`).  
// **Examples**:

console.log("Comparison Operators");
let x = 5, y = 10;

console.log(x == y);    // Equal to: false
console.log(x === y);   // Strict equal: false (also checks type)
console.log(x != y);    // Not equal: true
console.log(x !== y);   // Strict not equal: true
console.log(x > y);     // Greater than: false
console.log(x < y);     // Less than: true
console.log(x >= 5);    // Greater than or equal: true
console.log(x <= y);    // Less than or equal: true


// ### 4. **Assignment Operators**  
// Used to assign values to variables.  
// Examples:
console.log("Assignment Operators");
let m = 5;

m += 2;  // m = m + 2: 7
m -= 1;  // m = m - 1: 6
m *= 3;  // m = m * 3: 18
m /= 2;  // m = m / 2: 9
m %= 4;  // m = m % 4: 1


// ### 7. **Type Operators**  
// Used to identify data types or create new objects.  
// **Examples**:
console.log("Type Operators");
console.log(typeof 42);            // "number"
console.log(typeof "Hello");       // "string"
console.log(typeof true);          // "boolean"

let obj = { name: "Alice" };
console.log(obj instanceof Object);  // true


// #### Ternary Operator:
console.log("Ternary Operators");
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"



// ### 3. **Logical Operators**  
// Used to determine the logic between variables or values.
                                                                                                                             // Used to combine conditions.  

console.log("Logical Operators");
                 // **Examples**
//  // logical &&
//  let a = 10;
//  let b = 20;
//  console.log(a>20 && b>50);//false
//  console.log(a>5 && b>50);//false
//  console.log(a>50 && b>10);//false
//  console.log(a>5 && b>10);//true


//  // ! Logical ||(Or)
//  let a = 10;
//  let b = 20;
//  console.log(a>20 || b>50);//false
//  console.log(a>5 || b>50);//true
//  console.log(a>50 || b>10);//true
//  console.log(a>5 || b>10);//true

// // ! Logical (!)
// let a = 20
// console.log(a != b)
// console.log(!(a==b))
// let result = !(a==b)
// console.log(result)


// few more examples
// let p = true, q = false;

// console.log(p && q);  // Logical AND: false
// console.log(p || q);  // Logical OR: true
// console.log(!p);      // Logical NOT: false