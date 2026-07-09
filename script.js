function login(){

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

if(username=="" || password==""){

alert("Lengkapi Username dan Password");

return;

}

localStorage.setItem("username",username);

window.location="dashboard.html";

}
