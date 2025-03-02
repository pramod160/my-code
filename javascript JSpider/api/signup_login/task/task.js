let form = document.getElementById("form");
let username = document.getElementById("fname");
let male = document.getElementById("male")
let female = document.getElementById("female");
let number = document.getElementById("number");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let rpwd = document.getElementById("rpwd");
let submit_btn = document.getElementById("submit_btn");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2"); 
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");
let error5 = document.getElementById("error5");
let error6 = document.getElementById("error6");
let error7 = document.getElementById("error7"); //not used in eventlistener.

username.addEventListener("keyup", (e) => {
    e.preventDefault();
    let validation = username.value.trim().length > 0;
    if (!validation) {
        username.classList.add("warning");
        username.classList.remove("success");
//        submit_btn.disabled = true;
        error5.innerHTML = "Username cannot be empty";
    } else {
        username.classList.add("success");
        username.classList.remove("warning");
        error5.innerHTML = "";
    }
});


number.addEventListener("keyup", (e) => {
    e.preventDefault();
    let validation = number.value.length === 10;
    if (!validation) {
        number.classList.add("warning");
        number.classList.remove("success");
//        submit_btn.disabled = true;
        error1.innerHTML = "Number must be exactly 10 digits";
    } else {
        number.classList.add("success");
        number.classList.remove("warning");
        error1.innerHTML = "";
    }
});


dob.addEventListener("change", (e) => {
    e.preventDefault();
    let dobRegex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/; // DD-MM-YYYY format
    let validation = dobRegex.test(dob.value);
    if (!validation) {
        dob.classList.add("warning");
        dob.classList.remove("success");
//        submit_btn.disabled = true;
        error6.innerHTML = "Please enter a valid date in DD-MM-YYYY format";
    } else {
        dob.classList.add("success");
        dob.classList.remove("warning");
        error6.innerHTML = "";
    }
});

email.addEventListener("keyup", (e) => {
    e.preventDefault();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validation = emailRegex.test(email.value);
        if (!validation) {
            email.classList.add("warning");
            email.classList.remove("success");
    //        submit_btn.disabled = true;
            error2.innerHTML = "Please enter a valid Gmail address";
        } else {
            email.classList.add("success");
            email.classList.remove("warning");
            error2.innerHTML = "";
        }
    });

pwd.addEventListener("keyup", (e) => {
    e.preventDefault();
    // let validation = pwd.value.length >= 8;
    let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    let validation = pwdRegex.test(pwd.value);
    if (!validation) {
        pwd.classList.add("warning");
        pwd.classList.remove("success");
//        submit_btn.disabled = true;
        error3.innerHTML = "Password must be at least 8 characters";
    } else {
        pwd.classList.add("success");
        pwd.classList.remove("warning");
        error3.innerHTML = "";
    }
});

rpwd.addEventListener("keyup", (e) => {
    e.preventDefault();
    let validation = rpwd.value === pwd.value;
    if (!validation) {
        rpwd.classList.add("warning");
        rpwd.classList.remove("success");
//        submit_btn.disabled = true;
        error4.innerHTML = "Passwords do not match";
    } else {
        rpwd.classList.add("success");
        rpwd.classList.remove("warning");
        error4.innerHTML = "";
    }
});



form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the input values
    let SigninName = username.value;
    let SigninNumber = number.value;
    let SigninDob = dob.value;
    let SigninMale = male.checked;
    let SigninFemale = female.checked;
    let SigninEmail = email.value;
    let SigninPwd = pwd.value;
    let SigninR_pwd = rpwd.value;

    let allFieldsFilled = true;

    if (SigninName === "") {
        username.classList.add("warning");
        error5.innerHTML = "Username cannot be empty";
        allFieldsFilled = false;
    } else {
        username.classList.remove("warning");
        error5.innerHTML = "";
    }

    if (SigninNumber === "") {
        number.classList.add("warning");
        error1.innerHTML = "Number cannot be empty";
        allFieldsFilled = false;
    } else {
        number.classList.remove("warning");
        error1.innerHTML = "";
    }

    if (SigninDob === "") {
        dob.classList.add("warning");
        error6.innerHTML = "Date of Birth cannot be empty";
        allFieldsFilled = false;
    } else {
        dob.classList.remove("warning");
        error6.innerHTML = "";
    }

    if (!SigninMale && !SigninFemale) {
        error7.innerHTML = "Please select your gender";
        allFieldsFilled = false;
    } else {
        error7.innerHTML = "";
    }

    if (SigninEmail === "") {
        email.classList.add("warning");
        error2.innerHTML = "Email cannot be empty";
        allFieldsFilled = false;
    } else {
        email.classList.remove("warning");
        error2.innerHTML = "";
    }

    if (SigninPwd === "") {
        pwd.classList.add("warning");
        error3.innerHTML = "Password cannot be empty";
        allFieldsFilled = false;
    } else {
        pwd.classList.remove("warning");
        error3.innerHTML = "";
    }

    if (SigninR_pwd === "") {
        rpwd.classList.add("warning");
        error4.innerHTML = "Confirm Password cannot be empty";
        allFieldsFilled = false;
    } else {
        rpwd.classList.remove("warning");
        error4.innerHTML = "";
    }

    if (SigninPwd !== SigninR_pwd) {
        rpwd.classList.add("warning");
        error4.innerHTML = "Passwords do not match";
        allFieldsFilled = false;
    } else if (SigninR_pwd !== "") {
        rpwd.classList.remove("warning");
        error4.innerHTML = "";
    }

    if (!allFieldsFilled) {
        alert("Please enter your details");
        return;
    }

    localStorage.setItem("username", SigninName);
    localStorage.setItem("gender", SigninMale ? "male" : "female");
    localStorage.setItem("email", SigninEmail);
    localStorage.setItem("password", SigninPwd);

    alert("Signed in Successfully");

    window.open("../login.html");
});

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruitString = fruits.join(" ");   convert the array to a string first and then split it,
// console.log(fruitString.split(" ")); // Output: ["Banana", "Orange", "Apple", "Mango"]


let fruits = "Banana Orange AppleMango";
console.log(fruits.split(" "));
let fruitss = "BananaOrangeAppleMango";
console.log(fruitss.split(""));