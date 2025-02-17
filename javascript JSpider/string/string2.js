// // !The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// let str = "JavaScriptSs";
// console.log(str.indexOf("M")); //O/P= -1
// console.log(str.indexOf("S")); //O/P= 4
// console.log(str.indexOf("s")); //O/P=11
// console.log(str.indexOf("p")); //O/P= 8

// // --------------------------------------------------------------------
// console.log("lastIndexOf()");
// // ! The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// let strr = "JavaScvript";
// console.log(strr.lastIndexOf("v"));//6
// console.log(strr.lastIndexOf("M"));//-1

// // ! NOTE  : Both indexOf(), and lastIndexOf() return -1 if the text is not found
// // ----------------------------------------------------------------------------
// console.log("includes()"); // O/P: true or false
// // ! JavaScript String includes()
// // The includes() method returns true if a string contains a specified value.
// // Otherwise it returns false.

// let str2 = "HI i am cuteBOy"
// console.log(str2.includes("cuteBOy"));//true
// console.log(str2.includes("cuteGuy"));//false

// let str3 = "hi i am very very very cuteboy, no i am very cuteboy"  //even space is consider for index
// console.log(str3.lastIndexOf("c"));//45
// console.log(str3.includes("cuteboy", 45));//true

// // ---------------------------------------------------------------------------
// console.log("startsWith()");
// //! JavaScript String startsWith()
// // The startsWith() method returns true if a string begins with a specified value.

// // Otherwise it returns false:

// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello"));//true
// console.log(text.startsWith("Jello"));//false
// console.log(text.startsWith("world",6 ));//true
// console.log(text.startsWith("world",5 ));//false

// // -------------------------------------------------------------------------------
// console.log("endsWith()");
// // JavaScript String endsWith()
// // The endsWith() method returns true if a string ends with a specified value.
// // Otherwise it returns false:

// let str4 = "Hello world welcome to the universe universe unoverse"

// console.log(str4.endsWith("world", 11));//true
// console.log(str4.endsWith("world", 10));//false
// console.log(str4.endsWith("universe",36));//true
// console.log(str4.endsWith("H",1));//true
// console.log(str4.endsWith("H",0));//false
// console.log(str4.endsWith("to",21));//false
// console.log(str4.endsWith("to",22));//true
// console.log(str4.indexOf("universe"));//27  //extra
// console.log(str4.lastIndexOf("universe"));//36
// console.log(str4.lastIndexOf("unoverse"));//46
// console.log(str4.lastIndexOf("e"));//52
