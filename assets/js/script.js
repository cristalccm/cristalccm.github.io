document.addEventListener("DOMContentLoaded", function () {
  const autoType = document.querySelector(".auto-type");

  if (autoType) {
    new Typed(".auto-type", {
      strings: ["Web Designer", "Front-End Developer", "UX Designer"],
      typeSpeed: 100,
      backSpeed: 20,
      backDelay: 1000,
      loop: true
    });
  }

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }
});

