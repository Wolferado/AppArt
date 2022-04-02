// Script dedicated for "Profile Settings" page.

var username = sessionStorage.getItem("username");
var userEmail = sessionStorage.getItem("email");

var infoContainer = document.getElementById("profile-info");
var checkboxes = infoContainer.getElementsByTagName("input");

for(let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', changeInterests);
}

(function populateSettings() {
    infoContainer.children[0].textContent = "Username: " + username + " ";
    infoContainer.children[1].textContent = "Email: " + userEmail + " ";

    let interests = sessionStorage.getItem("interests").split(" ");

    for(let i = 0; i < checkboxes.length; i++) {
        for(let j = 0; j < interests.length; j++) {
            if(checkboxes[i].value == interests[j]) {
                checkboxes[i].checked = true;
            }
        }
    }


    let signOutButton = document.getElementById("sign-out-button");
    signOutButton.addEventListener('click', function() {
    sessionStorage.clear();
    window.location.href = "index.html";
    });

    let deleteAccountButton = document.getElementById("delete-account-button");
    deleteAccountButton.addEventListener('click', deleteAccount);
})();

function deleteAccount() {
    for(let i = 0; i < localStorage.length; i++) {
        if(sessionStorage.getItem("username") == localStorage.getItem("username_" + i)) {
            if(window.confirm("Are you sure you want to delete your account?")) {
                localStorage.removeItem("username_" + i);
                localStorage.removeItem("email_" + i);
                localStorage.removeItem("interests_" + i);
                localStorage.removeItem("password_" + i);
                sessionStorage.clear();
                window.location.href = "index.html";
            }
        }
    }
}

function changeInterests() {
    let interests = "";

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            interests += checkboxes[i].value + " ";
        }
    }

    for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.getItem("username_" + i) == sessionStorage.getItem("username")) {
            localStorage.setItem("interests_" + i, interests);
        }
    }

    sessionStorage.setItem("interests", interests);

    console.log("box clicked");
}