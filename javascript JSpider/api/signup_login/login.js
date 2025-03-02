let form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let loginName = document.getElementById("email").value;
    let loginPwd = document.getElementById("pwd").value;
    let loginTerm = document.getElementById("checkbox").checked;
    console.log(loginName, loginPwd);

    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    console.log(username, password);

    if (loginName =="" || loginPwd == "" || loginTerm == ""){
        alert("Please enter your details");
    }else if (loginName == username && loginPwd == password){
        alert("logged in Successfully");
        window.open("./parallax/index.html");
        // window.open("./api_new/api.html");
        window.location.reload();
    }else{
        alert("incorrect details");
        window.location.reload();
    }
});

// let password = document.getElementById('pwd')
// let show_pwd = document.getElementById('show_pwd')
// let emoji = document.getElementById('emoji')
// show_pwd.addEventListener('click', (e)=>{
// e.preventDefault()
// if(password.value != ""){
//     if(password.type == "password"){
//         password.type = "text"
//         show_pwd.innerHTML = "hide password"
//         emoji.innerHTML = "🙈"
//     }else{
//         password.type = "password"
//         show_pwd.innerHTML = "show password"
//         emoji.innerHTML = "👁"
//     }
// }else{
//     alert("Please Enter Your Password");
// }
// })


let password = document.getElementById('pwd')
// let show_pwd = document.getElementById('show_pwd')
let emoji = document.getElementById('emoji')
emoji.addEventListener('click', (e)=>{
e.preventDefault()
if(password.value != ""){
    if(password.type == "password"){
        password.type = "text"
        // show_pwd.innerHTML = "hide password"
        emoji.innerHTML = "🙈"
    }else{
        password.type = "password"
        // show_pwd.innerHTML = "show password"
        emoji.innerHTML = "👁"
    }
}else{
    alert("Please Enter Your Password");
}
})

let username = document.getElementById('email')
let submit_btn = document.getElementById('submit_btn')
let error1 = document.getElementById('error1')
let error2 = document.getElementById('error2')

username.addEventListener("keyup", (e) => {
    e.preventDefault();
    let validation = username.value.length < 8;
    if (validation) {
        username.classList.add("warning");
        username.classList.remove("success");
        submit_btn.disabled = true;
        error1.innerHTML = "please enter maximum 8 char";
    } else {
        username.classList.add("success");
        username.classList.remove("warning");
        submit_btn.disabled = false;
        error1.innerHTML = "";
    }
});

password.addEventListener("keyup", (e) => {
    e.preventDefault();
    let validation = password.value.length < 8;
    if (validation) {
        password.classList.add("warning");
        password.classList.remove("success");
        submit_btn.disabled = true;
        error2.innerHTML = "please enter maximum 8 char";
    } else {
        password.classList.add("success");
        password.classList.remove("warning");
        submit_btn.disabled = false;
        error2.innerHTML = "";
    }
});



