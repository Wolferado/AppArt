// Script to open an event.

const eventDatetimes = ['2022-12-01 08:00:00', '2022-05-15 12:30:00', '2022-12-01 08:00:00', '2022-05-15 12:30:00', '2022-12-01 08:00:00', '2022-05-15 12:30:00'];
const eventMaxPlaces = [10, 20, 30, 40, 50, 60];

var eventPageContainer = document.getElementById("event-section");
var eventCards = document.getElementsByTagName("div");
var overlayContainer = document.getElementById("intro-section");

for (let i = 0; i < eventCards.length; i++) {
    let button = eventCards[i].getElementsByTagName("input")[0];
    button.removeEventListener('click', openEvent);
    button.addEventListener('click', function() {
        openEvent(i-1);
    });
}

function openEvent(number) {
    if(number < 0) {
        return;
    }
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    let overlayScreen = document.createElement("div");
    overlayScreen.id = "overlay-screen";

    let overlayBox = document.createElement("div");
    overlayBox.setAttribute("class", "event-expand");
    let title = document.createElement("h2");
    title.textContent = "Event - " + eventTitles[number];
    let description = document.createElement("p");
    description.textContent = eventDescriptions[number];
    let image = document.createElement("img");
    image.src = eventImages[number];
    let dateTime = document.createElement("h3");
    dateTime.textContent = "Date and Time: " + eventDatetimes[number];
    let placeCount = document.createElement("h3");
    placeCount.textContent = "Max Places: " + eventMaxPlaces[number];
    let buttonClose = document.createElement("input");
    buttonClose.type = "button";
    buttonClose.addEventListener('click', function() {
        overlayContainer.removeChild(overlayScreen);
        document.getElementsByTagName("body")[0].style.overflowY = "visible";
    });
    buttonClose.value = "Close";
    let buttonRegister = document.createElement("input");
    buttonRegister.type = "button";
    buttonRegister.value = "Register";

    overlayBox.appendChild(title);
    overlayBox.appendChild(description);
    overlayBox.appendChild(image);
    overlayBox.appendChild(dateTime);
    overlayBox.appendChild(placeCount);
    overlayBox.appendChild(buttonClose);
    overlayBox.appendChild(buttonRegister);
    overlayScreen.appendChild(overlayBox);
    overlayContainer.appendChild(overlayScreen);

    return;
}