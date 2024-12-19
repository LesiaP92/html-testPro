let btnContainer = document.getElementById("btnContainer");
btnContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            let buttonText = event.target.textContent;
            alert('Ви натиснули: ' + buttonText);
        }
    }
)