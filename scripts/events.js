const events = ["Event", "Event", "Event", "Event"];

var eventPageContainer = document.getElementById("event-section");

(function populateEventPage() {
    if(events.length == 0) {
        let notification = document.createElement("h2");
        notification.textContent = "There are no new events available.";
        eventPageContainer.appendChild(notification);
    }
    else {
        for(let i = 0; i < events.length; i++) {
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            let title = document.createElement("h2");
            title.textContent = "Title";
            let description = document.createElement("p");
            description.textContent = "Description"
            let image = document.createElement("img");
            image.src = "/materials/Riga_Park_Centre_Cropped.png";

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(image);
            eventPageContainer.appendChild(card);
        }
    }
})();

function openEvent() {

}