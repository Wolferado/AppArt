//Script dedicated to check, if user logged in.

(function checkIfUserLoggedIn() {
    if(sessionStorage.getItem("username") != null) {
        let profileLink = document.getElementsByTagName("a")[4];
        profileLink.style.border = "none";
        profileLink.href = "profile_settings.html";
        profileLink.textContent = sessionStorage.getItem("username") + " - profile";
    }
})();