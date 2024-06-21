document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInElements = document.querySelectorAll('.slide-in');

    const handleScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });

        slideInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger scroll event to animate elements on load
    handleScroll();
});
