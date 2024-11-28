document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully");

    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let slideshowInterval;

    // Display a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0'; // Show only the active slide
        });
    }

    // Move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Loop through slides
        showSlide(currentIndex);
    }

    // Start the slideshow
    function startSlideshow() {
        slideshowInterval = setInterval(nextSlide, 6000); // 6-second interval
    }

    // Stop the slideshow
    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }

    // Function to display a specific slide by ID
    function showSpecificSlide(slideId, event) {
        if (event) event.preventDefault(); // Prevent default link behavior
        stopSlideshow(); // Pause the slideshow

        slides.forEach((slide) => {
            slide.style.opacity = slide.id === slideId ? '1' : '0'; // Highlight the requested slide
        });

        // Smooth scroll to the specific slide
        const slideElement = document.getElementById(slideId);
        slideElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Setup slideshow
    if (slides.length > 0) {
        showSlide(currentIndex);
        startSlideshow();
    }

    // Add event listeners for sub-menu links
    document.getElementById('link-slide1')?.addEventListener('click', (e) => {
        showSpecificSlide('slide1', e);
    });

    document.getElementById('link-slide2')?.addEventListener('click', (e) => {
        showSpecificSlide('slide2', e);
    });

    // Modal functionality for the "About" section
    const aboutModal = document.getElementById('aboutModal');
    const aboutLink = document.getElementById('about-link');
    const aboutCloseButton = aboutModal?.querySelector('.close');

    aboutLink?.addEventListener('click', (event) => {
        event.preventDefault();
        aboutModal.style.display = 'block';
    });

    aboutCloseButton?.addEventListener('click', () => {
        aboutModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === aboutModal) {
            aboutModal.style.display = 'none';
        }
    });

    // Modal functionality for the "Contact" section
    const contactModal = document.getElementById('contactModal');
    const contactLink = document.getElementById('contact-link');
    const contactCloseButton = contactModal?.querySelector('.close');

    contactLink?.addEventListener('click', (event) => {
        event.preventDefault();
        contactModal.style.display = 'block';
    });

    contactCloseButton?.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Navbar active link styling
    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links a.active')?.classList.remove('active');
            link.classList.add('active');
        });
    });

    // Navbar toggle functionality
    const navbar = document.getElementById('navbar');
    document.querySelector('.hamburger-menu')?.addEventListener('click', () => {
        navbar?.classList.toggle('active');
    });
});
