// Initial variables
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timeDisplay');
let interval = null;

// Buttons Selection
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// Function to handle active button styling
function setActiveButton(activeBtn) {
    document.querySelectorAll('.buttons button').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Start Button Click
startBtn.addEventListener('click', () => {
    if (interval !== null) return; // Prevent multiple intervals
    interval = setInterval(updateTime, 10);
    setActiveButton(startBtn);
});

// Stop Button Click
stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    setActiveButton(stopBtn);
});

// Reset Button Click
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerText = '00:00:00:000';
    setActiveButton(resetBtn);

    // Remove active class from reset button after short delay
    setTimeout(() => resetBtn.classList.remove('active'), 4000);
});

// Update Stopwatch Time
function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let h = hours.toString().padStart(2, '0');
    let m = minutes.toString().padStart(2, '0');
    let s = seconds.toString().padStart(2, '0');
    let ms = milliseconds.toString().padStart(3, '0');

    timerRef.innerText = `${h}:${m}:${s}:${ms}`;
}