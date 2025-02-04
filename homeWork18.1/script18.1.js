let timeLeft = 85;

function updateTimer() {
    let minute = Math.floor(timeLeft / 60);
    let second = timeLeft % 60;
    let formatTime =
        (minute < 10 ? "0" : "") + minute + ":" +
        (second < 10 ? "0" : "") + second;
    document.getElementById("timer").textContent = formatTime;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
    } else {
        timeLeft--;
    }
}

let timerInterval = setInterval(updateTimer, 1000);
updateTimer();