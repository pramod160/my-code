//! Browser Object Model (BOM)
// The Browser Object Model (BOM) is used to interact with the browser.
// The default object of browser is window means you can call all the
// functions of window by specifying window or directly

// Example
// window.alert()
// alert()

//? DOM | DOM is stand for Document Object Model which is used to manipulate the html directly.
//? The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

//! DOM METHODS
//? 1. document.getElementById()
//? 2. document.getElementsByClassName()
//? 3. document.getElementsByTagName()
//? 4. document.querySelector()
//? 5. document.querySelectorAll()

// ______________________________________________________

// window  //global object
//     |
//     |-- document
//     |-- history
//     |-- screen
//     |-- navigator
//     |-- location

// _____________________________________________________________

//! document.getElementById()
// let headtag = document.getElementById('head')
// console.log(headtag)

//! document.getElementsByClassName()
// let headTag2 = document.getElementsByClassName('head2')
// console.log(headTag2)

//todo if you want to check that particular thing is array or not // if you want to check that particular thing is array or not we can use Array.isArray()
// console.log(Array.isArray(headTag2)) // false
//! How we can convert impure array to pure array for that we can use Array.from()
// let headtag3 = Array.from(headTag2) //?ARray.from()
// console.log(headtag3)
// headtag3.map((m)=>
// console.log(m)
// ))

//! 3.document.getElementsByTagName()
// let headTag = document.getElementsByTagName('h1')
// console.log(headTag)

//! 4. document.querySelector()
//? & with the help of tagname
// let headTag = document.querySelector('h1')
// console.log(headTag)

//? & with the help of classname
// let headTag = document.querySelector('.head2')
// console.log(headTag)

//? & with the help of id
// let headTag = document.querySelector('head')
// console.log(headTag)


//! ?. document.querySelectorAll()
//? & with the help of tagname
// let headTag = document.querySelectorAll('h1')
// console.log(headTag)

//? & with the help of classname
// let headTag = document.querySelectorAll('.head2')
// console.log(headTag)
//? & with the help of id
// let headTag = document.querySelectorAll('#head')
// console.log(headTag)
// ___________________________________________________________________________

let head = document.getElementById('head')
let head1 = document.getElementById('head1')
console.log(head, head1)

// ? innerText : The innerText property sets or returns the text content of an element.
// ? innerHTML : The innerHTML property sets or returns the HTML content (inner HTML) of an element.

//? | example1 |
// head.innerText = "SRK is a very bad boy"
// head.innerHTML = "SRK is a very bad boy"

//? | example2 |
// head.innerText = '<a href='0'>LINK</a>'
// head1.innerHTML = '<a href='0'>LINK</a>'
