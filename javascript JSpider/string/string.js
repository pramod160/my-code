// String : 
            // The collection of the characters

// There are 5 ways to define the String
// 01) Double Quotes
// 02) Single quotes
// 03) Back Ticks
// 04)String()
// 05)new String()

// 01) Double Quotes examples
let pra = "Double Quotes! ";
// console.log(pra);

// ---------------------------------------------------------------
// 02)Single quotes examples 
let pra2 = 'Single quotes';
// console.log(pra2);

// ---------------------------------------------------------------
// 03)Back Ticks examples 
let pra3 = `Back Ticks`; // Using template literals
// console.log(pra3);

// ---------------------------------------------------------------
// 04)String Constructor: examples
let greeting = String("String Constructor"); 
// console.log(greeting); // Output: String Constructor
let greetingOb = String(" How are you?"); 
// console.log(greeting.concat( greetingOb));  //String Constructor How are you? // concat
// ------------------------------------------------------------------

// 05)String Object: examples                                                                                                                     //syntax calls the built-in String constructor in JavaScript, which creates a String object.
let greetingObj1 = new String("Hello, World!");           //When you create a string object using new String(), it becomes an instance of the String object, which means it has additional properties and methods that primitive strings do not.
let greetingObj2 = new String(" How are you?");
// console.log(greetingObj1); // Output: [String: 'Hello, World!'] ,because greetingObj1 is an instance of a String object.
// console.log(greetingObj1.concat( greetingObj2)); // Output: Hello, World! How are you?     // on concat gives primitive(normal or default) string
// ----------------------------------------------------------------------------------------------

// let strp = "Hello";      //string concatenation
// let newStr = strp.concat(", World!");
// console.log(strp);       // Output: "Hello" (original string remains unchanged)
// console.log(newStr);    // Output: "Hello, World!" (new string is created)

// -----------------------------------------------EXTRA-----------------------------------------------
// Properties: Store information about the object (e.g., length).
// Methods: Perform actions on the object (e.g., charAt()).
// ----------------------------------------------------------------------------------------------



// ---------------------------------------------//Different Way Of Extracting String Character

// Demonstrating some properties and methods
// -----------------------------------------

let Spring = "Hello, World!";

// 01)string.length
// console.log(Spring.length); // Output: 13

// example2:
// let len1 ="hello, Spring."; //o/p : 14
// console.log(len1.length);
// let len2 = "Hello, World!" //o/p : 13
// console.log(len2.length);
// ----------------------------------------------------------------

// 02 at
// console.log(Spring.at(0)); // Output: H
// console.log(Spring.at(-1)); // Output: !
// ----------------------------------------------------------------

// 03 chatAt
// console.log(Spring.charAt(0)); // Output: H

// ----------------------------------------------------------------

// 04 charCodeAt
// console.log(Spring.charCodeAt(0)); // Output: 72

// ----------------------------------------------------------------

// 05) array method or(array-like indexing.)  ---extra
// console.log(Spring[0]);  // Output: H/

// ----------------------------------------------------------------
// ----------------------------------------------------------------

                                                           // Three methods of extracting string by part


// ### 1. Slice
// The `slice` method extracts a section of a string and returns it as a new string, without modifying the original string.
// It can accept negative indices,
let text1 = "Hello, World!";

let slicea = text1.slice(0, 5);
// console.log(slicea); // Output: Hello

let slicer = text1.slice(5, 50);
// console.log(slicer); // Output:, World!

let sliceb = text1.slice(-6, -1);
// console.log(sliceb); //World

let slicec = text1.slice(-6); // from -6 index to end of the string.
// console.log(slicec); //World  

let sliced = text1.slice(6); // from index to end of the string
// console.log(sliced); // World (there is space before " World", as at index 6 we have space).

let slicee = text1.slice(-1, -6); //The slice method in JavaScript handles cases where the start index is greater than the end index differently than substring. When the start index is greater than the end index, slice does not swap the indices—it simply returns an empty string
// console.log(slicee); //"". empty string //slice doesn't swap the indices, simply returns empty string.

