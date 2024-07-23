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

// Shape formation code
const canvas = document.getElementById("shape-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
const interests = ["PYTHON", "JAVA", "C", "JS"];
let currentInterest = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth + 100;
  canvas.height = window.innerHeight;
}

resizeCanvas();

class Particle {
  constructor(x, y, targetX, targetY) {
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.radius = 2;
    this.speed = 0.0001; // Adjust speed for a 10-second transition
    this.progress = 0; // Progress towards target
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fill();
  }

  update() {
    this.progress += this.speed;
    if (this.progress > 1) this.progress = 1;

    const easedProgress = this.ease(this.progress);

    this.x += (this.targetX - this.x) * easedProgress;
    this.y += (this.targetY - this.y) * easedProgress;
  }

  ease(t) {
    return t * t * (3 - 2 * t); // Smoothstep easing function
  }
}

function initializeParticles() {
  const numberOfParticles = 550; // Adjust as necessary
  for (let i = 0; i < numberOfParticles; i++) {
    const particle = new Particle(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );
    particles.push(particle);
  }
}

function updateParticleTargets(text) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.font = "bold 100px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  let targetIndex = 0;

  for (let y = 0; y < canvas.height; y += 5) {
    for (let x = 0; x < canvas.width; x += 5) {
      const index = (y * canvas.width + x) * 4;
      if (data[index + 3] > 128 && targetIndex < particles.length) {
        particles[targetIndex].targetX = x;
        particles[targetIndex].targetY = y;
        particles[targetIndex].progress = 0; // Reset progress for smooth transition
        targetIndex++;
      }
    }
  }

  // For remaining particles, reset their targets to random positions
  for (let i = targetIndex; i < particles.length; i++) {
    particles[i].targetX = Math.random() * canvas.width;
    particles[i].targetY = Math.random() * canvas.height;
    particles[i].progress = 0; // Reset progress for smooth transition
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

function changeInterest() {
  resizeCanvas();
  currentInterest = (currentInterest + 1) % interests.length;
  updateParticleTargets(interests[currentInterest]);
}

initializeParticles();
updateParticleTargets(interests[currentInterest]);
animate();
setInterval(changeInterest, 20000);

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

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    this.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    this.innerHTML = '<i class="fas fa-sun"></i>';
  }
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
    year: "2023-2024",
    organization: "ASPIRE",
    title: "Co-founder & Co-president",
    description:
      "Organized a summer camp for 30+ middle school students generating 1600+ USD for school robotisc club.",
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
    title: "Co-Head of AI Development",
    description:
      "Developed a deep learning algorithm for question difficulty adjustment.",
  },
  {
    year: "2023-2024",
    organization: "FTC Robotics",
    title: "Programming Lead",
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
      "Competed in Computer Applications at district level (2nd place) and advanced to reigonals.",
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
