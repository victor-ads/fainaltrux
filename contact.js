document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    // Validate form
    let valid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        valid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        valid = false;
    }

    if (valid) {
        // Submit form or send data to server
        alert('Thank you for reaching out! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

  // Smooth scrolling effect
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

