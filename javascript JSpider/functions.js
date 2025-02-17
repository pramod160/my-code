// ### **Text in the image:**
// 1. **Functions:**  
//    Functions are a block-level code used to perform some operations.

// 2. **Types of functions:**
//    - Anonymous function
//    - Named function
//    - Function with expression
//    - HOF (Higher Order Function)
//    - Callback function
//    - Arrow function
//    - IIFE (Immediately Invoked Function Expression) / Self-Invoking Function
//    - Nested function

// 01 **Anonymous Function:**  
//    A function without a name is called an anonymous function.  
//    Example:  
    // function() {  
    //     // function body  
    // }
//    **Uncaught Syntax Error:**  
//    Function statements require a function name.

//    Example02:
// Anonymous function (usually used as a callback or assigned to a variable)
// let anonymousFunction = function() {
//     console.log("This is an anonymous function.");
// };

// anonymousFunction();


// 02. **Named Function:**  
//    A function with a name is called a named function.
//// Example01 :
// Named function
function namedFunction() {
    console.log("This is a named function.");
}

namedFunction();

//// example 02:
function demo() {
    console.log("hi");
}
demo();

// // example 03:
function demo(a, b) {
    console.log(a + b);
    console.log(a - b); 
    console.log(a * b); 
    console.log(a ** b); 
}

demo(10, 20);



// 03. **Function with Expression**
// A function defined and assigned to a variable.
// It doesn't require a name (can be anonymous) and can be called using the variable name.
let demo = function() {
    console.log("hi, I'm a function");
};

demo();

// 1. If there is no `console.log` statement in the function, then we use the `return` keyword. then It is mandatory 
// to `return` a value to the function-calling statement.

// 2. If we are using only `console.log` statements inside the function, then there is no `return` statement required to console the function. 
//    - We simply need to call the function-calling statement, and it will get invoked.

// Example:
let demo = function () {
    console.log("hi");
};

demo(); // Output: hi
console.log(demo()); // Output: hi (from console.log in the function), undefined (implicit return)


// Implicit Return:
// Whenever functions return values internally without explicitly using `return`, this is called an **implicit return.

// Example01:
let demo = function () {
    console.log("hi");
};

demo(); // Output: hi

// example 02:
let demo = function() {
    console.log('hi');
    return 2;
}
console.log(demo());

// **Explicit return:**
// Whenever we are going to return externally with the help of the return keyword, it is called an explicit return.

// example:
let demo = function() {
    console.log('hi');
    return "cute boy";
}
console.log(demo());



// **Nested function:**
// A function inside another function is called a nested function.
// example:
function gp() {
    console.log("hi i am gp");
    function p() {
        console.log("hi i am parent");
        function c() {
            console.log("hi i am child");
        }
        c();
    }
    p();
}
gp();



// **Higher Order Function (HOF):**
// A function that takes another function as an argument or returns a function is called a Higher Order Function.
// // example:
// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }
// console.log(calculator(10, 20, add)); // Output: 30
// console.log(calculator(10, 20, multiply)); // Output: 200









// #### **IIFE (Immediately Invoked Function Expression):**
// IIFE example
(function() {
    console.log("This is an IIFE (Immediately Invoked Function Expression).");
})();