
function handleSubmit(event) {
    event.preventDefault();
    
    const userEmail = document.getElementById('emailInput').value;
    const mailtoLink = `mailto:hinna.zeejah22@my.stjohns.edu?subject=Portfolio Contact&body=From: ${userEmail}%0D%0A%0D%0A`; // %0D%0A adds line breaks
    
    window.location.href = mailtoLink;
    
    // Clear the form after submission
    document.getElementById('contactForm').reset();
}

// Add this to your existing script.js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const typewriter = entry.target;
            typewriter.classList.remove('typing');
            // Trigger reflow
            void typewriter.offsetWidth;
            typewriter.classList.add('typing');
        }
    });
}, {
    threshold: 0.5
});

// Start observing the typewriter element
const typewriterElement = document.querySelector('.typewriter');
if (typewriterElement) {
    observer.observe(typewriterElement);
}