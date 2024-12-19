let userLink = '';

document.getElementById('setLinkButton').addEventListener('click', function () {
    userLink = prompt('Введіть посилання (URL):', 'https://');
    if (userLink) {
        alert('Посилання збережено!');
    } else {
        alert('Спробуй ще! Посилання не збережено.');
    }
});

document.getElementById('redirectButton').addEventListener('click', function () {
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert('Спочатку введіть посилання!');
    }
});