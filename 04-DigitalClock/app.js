let is24HourFormat = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  if (!is24HourFormat) {
    const period = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12 || 12; 
    document.getElementById('clock').textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${period}`;
  } else {
    document.getElementById('clock').textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

document.getElementById('btn').addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  updateClock();
});

setInterval(updateClock, 1000);
updateClock();
