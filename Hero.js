document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const heroContent = document.querySelector('.hero-content');
    const heading = heroContent.querySelector('h1');
    const paragraph = heroContent.querySelector('p');
    let currentIndex = 0;

    function showNextSlide() {
        // Animate out the current text
        heading.classList.remove('visible');
        paragraph.classList.remove('visible');

        // Wait for the text to fade out before changing the slide and text
        setTimeout(() => {
            slides[currentIndex].classList.remove('visible');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('visible');

            // Animate in the new text
            heading.classList.add('visible');
            paragraph.classList.add('visible');
        }, 1000); // Time must match the CSS transition duration
    }

    setInterval(showNextSlide, 5000);

    // Initially show the first slide and text
    slides[currentIndex].classList.add('visible');
    heading.classList.add('visible');
    paragraph.classList.add('visible');
});