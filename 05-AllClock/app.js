let is24HourFormat = true;
let stopwatchInterval;
let stopwatchTime = 0;
let isStopwatchRunning = false;

const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update Digital Clock
    if (!is24HourFormat) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        document.getElementById('clock').textContent = 
            `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${period}`;
    } else {
        document.getElementById('clock').textContent = 
            `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    }

    // Update Date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);

    // Update Analog Clock
    updateAnalogClock(hours, now.getMinutes(), now.getSeconds());
};

function updateAnalogClock(hours, minutes, seconds) {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const hourDeg = ((hours % 12) * 30) + (minutes / 2);
    const minuteDeg = minutes * 6 + (seconds / 10);
    const secondDeg = seconds * 6;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// **Fix button ID**
document.getElementById('toggle-format').addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    updateClock();
});

// Stopwatch Functions
function updateStopwatchDisplay() {
    const hours = String(Math.floor((stopwatchTime / 3600000) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime / 60000) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((stopwatchTime / 1000) % 60)).padStart(2, '0');
    const milliseconds = String(stopwatchTime % 1000).padStart(3, '0');

    document.getElementById('stopwatch-display').textContent = 
        `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

document.querySelector('.stopwatch-start').addEventListener('click', () => {
    if (!isStopwatchRunning) {
        isStopwatchRunning = true;
        stopwatchInterval = setInterval(() => {
            stopwatchTime += 10; // **10ms precision**
            updateStopwatchDisplay();
        }, 10);
    }
});

document.querySelector('.stopwatch-stop').addEventListener('click', () => {
    isStopwatchRunning = false;
    clearInterval(stopwatchInterval);
});

document.querySelector('.stopwatch-reset').addEventListener('click', () => {
    isStopwatchRunning = false;
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
});

// **Interval Fix**
setInterval(updateClock, 1000);
updateClock();