var username = sessionStorage.getItem("username");
var userEmail = sessionStorage.getItem("email");

var changeForm = document.getElementById("change-form");
var profileInfo = document.getElementById("profile-info");

(function populateSettings() {
    let infoContainer = document.getElementById("profile-info");
    infoContainer.children[0].textContent = "Username: " + username + " ";
    infoContainer.children[1].textContent = "Email: " + userEmail + " ";

    let changeInformationButton = document.getElementById("change-info-button");
    changeInformationButton.addEventListener('click', changeInformation);

    let signOutButton = document.getElementById("sign-out-button");
    signOutButton.addEventListener('click', function() {
    sessionStorage.clear();
    window.location.href = "index.html";
    });

    let deleteAccountButton = document.getElementById("delete-account-button");
    deleteAccountButton.addEventListener('click', deleteAccount);
})();

function changeInformation() {
    if(changeForm.style.display == "none") {
        changeForm.style.display = "flex";
        profileInfo.style.display = "none";
    }
    else {
        changeForm.style.display = "none";
        profileInfo.style.display = "flex";
    }
}

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