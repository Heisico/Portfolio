const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

const musicBtn = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");
const music = document.getElementById("background-music");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicIcon.src = "assets/headphoneimg.png"; // Default icon
  } else {
    music.play();
    musicIcon.src = "assets/headphoneimg.png"; // Change icon when playing
  }
  isPlaying = !isPlaying;
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("User visited the site at " + new Date().toLocaleString());
  
  // Track user interactions
  document.addEventListener("click", function (event) {
      console.log("User clicked on:", event.target);
  });

  document.addEventListener("mousemove", function (event) {
      console.log("Mouse moved at:", event.clientX, event.clientY);
  });

  document.addEventListener("scroll", function () {
      console.log("User scrolled the page.");
  });
});


