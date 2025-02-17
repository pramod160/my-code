// JavaScript Identifiers:

// An identifier is a name that is given to entities like variables, functions, classes, etc.

// Rules for Naming JavaScript Identifiers
// The rules for writing identifiers are

// 1. Identifier names must start with either a letter, an underscore `_`, or the dollar sign `$`. For example,

// let demo = "hi";
// console.log(demo);

// let _demo = "hi";
// console.log(_demo);

// JavaScript Identifiers:

// let $demo = 375385838;
// console.log($demo);

// let _ = "hi";
// console.log(_);

// let $ = "hi";
// console.log($);

// * Identifier names cannot start with numbers.

// let 1demo = "hi"; // An identifier or keyword cannot immediately follow a numeric literal

// let demo1 = "hi";
// console.log(demo1);


// 1 JavaScript Identifiers:

// a numeric literal

// let demo1 = "hi"
// console.log(demo1)

// ^ JavaScript is case-sensitive. So y and Y are different identifiers.

// let demo = "hi"
// console.log(DEMO) // app.js:28
// Uncaught ReferenceError: DEMO is not defined

// ^ Keywords cannot be used as identifier names

// let Break = "hi"
// console.log(Break)



// 1. OUTPUT METHOD OF JAVASCRIPT

// 1. console.log()

// 2. document.write()

// 3. alert()

// 4. confirm()

// 5. prompt()

// 1. console.log() : is used for testing purpose.
// let a = 100;
// console.log(a)

// 2. document.write() : that is used to display some values in the HTML web pages (Browser window).
// document.write("hiii")

// 3. alert() : is a pop-up javascript output method.
// let task = true;
// if (task){
//     alert("hey good boy u can leave the class😊😊😊")
// } else {
//     alert("hey idiot sit and complete the task😡😡😡")
// }

// 4. confirm() : is a pop-up javascript output method
// let task = confirm("task completed or not?");
// to confirm(task completed or not);
// console.log(task);

// if (task) {
//     alert("hey good boy u can leave the class😊😊😊");
// } else {
//     alert("hey idiot sit and complete the task😡😡😡");
// }


// ? Prompt(): is a pop-up JavaScript output method.
// ? prompt() is used to accept user data.
// let fname = prompt("enter your name");
// console.log(fname);

// 20-01-2025


//? console.log(typeof 2+3); // output : number 3
//? console.log(typeof null ); // output: object
//? console.log(typeof undefined); //undefined
//? console.log(typeof Boolean); // function
//? console.log(typeof BigInt); //function
//? console.log(typeof Symbol); //function
//? console.log(typeof prompt); //function
//? console.log(typeof 2-2); //NaN
//? console.log(typeof 2-"2"); //NaN  (typeof 2 will be converted to string number)
//? console.log(typeof NaN); //number
//? console.log(typeof isNaN); //function
//? console.log(typeof 155555556444444); //number
//? console.log(typeof 155555556444444n); //bigint
//? console.log(typeof true); //boolean
// let symbol = Symbol("example");
// console.log(typeof symbol); // "symbol"
// A `Symbol` is a primitive data type in JavaScript that is used to create unique identifiers.
//? console.log("multiplication")
//? console.log(typeof 2 * 2); //NaN
//? console.log(typeof 2* "2"); //NaN
//? console.log(2 * 2); //4
//? console.log(2* "2"); //4     //when the string that represents the number  is involved, js will convert the string to number thenperforms the multin
//? console.log(2* "hello"); //NaN (because number * string is to possible)

// console.log(typeof 42); console.log(typeof Number); console.log(typeof 2); console.log(typeof number);

// console.log(2-"2");
// console.log(typeof 2 - "2");
// console.log(2+"2");
// console.log('5' + 10); // '510' - number 10 is coerced to a string
// console.log('5' - 2); // 3 - string '5' is coerced to a number



// Summary of Coercion Behavior

//01) Prefers string concatenation if one operand is a string, without converting it to a number.
  // + Operator:
  // If one of the operands is a string, JavaScript performs string concatenation.
  // Example: 2 + "2" → "22".


// 02) Always coerces both operands into numbers. If conversion fails, the result is NaN.
// - Operator:
// JavaScript always attempts numeric coercion for the - operator, converting strings to numbers if possible.
// Example: "5" - 2 → 3.
// NaN Explanation:

// Any operation that involves an invalid number conversion or inappropriate types (like "number" - "2") results in NaN.
// Let me know if you'd like additional clarification! 😊


