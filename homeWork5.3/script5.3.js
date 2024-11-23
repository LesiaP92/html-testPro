const N = parseInt(prompt("Enter an integer N:"), 10);

if (isNaN(N) || N < 1) {
    console.log("Please enter a valid positive integer.");
} else {
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
        }
    }
}