let slicef = text1.slice(5, 0);
// console.log(slicef); //"".  empty string  //empty string //slice doesn't swap the indices, simply returns empty string.

let sliceg = text1.slice(50, 5); //starting index out of bound, but slice will not swap. 
// console.log(sliceg); // Output: Hello

// ----------------------------------------------------------------

// ### 2. Substring
// The `substring` method returns the part of the string between the start and end indexes, or to the end of the string.
// It does not accept negative indices; instead, any negative value is treated as 0.
let text2 = "Hello, World!";

let substring2 = text2.substring(7, 12);
// console.log(substring2); // Output: World

let substring2a = text2.substring(-6, -1);
// console.log(substring2a); // Output:

let substring2b = text2.substring(-6); // -6 will be rendered as  0 and output will be whole string starting from 0 index.
// console.log(substring2b); // Output:Hello, World!

let substring2c = text2.substring(6); // starting form index 6 to last will be given as output
// console.log(substring2c); // Output: World!

let substring2d = text2.substring(6, 1); //When substring with the start index greater than the end index, JavaScript swaps the two values and then extracts the substring.
// console.log(substring2d); // Output:ello,

let substring2e = text2.substring(70, 12); //will be swapped and upto end(starting form 12 to end of string)
// console.log(substring2e); // Output: World

// ----------------------------------------------------------------

// ### 3. Substr
// The `substr` method returns a portion of the string, starting at the specified index and extending for a given number of characters.

let text3 = "Hello, World! adjfkdj";

let substr3 = text3.substr(5, 7); //Starts at index 5("W") and extracts 7 characters: "World".
// console.log(substr3); // Output:, World

let substr3a = text3.substr(-4, -5); //length can't be negative.
// console.log(substr3a); // Output: empty string

let substr3b = text3.substr(9); // starting from 9 upto end of the string.
// console.log(substr3b); // Output:rld! adjfkdj

let substr3n = text3.substr(-9); // starting from -9 upto end of the string.
// console.log(substr3n); // Output:! adjfkdj

let substr3c = text3.substr(-7,3); //Starts at index -7 and extracts 3 characters: "World".
// console.log(substr3c); // Output:adj

let substr3m = text3.substr(-70,-3); //length can't be negative
// console.log(substr3m); // Output:empty string

let substr3d = text3.substr(7, 5); //Starts at index 7 ("W") and extracts 5 characters: "World".
// console.log(substr3d); // Output: World

let substr3k = text3.substr(70, 5);  //starting index is out of bound so empty string will be returned.(as after index 70 only, it will give 5 character starting from index 70.)
console.log(substr3k); // Output:empty string

let substr3l = text3.substr(5, 70);  //End Index is out of bound so, string will be returned from starting point to the end of the string. 
// console.log(substr3l); // Output:, World! adjfkdj

// ----------------------------------------------------------------------------------------------------------------------------------------------

// All three methods return an empty string if the starting index is out of bounds.(when only starting index is passed)
let textp = "Hello, World!";
// let result = textp.slice(50); //all slice, substring, substr obey same for this (when only starting index is passed).
// console.log(result); // Output: "". empty string
// ----------------------------------------------------------------------------------------------------------------------------------------------









// console.log(Spring.concat(" How are you?")); // Output: Hello, World! How are you?

// console.log(Spring.slice(0, 5)); // Output: Hello
// console.log(Spring.split(", ")); // Output: ["Hello", "World!"]
// console.log(Spring.match(/World/)); // Output: ["World"]
// console.log(Spring.repeat(2)); // Output: Hello, World!Hello, World!
// console.log(Spring.replace("World", "Everyone")); // Output: Hello, Everyone!
// console.log(Spring.indexOf("World")); // Output: 7
// console.log(Spring.lastIndexOf("o")); // Output: 8
// console.log(Spring.includes("World")); // Output: true
// console.log(Spring.toLowerCase()); // Output: hello, world!
// console.log(Spring.toUpperCase()); // Output: HELLO, WORLD!


// let greetingWithSpaces = new String("   Hello, World!   ");
// console.log(greetingWithSpaces.trim()); // Output: Hello, World!













