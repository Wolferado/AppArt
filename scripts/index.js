//Script dedicated to landing page.

const events = [];

var eventContainer = document.getElementById("event-container");

(function populateEvents() {
    if(events.length == 0) {
        let notification = document.createElement("h3");
        notification.textContent = "There are no new events available.";
        eventContainer.appendChild(notification);
    }
    else {

    }
})();