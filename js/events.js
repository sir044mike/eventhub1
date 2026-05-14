// Dynamically load event data
document.addEventListener("DOMContentLoaded", () => {
  const events = [
    {
      title: "Music Festival",
      description: "Join us for an unforgettable music experience.",
    },
    {
      title: "Tech Conference",
      description: "Explore the latest in technology and innovation.",
    },
    {
      title: "Art Exhibition",
      description: "Discover the beauty of modern art.",
    },
    {
      title: "Food Carnival",
      description: "Taste the best cuisines from around the world.",
    },
  ];

  const eventCardsContainer = document.querySelector(".event-cards");

  // Generate event cards dynamically
  events.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.description}</p>
    `;

    eventCardsContainer.appendChild(card);
  });
});