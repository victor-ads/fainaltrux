document.getElementById('recruitmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Form validation
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const specialization = document.getElementById('specialization').value;
    const image = document.getElementById('image').files[0];
    const cv = document.getElementById('cv').files[0];
    const idCard = document.getElementById('idCard').files[0];
    const terms = document.getElementById('terms').checked;

    if (!name || !phone || !email || !specialization || !image || !cv || !idCard || !terms) {
        alert('Please fill out all fields and accept the terms and conditions.');
        return;
    }

    // Further validation if needed
    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    alert(' submitted successfully!');
    // Here you can add the code to submit the form data to the server
});
