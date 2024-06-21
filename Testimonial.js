document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    let currentIndex = 0;

    function showNextTestimonial() {
        const currentTestimonial = testimonials[currentIndex];
        const nextIndex = (currentIndex + 1) % totalTestimonials;
        const nextTestimonial = testimonials[nextIndex];

        currentTestimonial.classList.remove('active');
        nextTestimonial.classList.add('active');

        // Animate text
        animateText(nextTestimonial.querySelector('.testimonial-text'), 'slide-in');

        currentIndex = nextIndex;
    }

    function animateText(element, animationClass) {
        element.classList.remove(animationClass);
        void element.offsetWidth; // Trigger reflow
        element.classList.add(animationClass);
    }

    testimonials[currentIndex].classList.add('active'); // Show the first testimonial initially
    setInterval(showNextTestimonial, 5000); // Auto rotate every 5 seconds
});
