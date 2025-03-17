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
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the default page reload

      const formData = new FormData(contactForm);

      try {
          const response = await fetch("https://formspree.io/f/mnnpngog", {
              method: "POST",
              body: formData,
              headers: { "Accept": "application/json" }
          });

          if (response.ok) {
              showSuccessMessage();
              contactForm.reset(); // Clear the form after successful submission
          } else {
              alert("Oops! Something went wrong.");
          }
      } catch (error) {
          alert("Error submitting the form. Please try again.");
      }
  });

  function showSuccessMessage() {
      const successMessage = document.createElement("div");
      successMessage.innerText = "Message sent successfully!";
      successMessage.classList.add("success-popup");
      document.body.appendChild(successMessage);

      setTimeout(() => {
          successMessage.remove();
      }, 3000); // Hide after 3 seconds
  }
});

