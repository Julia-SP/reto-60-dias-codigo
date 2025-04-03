document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -200, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: 200, behavior: "smooth" });
    });
});
