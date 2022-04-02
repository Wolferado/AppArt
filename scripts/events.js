const events = [];

var eventPageContainer = document.getElementById("event-section");

(function populateEventPage() {
    if(events.length == 0) {
        let notification = document.createElement("h2");
        notification.textContent = "There are no new events available.";
        eventPageContainer.appendChild(notification);
    }
})();