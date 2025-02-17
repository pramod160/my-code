// ! Promises : promises are used to handle multiple asynchronous operations in JavaScript.
// ?Syntax of promise
// let p = new Promise((resolve, reject) => (
    // Your code here
// ));

// ~ States in promises
// ?1. fulfilled state
// ?2. rejected state
// ?3. pending state

// ?1. fulfilled state
let p = new Promise((resolve, reject) => {
    resolve("hi I am resolved");
    // reject("hi I am reject");// if resolved it will print the result.
});
console.log(p);

// ?2. rejected state
let p1 = new Promise((resolve, reject) => {
    // resolve("hi I am resolved"); // when there is no resolve it will print reject and when rejected by the condition.
    reject("hi I am reject");
});
console.log(p1);

// ?3. pending state
let p2 = new Promise((resolve, reject) => { 
    // when no res or rej
});
console.log(p2);

// ! Another example
let p4 = new Promise((resolve, reject) => {
    let task = confirm("Task completed or not?"); //?confirm
    if (task) {
        resolve("Hi, you have completed the task. You can leave the class 😎😎");
    } else {
        reject("Hi, first complete the task 😡😡😡");
    }
});
console.log(p4);

// Promises : promises are used to handle multiple asynchronous operations in JavaScript.



let p5 = new Promise((res, rej) => {
    let task = confirm("task completed or not?");
    if(task){
        setTimeout(() => {  //?setTimeout
            res("Hi, you have completed the task. You can leave the class 😎😎");
        }, 3000);
    } else {
        rej("Hi, first complete the task 😡😡😡");
    }
});

console.log(p5);
