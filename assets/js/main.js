document.addEventListener("DOMContentLoaded", function() {
    new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: {
                value: "#edbbf2"
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 6
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 19.18081918081918,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#edbbf2",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        nb: 80,
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}, false);

// JavaScript for additional animations
document.addEventListener("DOMContentLoaded", function() {
    const userProjects = document.querySelectorAll(".user-projects");
  
    userProjects.forEach(function(project) {
      project.addEventListener("mouseenter", function() {
        // Scale the project on hover
        this.style.transform = "scale(1.05)";
        
        // Change border color on hover
        this.style.borderColor = "#ff6347"; // Tomato color
        
        // Add shadow effect
        this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
      });
  
      project.addEventListener("mouseleave", function() {
        // Reset transformations on mouse leave
        this.style.transform = "none";
        
        // Reset border color on mouse leave
        this.style.borderColor = "#ccc";
        
        // Remove shadow effect
        this.style.boxShadow = "none";
      });
    });
  });
  