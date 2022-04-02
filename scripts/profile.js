var title = document.getElementById("form-title");
var question = document.getElementById("question");
var questionLink = document.getElementById("question-link");

var signInForm = document.getElementById("sign-in-form");
var signInUsername = signInForm.getElementsByTagName("input")[0];
var signInPassword = signInForm.getElementsByTagName("input")[1];
var signInButton = signInForm.getElementsByTagName("input")[2];;

var registerForm = document.getElementById("registration-form");
var registerUsername = registerForm.getElementsByTagName("input")[0];
var registerEmail = registerForm.getElementsByTagName("input")[1];
var registerPassword = registerForm.getElementsByTagName("input")[4];
var registerConfirmPassword = registerForm.getElementsByTagName("input")[5];
var registerButton = registerForm.getElementsByTagName("input")[6];


questionLink.addEventListener('click', changeForms);
registerButton.addEventListener('click', registerUserIntoLocalStorage);
signInButton.addEventListener('click', signInUser);

function changeForms() {
    if(question.textContent == "Don't have an account? ") {
        question.textContent = "Have an account? ";
        questionLink.textContent = "Sign In!";
        title.textContent = "Registration";

        signInForm.style.display = "none";
        registerForm.style.display = "flex";
    }
    else {
        question.textContent = "Don't have an account? ";
        questionLink.textContent = "Register!";
        title.textContent = "Sign In";

        registerForm.style.display = "none";
        signInForm.style.display = "flex";
    }
}

function registerUserIntoLocalStorage() {
    if(registerUsername.value.trim() == "") {
        registerUsername.style.border = "3px #FF0000 solid";
        return;
    }
    else if (registerEmail.value.trim() == "") {
        registerEmail.style.border = "3px #FF0000 solid";
        return;
    }  
    else if (registerPassword.value.trim() == "") {
        registerPassword.style.border = "3px #FF0000 solid";
        return;
    }
    else if (registerConfirmPassword.value.trim() == "") {
        registerConfirmPassword.style.border = "3px #FF0000 solid";
        return;
    }
    else if (registerConfirmPassword.value != registerPassword.value) {
        registerPassword.style.border = "3px #FF0000 solid";
        registerConfirmPassword.style.border = "3px #FF0000 solid";
        return;
    }
    
    for(let i = 0; i < localStorage.length; i++) {
        if(registerUsername.value == localStorage.getItem("username_" + i)) {
            registerButton.style.border = "3px #FF0000 solid";
            return;
        }
    }

    let currentRecord = localStorage.length / 4;

    localStorage.setItem("username_" + currentRecord, registerUsername.value);
    localStorage.setItem("password_" + currentRecord, registerPassword.value);
    localStorage.setItem("email_" + currentRecord, registerEmail.value);

    // TODO: Fix to save interests
    let interests = "";
    for(let i = 0; i < registerForm.getElementsByClassName("messageCheckbox").length; i++) {
        if(registerForm.getElementsByClassName("messageCheckbox")[i].checked) {
            interests += registerForm.getElementsByClassName("messageCheckbox")[i].value + " ";
        }
    }
    console.log(registerForm.getElementsByClassName("messageCheckbox"));

    localStorage.setItem("interests_" + currentRecord, interests);

    window.location = "profile.html";
}

function signInUser() {
    for(let i = 0; i < localStorage.length; i++) {
        if(signInUsername.value == localStorage.getItem("username_" + i)) {
            if(signInPassword.value == localStorage.getItem("password_" + i)) {
                sessionStorage.setItem("username", signInUsername.value);
                sessionStorage.setItem("email", localStorage.getItem("email_" + i));
                sessionStorage.setItem("interests", localStorage.getItem("interests_" + i));
                window.location.href="index.html";
            }
            else {
                signInUsername.style.border = "3px #FF0000 solid";
                signInPassword.style.border = "3px #FF0000 solid";
            }
        }
    }
}