document.addEventListener("DOMContentLoaded", () => {
  const eventForm = document.getElementById("create-event-form");
  const eventList = document.getElementById("event-list");

  // Array to store events
  const events = [];

  // Handle form submission
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const title = document.getElementById("event-title").value;
    const date = document.getElementById("event-date").value;
    const description = document.getElementById("event-description").value;

    // Create event object
    const event = { title, date, description };

    // Add event to the array
    events.push(event);

    // Update the event list
    updateEventList();

    // Clear the form
    eventForm.reset();
  });

  // Update the event list table
  function updateEventList() {
    eventList.innerHTML = "";

    events.forEach((event, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${event.title}</td>
        <td>${event.date}</td>
        <td>${event.description}</td>
        <td>
          <button class="action-btn edit-btn" onclick="editEvent(${index})">Edit</button>
          <button class="action-btn delete-btn" onclick="deleteEvent(${index})">Delete</button>
        </td>
      `;

      eventList.appendChild(row);
    });
  }

  // Delete event
  window.deleteEvent = (index) => {
    events.splice(index, 1);
    updateEventList();
  };

  // Edit event (placeholder for future functionality)
  window.editEvent = (index) => {
    alert("Edit functionality coming soon!");
  };
});