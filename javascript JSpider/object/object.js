let obj ={
    emp_id:420,
    emp_name:"Majnu",
    emp_salary:0,
    emp_location:"Banglore",
    emp_state:"Karnataka"
};

// console.log(obj); 
//output : {
//     emp_id: 420,
//     emp_name: 'Majnu',
//     emp_salary: 0,
//     emp_location: 'Banglore',
//     emp_state: 'Karnataka'
//   }


//! object methods
//? 01) Object.keys()
//? Object Keys will return onlu keys in the form of array.
// console.log(Object.keys(obj)); //[ 'emp_id', 'emp_name', 'emp_salary', 'emp_location', 'emp_state' ]

//! 02) Object.values()
//? Object values will return only values in the form of array.
// console.log(Object.values(obj)); //[ 420, 'Majnu', 0, 'Banglore', 'Karnataka' ]

//! 03) Object.entries()
//? Object entries will return both keys and value in the form of array.
// console.log(Object.entries(obj)); 
//? output: 
// [
//     [ 'emp_id', 420 ],
//     [ 'emp_name', 'Majnu' ],
//     [ 'emp_salary', 0 ],
//     [ 'emp_location', 'Banglore' ],
//     [ 'emp_state', 'Karnataka' ]
// ]

//! 04) Object.seal() :
// * A sealed object is one that has been sealed using Object.seal().
// * Sealed objects prevent new properties from being added and existing properties from being deleted.
// * However, the values of existing properties can still be modified.
//  Object.seal() is a JavaScript method that prevents adding or deleting properties from an object, but allows modifying the existing properties.
//     console.log(Object.seal(Obj)); //Syntax

//todo We Can Perform UPDATE Operation but not INSERT and DELETE.

//? UPDATE is possible
//     Obj.emp_name = "MUKUNDU";
//     console.log(obj);

//? INSERT is not Possible
//     Obj.emp_Gender = "male";
//     console.log(Obj);

//? DELETE is not Possible
//     delete Obj.emp_name;
//     console.log(Obj);

//! 05) Object.isSealed()
//? The Object.isSealed() method determines if an object is sealed or not. if an object is sealed. It returns true if the object is sealed, otherwise false.
// ?it will return the data in the form of Boolean.
// console.log(Object.isSealed(obj)); // false


//!06) Object.freeze() :
// * A frozen object is one that has been frozen using Object.freeze().
// * Frozen objects prevent new properties from being added, existing properties from being deleted, and existing properties from being modified.
// * Object.freeze() is a JavaScript method that prevents adding, deleting, or modifying properties from an object.
// *    console.log(Object.freeze(obj)); //Syntax

//todo We Cannot Perform UPDATE, INSERT, or DELETE Operation.

//? UPDATE is not possible
//     obj.emp_name = "MUKUNDU";
//     console.log(obj); // TypeError: Cannot assign to read only property 'emp_name' of object

//? INSERT is not Possible
//     obj.emp_Gender = "male";
//     console.log(obj); // TypeError: Cannot add property emp_Gender, object is not extensible

//? DELETE is not Possible
//     delete obj.emp_name;
//     console.log(obj); // TypeError: Cannot delete property 'emp_name' of object


//! 07) Object.isFrozen()
//? The Object.isFrozen() method determines if an object is frozen or not. If an object is frozen, it returns true; otherwise, false.
//? It will return the data in the form of Boolean.
// console.log(Object.isFrozen(obj)); // false


//! Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object.
//? Here, we will create a new object and copy the properties of `obj` to it.

let newObj = Object.assign({}, obj);
// console.log(newObj);
// Output will be the same as `obj`:
// {
//     emp_id: 420,
//     emp_name: 'Majnu',
//     emp_salary: 0,
//     emp_location: 'Banglore',
//     emp_state: 'Karnataka'
// }

let newObjArray = Object.assign([], obj);
// console.log(newObjArray);
// Output will be an array with the properties of `obj` as elements:
// [
//     emp_id: 420,
//     emp_name: 'Majnu',
//     emp_salary: 0,
//     emp_location: 'Banglore',
//     emp_state: 'Karnataka'
// ]

//! for of loop
// for(let values of obj){
//     console.log(values);
// }
//?uncaught typeError: object are not iterable

//todo we can't use for of loop directly if we want to use we need to convert object to array.
for (let keys of Object.keys(obj)){
    // console.log(keys);
};
// output:
// emp_id
// emp_name
// emp_salary
// emp_location
// emp_state

for (let values of Object.values(obj)){
    // console.log(values);
};
// output:
// 420
// Majnu
// 0
// Banglore
// Karnataka

for (let keyvalue of Object.entries(obj)){
    // console.log(keyvalue);
};
// output:
// [ 'emp_id', 420 ]
// [ 'emp_name', 'Majnu' ]
// [ 'emp_salary', 0 ]
// [ 'emp_location', 'Banglore' ]
// [ 'emp_state', 'Karnataka' ]


// console.log("for in");
//! for in loop
//? prints only the keys because the for...in loop iterates over all the enumerable properties of the object obj,
//? and key represents each property name (key) in the object during each iteration.
for (let key in obj) {
    // console.log(key + ": " + obj[key]);
}
// output:
// emp_id: 420
// emp_name: Majnu
// emp_salary: 0
// emp_location: Banglore
// emp_state: Karnataka

let obj1 = {
    emp_id: 101,
    emp_name: "John Doe",
    emp_salary: 50000,
    emp_location: "New York",
    emp_state: "NY"
};

// console.log(obj1);

//?! how many ways we can copy an object
//? Using Object.assign()
let copy1 = Object.assign({}, obj1);
// console.log(copy1);

//?assign object into another keyword
let obj2 =obj1;
// console.log(obj2)

//?new keyword
// let obj3 = new obj1;
// console.log(obj3);

//?using freeze
// let obj4 =Object.freeze(obj1);
// console.log(obj4)

//? using seal
let obj5 =Object.seal(obj1);
// console.log(obj5)



// //? Using spread operator
// let copy2 = { ...obj1 };
// console.log(copy2);

// //? Using JSON methods
// let copy3 = JSON.parse(JSON.stringify(obj1));
// console.log(copy3);

// //? Using a for...in loop
// let copy4 = {};
// for (let key in obj1) {
//     if (obj1.hasOwnProperty(key)) {
//         copy4[key] = obj1[key];
//     }
// }
// console.log(copy4);

// //? Using structuredClone (modern browsers)
// let copy5 = structuredClone(obj1);
// console.log(copy5);

// ? Using lodash library
// let copy6 = _.cloneDeep(obj1);
// console.log(copy6);

// __________________________________________________________________________________________________
