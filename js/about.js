document.addEventListener("DOMContentLoaded", () => {
  // Add interactivity for hover animations or dynamic content loading
  console.log("About page loaded!");

  // Example: Dynamic team member data (can be fetched from an API or JSON file)
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "assets/images/team1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Event Manager",
      image: "assets/images/team2.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Creative Director",
      image: "assets/images/team3.jpg",
    },
  ];

  const teamContainer = document.querySelector(".team");

  // Dynamically populate team members
  teamMembers.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("team-member");

    memberCard.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    `;

    teamContainer.appendChild(memberCard);
  });
});