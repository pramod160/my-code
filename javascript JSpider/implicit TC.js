// // 1. console.log(2 - "2");
// Output: 0
// Explanation:
//             The subtraction operator (-) triggers type coercion in JavaScript.
// "2" (a string) is coerced into a number because subtraction only works on numbers.
// This results in 2 - 2, which equals 0.


// // 2. console.log(typeof 2 - "2");
// Output: NaN
// Explanation:
//             typeof 2 evaluates to the string "number".
// Now, it becomes "number" - "2".
// <!-- The - operator does not work on strings, so JavaScript tries to convert both operands into numbers. However:
// "number" cannot be converted into a valid number. -->
// "2" is converted to 2.
// As "number" fails to convert, the result is NaN (Not-a-Number).


// // 3. console.log(2 + "2");
// Output: "22"
// Explanation:
//             The addition operator (+) triggers string concatenation when at least one operand is a string.
// 2 (a number) is coerced into the string "2".
// The strings "2" and "2" are concatenated, resulting in "22".


// 4. `console.log('5' + 10); // '510' - number 10 is coerced to a string
// Output: "510"
// Explanation:
//             Similar to the previous case, the + operator triggers string concatenation when one of the operands is a string.
// '5' remains a string, and 10 (a number) is coerced to "10".
// The strings '5' and '10' are concatenated, resulting in "510".


// 5. `console.log('5' - 2); // 3 - string '5' is coerced to a number
// Output: 3
// Explanation:
//             The subtraction operator (-) triggers numeric coercion.
// '5' (a string) is coerced into the number 5.
// 5 - 2 results in 3.


// <!-- Summary of Coercion Behavior -->
// + Operator:

// If one of the operands is a string, JavaScript performs string concatenation.
// Example: 2 + "2" → "22".
// - Operator:

// JavaScript always attempts numeric coercion for the - operator, converting strings to numbers if possible.
// Example: "5" - 2 → 3.
// NaN Explanation:

// Any operation that involves an invalid number conversion or inappropriate types (like "number" - "2") results in NaN.
// Let me know if you'd like additional clarification! 😊