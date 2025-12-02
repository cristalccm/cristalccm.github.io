document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ['Web Developer', 'Designer', 'Innovator'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    };
    new Typed('.auto-type', options);
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active"); 
        });
    }
});

