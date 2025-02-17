// JSON | json is stand for javascript object notation which is used to store the data and
// transpose the data.
// JSON will always comes in key and value pair and key must be in doubleQuoted(Property
// keys must be double quoted).
let obj = {
    emp_id: 210,
    emp_name: 'Prajwal',
    emp_salary: '25K',
    emp_location: 'Hyderabad',
    emp_gender: 'Male'
}
// console.log(obj)

//! how to convert normal object into stringify object
//? Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let JSON_object = JSON.stringify(obj)
// console.log(JSON_object)

//? Converts a JavaScript Object Notation (JSON) string into an object.
let normal_object = JSON.parse(JSON_object)
// console.log(normal_object)


//! Callback Hell
// Callback hell refers to the situation in JavaScript where multiple nested
// callbacks create complex, deeply indented code, often called the "pyramid of doom."
// This structure makes the code difficult to read, debug, and maintain, resulting
// in poor code quality and scalability issues.

function addition(val, callback) {
    callback(val + 10, false);
}

function subtraction(val, callback) {
    callback(val - 10, false);
}

function multiplication(val, callback) {
    callback(val * 10, false);
}

function division(val, callback) {
    callback(val / 10, false);
}

addition(10, (AddRes, error) => {
    if (!error) {
        console.log('Addition result is ', AddRes);
        subtraction(AddRes, (SubRes, error) => {
            if (!error) {
                console.log('Subtraction result is ', SubRes);
                multiplication(SubRes, (MulRes, error) => {
                    if (!error) {
                        console.log('Multiplication result is ', MulRes);
                        division(MulRes, (DivRes, error) => {
                            if (!error) {
                                console.log('Division result is ', DivRes);
                            }
                        });
                    }
                });
            }
        });
    }
});



