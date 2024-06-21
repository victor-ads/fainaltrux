document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('hero-title');

    heroTitle.animate([
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards'
    });
});
