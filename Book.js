document.getElementById('proceed-to-payment').addEventListener('click', function(event) {
    event.preventDefault();
    var form = document.getElementById('booking-form');
    if (form.checkValidity()) {
        window.location.href = 'payment.html';
    } else {
        form.reportValidity();
    }
});
