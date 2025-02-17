//! promise we have two type of methods 
// ! Instance methods

//? 01)then(res, rej) : then(onFulfilled, onRejected): Attaches callbacks for the resolution (success) or rejection (failure) of the promise.
//? 02)catch(rej) : Attaches a callback for only the rejection of the promise.
//? 03) finally(onFinally): Attaches a callback that will be called regardless of the promise's resolution or rejection.


// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Success!"), 1000);
// });

// promise2
//     .then((result) => {
//         console.log(result); // Output: Success!
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("Promise handling is done.");
//     });
//! =========================================

// let p = new Promise((resolved, reject)=>{
// resolved("hi i ama resolved")
// reject("hi i ama rejected")
// });

// p.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("hi I am finally");
// })

// ! static method
//? Promise.all()
//? Promise.allSettled()
//? Promise.any()
//? Promise.race()

let p1 = new Promise((res, rej)=>{
    res("hi I am resolved 1")
    rej("hi I am rejected 1")
})
let p2 = new Promise((res, rej)=>{
    res("hi I am resolved 2")
    rej("hi I am rejected 2")
})
let p3 = new Promise((res, rej)=>{
    res("hi I am resolved 3")
    rej("hi I am rejected 3")
})
let p4 = new Promise((res, rej)=>{
    res("hi I am resolved 4")
    rej("hi I am rejected 4")
})
let p5 = new Promise((res, rej)=>{
    res("hi I am resolved 5")
    rej("hi I am rejected 5")
})


//? Promise.all()
//? returns the array with all the resolve values.
//? if at least one promise is rejected it will return the error immediately.
//? if there is no resolve statement it will print reject.
//? if both resolve and reject are not present then it will return nothing.(it will stay pending forever or ir will print(return) nothing )
// Promise.all([p1, p2, p3, p4, p5]).then((result)=>{
// Promise.all([]).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })
//! ====================================

// //? Promise.allSettled()
//? it returns the array of objects where promise state is stored with a key status and promise output with the key value.
//? it will give result of all promise with there state and result.
//? if rejected it will return the status of that promise and reason(which will print the statement of rejected) along others promises in array of object.
// Promise.allSettled([p1, p2, p3, p4, p5]).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })

//! ===============================================

//! Promise.any()
//? if any one of the Promise is resolved, it will return the result of first resolved promise.(if p1 is not resolved it will check p1 ..)
//? if all the promise are not resolved it will return "AggregateError: All promises were rejected"
//? if both resolve and reject are not present then it will return nothing.(it will stay pending forever or ir will print(return) nothing )

// Promise.any([p1,p2,p3,p4,p5]).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error) // Aggregate(error:All)
// })
//! =======================================================
//? It gives the result of the first promise that is resolved based on TimeRanges.

// //? Promise.race()
// Promise.race([p1,p2,p3,p4,p5]).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

//? Promise.race() example:2

let p6 = new Promise((resolved, reject)=>{
    setTimeout(()=>{
        // resolved("hi I am resolved 6")
        // reject("hi I am rejected 6")
    }, 4000)
});

let p7 = new Promise((resolved, reject)=>{
    setTimeout(()=>{
        // resolved("hi I am resolved 7")
        // reject("hi I am rejected 7")
    }, 3000);
})

let p8 = new Promise((resolved, reject)=>{
    setTimeout(()=>{
        // resolved("hi I am resolved 8")
        // reject("hi I am rejected 8")
    },2000)
})

let p9 = new Promise((resolved, reject)=>{
    setTimeout(()=>{
        // resolved("hi I am resolved 9")
        // reject("hi I am rejected 9")
    }, 1000)
})

// Promise.race([p6, p7, p8, p9]).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })