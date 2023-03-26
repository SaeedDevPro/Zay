// Btn Mobile
let menu = document.querySelector(".menu");
let btnNavbar = document.querySelector(".btnNavbar");
btnNavbar.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Carousel
let next = document.querySelector("#right");
let prev = document.querySelector("#left");
let slides = document.querySelectorAll(".slide");
let counter = 0;

next.addEventListener("click", () => {
  counter++;
  if (counter == slides.length) {
    counter = 0;
  }
  getSlideActive();
});
prev.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  getSlideActive();
});
window.onload = function () {
  setInterval(() => {
    counter++;
    if (counter == slides.length) {
      counter = 0;
    }
    getSlideActive();
  }, 30000);
};
function getSlideActive() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[counter].classList.add("active");
}
