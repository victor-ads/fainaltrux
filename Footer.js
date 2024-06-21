// Dynamic date script
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
