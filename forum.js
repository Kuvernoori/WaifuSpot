document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleFormSubmit();
    });

    function handleFormSubmit() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address. (example@domain.tld)');
            return;
        }

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Your message has been sent successfully!');
        contactForm.reset();
    }
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
