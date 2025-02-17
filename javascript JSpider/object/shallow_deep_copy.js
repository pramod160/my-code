//! SHALLOW AND DEEP COPY
// let obj = {
//     emp_id: 101,
//     emp_name: "Mukund",
//     emp_gender: "Male",
//     emp_location: "Bangalore"
// }

// console.log(obj)

//! destructuring in an object

// let {emp_id, emp_name, emp_gender, emp_location} = obj;
// console.log(emp_id)
// console.log(emp_name)

// let {emp_id, emp_name, ...obj1} = obj;
// console.log(emp_name)

// console.log(emp_name)
// console.log(obj1)

//! Shallow Copy
//? Shallow copy: In the case of shallow copy when we copy the original object into the clone object then the clone object has -
//? - the copy of the memory address of the original object. Means both points to the same memory address.

//? Both original object and cloned object internally point to the same referenced object. Since they point to the same memory address 
//? so if we changed the cloned object then changes would be reflected back to the original object because they point to the same memory address.

let obj = {
    emp_id: 101,
    emp_name: "SRK",
    emp_gender: "Male",
    emp_state: {
        emp_city: "Bangalore",
        emp_state: "Karnataka",
        emp_pincode: 42420420420,
    },
};

// console.log(obj);

// ! assign operator
// let obj1 = obj;
// console.log(obj1);

// obj1.emp_name = "SRK"
// console.log(obj);

// !new keyword
// let obj1 = new Object(obj);
// console.log(obj1);

// obj1.emp_name = "Lathesh"
// console.log(obj1);

// console.log(obj);

// ! rest parameter
// let {...obj1} = obj;
// console.log(obj1)

// obj1.emp_name = "Ananya" ; //?Ananya will not be printed in Original object as it is at level 1
// obj1.emp_state.emp_city = "Majestic" //? majestic will be printed in original object as it a nested object.
// console.log(obj) //?printing original object(ananya will not be there but majestic does)

// ! Object.assign()
//? Object.assign({}, obj) creates a shallow copy of the object obj. This means that top-level properties are copied by value, but nested objects are copied by reference.
// let obj1 = Object.assign({}, obj); //? Creates a shallow copy of obj
// console.log(obj1)

// obj1.emp_name = "Ananya" //? Adds/Updates the emp_name property in obj1
// obj1.emp_state.emp_city = "Majestic"  //? Attempts to update the nested property emp_city in emp_state
// console.log(obj1); //? Prints the shallow copied object with updated properties
// console.log(obj);  //? Prints the original object

//todo At level 1 (top-level properties), changes in obj1 do not affect obj because obj1 is a separate copy
//todo However, at nested levels (like emp_state.emp_city), changes in obj1 reflect in obj 
//todo because Object.assign() performs a shallow copy, meaning it only copies the top-level references

//! | DEEP COPY |
// ?A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays.
// ?This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location, 
// ?making them entirely independent.

//     let obj = {
//     emp_id: 101,
//     emp_name: "SRK",
//     emp_gender: "Male",
//     emp_state: { 
//         emp_city: "Bangalore",
//         emp_state1: "Karnataka",
//         emp_pincode: 420428428 
//     }
// }

// console.log(obj);

//! JSON.parse(JSON.stringify())
//? JSON.parse(JSON.stringify(obj)) method creates a deep copy of the object obj. Here’s a breakdown:
//? JSON.stringify(obj) converts the object obj into a JSON string.
//? JSON.parse(...) takes that JSON string and converts it back into a new object.

// let obj1 = JSON.parse(JSON.stringify(obj));
// console.log(obj1)
// obj1.emp_name = "Anaya";
// console.log(obj1);// Prints the object with the updated key

// obj1.emp_state.emp_city = "Mumbai"
// console.log(obj1); // Prints the object with the updated nested key

// console.log(obj);//? Prints the original object, unchanged. so its's deep copy.

