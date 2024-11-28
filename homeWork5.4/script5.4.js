while (true) {
    const input = prompt("Введіть число:");

    if (input === null || input.trim() === "") {
        alert("Програму завершено.");
        break;
    }

    const N = Number(input);

    if (isNaN(N) || !Number.isInteger(N)) {
        alert("Спробуйте ще раз.");
        continue;
    }

    if (N <= 1) {
        alert(`${N} не є простим числом.`);
    } else {
        let isPrime = true;

        for (let i = 2; i < N; i++) {
            if (N % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            alert(`${N} є простим числом.`);
        } else {
            alert(`${N} не є простим числом.`);
        }
    }

    const continueCalc = confirm("Хочете обчислити ще одне число?");
    if (!continueCalc) {
        alert("Програму завершено.");
        break;
    }
}

