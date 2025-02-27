let form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let loginName = document.getElementById("email").value;
    let loginPwd = document.getElementById("pwd").value;
    console.log(loginName, loginPwd);

    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    console.log(username, password);

    if (loginName =="" || loginPwd == ""){
        alert("Please enter your details");
    }else if (loginName == username && loginPwd == password){
        alert("logged in Successfully");
        // window.open("./parallax/index.html");
        window.open("./api_new/api.html");
        window.location.reload();
    }else{
        alert("incorrect details");
    }
});