//Script dedicated to landing page. 

const eventTitles = ["Sketch in Nature", "Drink and Draw", "Sketching", "Sketch Still Life", "Sketch and Chips", "Sketch Sketch"];
const eventDescriptions = ["Experience the long awaited drawing vibes beyond 4 walls", "Vine is never bad for the creativity, especially with the right amount", "Sketching is never a bad thing, especially in practice", "Being still has its own beauty that you can express", "Food makes our body works, food for our creativy helps us do our best", "Small sketches on different topics can provide a huge idea"];
const eventImages = ["materials/sketch_in_nature.png", "materials/draw_and_drink.png", "materials/sketch_3.png", "materials/Sketch_still_life.png", "materials/sketch_and_chips.png", "materials/sketch_sketch.png"];

var eventContainer = document.getElementById("event-container");

(function populateEvents() {
    if(eventTitles.length == 0) {
        let notification = document.createElement("h3");
        notification.textContent = "There are no new events available.";
        eventContainer.appendChild(notification);
    }
    else {
        for(let i = 0; i < eventTitles.length; i++) {
            let box = document.createElement("div");
            box.setAttribute("class", "event");
            let image = document.createElement("img");
            image.setAttribute("src", eventImages[i]);
            let title = document.createElement("h3");
            title.textContent = "EVENT - " + eventTitles[i];
            let description = document.createElement("p");
            description.textContent = eventDescriptions[i];
            let button = document.createElement("input");
            button.type = "button";
            button.value = "Take AppArt";
            button.addEventListener('click', changeToEventPage);
            let link = document.createElement("a");
            link.textContent = "Learn More";

            box.appendChild(image);
            box.appendChild(title);
            box.appendChild(description);
            box.appendChild(button);
            box.appendChild(link);
            eventContainer.appendChild(box);
        }
    }
})();

function changeToEventPage() {
    window.location.href="events.html";
}