// tombol dislike

let inputemail = document.querySelector(".email");
let inputpw = document.querySelector(".password");
let tombol = document.querySelector(".tombol")

tombol.disabled = true;

inputemail.addEventListener("input", success);
inputpw.addEventListener("input", success);

function success(){
    if (inputemail.value.length > 0 && inputpw.value.length > 0){
        tombol.disabled = false;
    } else{
        tombol.disabled = true;
    }
}

const pw = document.querySelector(".password");
const togglepw = document.querySelector("#toogle-password");

togglepw.addEventListener("click",intip);

function intip(){
    const type = pw.getAttribute("type") === "password" ? "text" : "password";
    pw.setAttribute("type", type);

    togglepw.classList,toggle("eye-slash");
}

