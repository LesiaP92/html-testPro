function printChoise() {
    let userInput;
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
        userInput = prompt("Введіть число більше 100:");
        if (userInput === null) {
            console.log("Ввід скасовано.");
            return;
        }

        userInput = Number(userInput);

        if (userInput > 100) {
            console.log("Ви ввели:", userInput);
            return;
        }

        alert("Число повинно бути більше 100. Спробуйте ще раз.");
        attempts++;
    }

    console.log("Останнє введення:", userInput);
}

printChoise();
