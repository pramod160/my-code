// ! Time object
// ? 1. JavaScript setTimeout()
// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
// The commonly used syntax of JavaScript setTimeout is:
// setTimeout(function, milliseconds);
// ~ Its parameters are:
// function - a function containing a block of code
// milliseconds - the time after which the function is executed

// setTimeout(() => {
//     console.log("hi i am setTimeout")
// }, 1000 * 5)

// ! Example
// let intervalID = setTimeout(() => {
//     console.log("hi")
//     console.log("SRK")
// }, 5000)

// ! Interval ID
// function intervalFun(){
//     console.log("SRK")
// }

// let intervalID = setTimeout(intervalFun, 2000)
// console.log(intervalID)

// ?. setInterval()
// The setInterval() method repeats a block of code at every given timing event.
// The commonly used syntax of JavaScript setInterval is:

// setInterval(function, milliseconds);
// Its parameters are:

// function - a function containing a block of code
// milliseconds - the time interval between the execution of the function
// let prajwall = setTimeout(() =>{
//     console.log("Hi i am setInterval")
// }, 1000)
//// console.log(prajwall);//will return an id

// //?  Example
// let count = 0;
// let intervalID1 = setInterval(() => {
//     count = count + 1;
//     console.log(count);
//     if (count == 2) {
//         clearInterval(intervalID1);
//     }
// let date = new Date();
// console.log(date.toLocaleDateString());
// }, 1000);

// ?same as above example but function is written separately.
// let count1 = 0;
// let prajwal = () => {
//     count1 = count1 + 1;
//     console.log(count1);
//     if (count1 == 3) {
//         clearInterval(intervalID2);
//     }
// let date = new Date();
// console.log(date.toLocaleDateString());
// }

// let intervalID2 = setInterval(prajwal, 1000);
// console.log(intervalID2)
