document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();


    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();


    clearErrors();

    let isValid = true;


    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }


    if (message.length < 5) {
        document.getElementById('messageError').textContent = 'Message must be at least 5 characters.';
        isValid = false;
    }


    if (!phone.startsWith('+380') || phone.length !== 13 || isNaN(phone.slice(1))) {
        document.getElementById('phoneError').textContent = 'Phone number must start with +380 and have 12 digits.';
        isValid = false;
    }


    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Email must be valid.';
        isValid = false;
    }


    if (isValid) {
        console.log({
            name: name,
            message: message,
            phone: phone,
            email: email,
        });
        alert('Form submitted successfully!');
    }
});


function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
}
