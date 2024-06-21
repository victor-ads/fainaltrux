// Simple script to demonstrate an additional interaction or dynamic feature.
document.addEventListener("DOMContentLoaded", function() {
    const policySection = document.getElementById('privacy-policy');
    
    policySection.addEventListener('mouseover', function() {
        policySection.style.backgroundColor = '#e8f5e9';
    });

    policySection.addEventListener('mouseout', function() {
        policySection.style.backgroundColor = '#fff';
    });
});
