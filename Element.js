let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function moveCarousel(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

// Automatic sliding
setInterval(() => {
    moveCarousel(1);
}, 5000); // Change slide every 5 seconds (adjust as needed)
