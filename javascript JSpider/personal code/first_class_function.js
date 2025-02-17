// EXTRA NOTES:
// Things learned:
// 1.  What is Function Statement ?
// A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
//     For Ex  - 
                    // function xyz(){
                    //         console.log("Function Statement");
                    // }

// 2.  What is Function Expression ?
// A.  When we assign a function to a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
//     For Ex - var a = function(){
                    //         console.log("Function Expression");
                    // }
// the function is first created and assigned to a variable so that it can be called by its variable name and unless 
// it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"


// 3.  What is Anonymous Function ?
// A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
//     For Ex - function(){
//                     }

// 4.  What is Named Function Expression ?
// A. Normal function with its name assigned to a variable 
// !!In this case you cannot call function by its name in outer scope!! (Scope Chain)
//                                             or
// A.  A function Expression with a name is known as Named Function Expression.
//     For Ex - var a = function xyx(){
//                             console.log("Names Function Expression");
//                     }

// 5.  Difference b/w Parameters and Arguments ?
// A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
//     For Ex - function ab( param1, param2 ){
//                             console.log("");
//                     }
//     & When we call this function & pass a variabel in this ( ) that is our Arguments
//     For Ex - ab( 4, 5 );

// Parameter: A variable defined in the function's declaration. It acts as a placeholder for the value that will be passed to the function.
// Argument: The actual value or expression passed to the function when it is called.

                                                        // example:2
// // Function definition
// func greet(name: String) { // 'name' is a parameter
//     print("Hello, \(name)!")
// }

// // Function call
// greet(name: "Alice") // "Alice" is an argument



// 6.  What is First Class Function Or First class citizens?
// first class Functions / first class citizens : 
// 1) used as values

// A.   The Ability of use function as value,
// *     can be passed as value,
// *     Can be passed as an Argument,
// *     Can be executed inside a closured function &
// *     Can be taken as return form.
//     // For Ex - 
//     var b = function(param){
//                             return function xyz(){
//                                     console.log(" F C F ");
//                             }
//                     } 

// 7. Function are heart of JS.
// They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.


// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------


// EXTRA NOTES:
// Examples of parameter and argument:

                                                      // example01:

// Function that takes another function as an argument

// function executeOperation(operation, a, b) {
//     const result = operation(a, b);
//     console.log(`Result: ${result}`);
// }

// // Function to be passed as an argument
// function add(a, b) {
//     return a + b;
// }

// // Passing 'add' as an argument
// executeOperation(add, 5, 3); // Output: Result: 8


                                                                // example02:

// Function that takes another function as a parameter

// function performCalculation(operation, a, b ) {
//     return operation(a, b);
// }

// // Function to be passed as a parameter
// function multiply(a, b) {
//     return a * b;
// }

// // Using the function
// let result = performCalculation(multiply, 4, 5) // Output: 20
// console.log(result);

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

// example of parameter and argument:

// A simple function to greet someone
function sayHello(name) { // 'name' is a parameter
    return `Hello, ${name}!`;
}

// A higher-order function that takes a function as an argument
function greetUser(greetingFunction, userName) { 
    // 'greetingFunction' and 'userName' are parameters
    return greetingFunction(userName); 
    // Here, 'userName' is passed as an argument to 'greetingFunction'
}

// Using the higher-order function
const message = greetUser(sayHello, 'Alice'); 
// 'sayHello' and 'Alice' are arguments passed to 'greetUser'
console.log(message); // Output: Hello, Alice!
