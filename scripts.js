
// JavaScript for animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add any interactive behavior or animation setup here
    console.log("Website loaded successfully");
});


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0'; // Set current slide visible, others hidden
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Initial display
    showSlide(currentIndex);

    // Change slide every 5 seconds (adjust as needed)
    setInterval(nextSlide, 6000);
});

function showSpecificSlide(slideId) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.opacity = '0'; // Hide all slides
        slide.style.zIndex = '0';  // Move slides to the back
    });

    const targetSlide = document.getElementById(slideId);
    if (targetSlide) {
        targetSlide.style.opacity = '1'; // Show the target slide
        targetSlide.style.zIndex = '1';  // Bring it to the front
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('aboutModal');
    const aboutLink = document.getElementById('about-link');
    const closeButton = document.querySelector('.modal .close');

    // Show modal when the "About" link is clicked
    aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        modal.style.display = 'block';
    });

    // Close modal when the "X" button is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactModal = document.getElementById('contactModal');
    const contactLink = document.getElementById('contact-link');
    const closeButton = contactModal.querySelector('.close');

    // Show modal when the "Contact" link is clicked
    contactLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        contactModal.style.display = 'block';
    });

    // Close modal when the "X" button is clicked
    closeButton.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
});

