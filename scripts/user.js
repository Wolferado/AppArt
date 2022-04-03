//Script dedicated to check, if user logged in and open menu on mobile.

(function checkIfUserLoggedIn() {
    if(sessionStorage.getItem("username") != null) {
        let profileLink = document.getElementsByTagName("a")[5];
        profileLink.style.border = "none";
        profileLink.href = "profile_settings.html";
        profileLink.textContent = sessionStorage.getItem("username") + " - profile";
    }
})();

var menuSwitch = document.getElementById("switch");
menuSwitch.addEventListener('click', openMenu);

function openMenu() {
    let navigation = document.getElementsByTagName("nav")[0];
    
    if(navigation.style.display == "none") {
        navigation.style.display = "flex";
    }
    else {
        navigation.style.display = "none";
    }
}