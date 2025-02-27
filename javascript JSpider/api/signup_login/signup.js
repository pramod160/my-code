let form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
let fname = document.getElementById("fname").value;
let number = document.getElementById("number").value;
let email = document.getElementById("email").value;
let pwd = document.getElementById("pwd").value;
let r_pwd = document.getElementById("rpwd").value;

if (fname == "" || number == "" || email == "" || pwd == "" || r_pwd == "") {
    alert("Please fill all the fields");
} else if (pwd !== r_pwd) { 
    alert("Passwords do not match");
} else {
    console.log(fname, number, pwd, r_pwd, email);
    localStorage.setItem("username", fname);
    localStorage.setItem("password", pwd);

        window.open("./login.html");
            // window.location.href = "./login.html"; // Make sure the file exists
            window.location.reload();
}
});