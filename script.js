// Particle.js configuration
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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 50) {
    navbar.style.background = "rgba(44, 62, 80, 1)";
  } else {
    navbar.style.background = "rgba(44, 62, 80, 0.8)";
  }
});
const timelineData = [
  {
    year: "2024-2025",
    organization: "FTC Robotics",
    title: "Programming 7172 Technical Difficulties",
    description:
      "8th/16000 Teams, 99.95% percintile",
  },
  {
    year: "2023-2024",
    organization: "ASPIRE",
    title: "Co-founder & Co-president",
    description:
      "Organized a summer camp for 30+ middle school students generating 1600+ USD for school robotics club.",
  },
  {
    year: "2024-2025",
    organization: "EmpowerIndiaEdu",
    title: "Social Media Marketing & Outreach Intern",
    description: "Designed social media content for donation campaigns.",
  },
  {
    year: "2024-2025",
    organization: "Inclusive Computing Initiative",
    title: "Artificial Intelligence Engineer",
    description:
      "Developed a deep learning algorithm for question difficulty adjustment.",
  },
  {
    year: "2023-2024",
    organization: "FTC Robotics",
    title: "Programming Lead of 12106 Vortex",
    description:
      "Lead the programming team: won control award at regional competition.",
  },
  {
    year: "2023-2024",
    organization: "VEX IQ Robotics",
    title: "Head Coach",
    description:
      "Coached students in VEX IQ robotics: advanced to the world championships.",
  },
  {
    year: "2023-2024",
    organization: "UIL Team",
    title: "Regional Level Competitor",
    description:
      "Competed in Computer Applications at district level (2nd place) and advanced to regionals.",
  },
];

function compareYears(a, b) {
  // Split the year range and take the last year for comparison
  const yearA = a.year.split("-").pop();
  const yearB = b.year.split("-").pop();

  // Compare years in descending order (most recent first)
  return yearB - yearA;
}
function createTimelineItems() {
  const timeline = document.querySelector(".timeline");

  // Sort the timelineData array
  const sortedData = timelineData.sort(compareYears);

  sortedData.forEach((data, index) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-year">${data.year}</div>
          <div class="timeline-org">${data.organization}</div>
          <div class="timeline-title">${data.title}</div>
          <div class="timeline-description">${data.description}</div>
        </div>
      `;
    timeline.appendChild(item);
  });
}
// Call this function when the DOM is loaded
document.addEventListener("DOMContentLoaded", createTimelineItems);

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    var mailtoLink =
      "mailto:abhirama.sonny@gmail.com" +
      "?subject=" +
      encodeURIComponent("Contact from " + name) +
      "&body=" +
      encodeURIComponent("Name: " + name + "\n\nMessage:\n" + message);

    window.location.href = mailtoLink;

    // Optional: Clear the form after submission
    this.reset();

    // Optional: Show a confirmation message
    alert("Thank you for your message! I will get back to you soon.");
  });
