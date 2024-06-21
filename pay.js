document.addEventListener('DOMContentLoaded', () => {
    const paymentButton = document.getElementById('payment-button');

    paymentButton.addEventListener('click', () => {
        window.location.href = 'Payment.html';
    });
});
