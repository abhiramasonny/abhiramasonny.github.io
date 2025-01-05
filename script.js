// Particle.js configuration remains unchanged
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: { push: { particles_nb: 4 } },
  },
  retina_detect: true,
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 50) {
    navbar.style.background = "rgba(44, 62, 80, 1)";
  } else {
    navbar.style.background = "rgba(44, 62, 80, 0.8)";
  }
});

// Removed dynamic timeline creation logic
