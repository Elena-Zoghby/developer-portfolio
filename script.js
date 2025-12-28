const cleanBtn = document.getElementById('clean-btn');
const statusMsg = document.getElementById('status-msg');

// 1. Your new function
function calculateSavings(rows) {
    let minutes = (0.5 * rows) / 60;
    return minutes.toFixed(1); // Returns a rounded number
}

cleanBtn.addEventListener('click', function () {
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');

    cleanBtn.style.display = 'none';
    progressContainer.style.display = 'block';
    statusMsg.innerText = "Cleaning data...";

    let width = 0;
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            // Show Success
            const timeSaved = calculateSavings(1250);
            statusMsg.innerText = `✅ Success! You saved ${timeSaved} minutes!`;
            statusMsg.style.color = "#4ade80";
        } else {
            width += 5;
            progressBar.style.width = width + '%';
        }
    }, 100); // Updates every 100ms
});