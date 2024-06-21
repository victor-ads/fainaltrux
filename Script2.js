document.getElementById('bookUsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic validation
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const projectType = document.getElementById('projectType').value;
    const projectLocation = document.getElementById('projectLocation').value;
    const projectStage = document.getElementById('projectStage').value;
    const landmark = document.getElementById('landmark').value;
    const description = document.getElementById('description').value;
    
    if (!name || !phone || !email || !projectType || !projectLocation || !projectStage || !landmark || !description) {
        alert('Please fill out all fields.');
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Phone number validation (basic example)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    // Form submission logic
    alert('Form submitted successfully!');
    this.reset();
});

// Populate country code dropdown
const countryCodes = [
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    // Add more country codes as needed
];

const countryCodeSelect = document.getElementById('countryCode');
countryCodes.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = `${country.country} (${country.code})`;
    countryCodeSelect.appendChild(option);
});
