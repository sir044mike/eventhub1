document.addEventListener("DOMContentLoaded", () => {
  const eventCards = document.querySelector(".event-cards");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Scroll left
  prevBtn.addEventListener("click", () => {
    eventCards.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  // Scroll right
  nextBtn.addEventListener("click", () => {
    eventCards.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });
});