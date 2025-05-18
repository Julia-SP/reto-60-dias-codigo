const progressBar = document.getElementById('progressBar');
const progressLabel = document.getElementById('progressLabel');
const startBtn = document.getElementById('startBtn');

function animateProgressBar() {
  let progress = 0;
  progressBar.style.width = '0%';
  progressLabel.textContent = '0%';

  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
    } else {
      progress++;
      progressBar.style.width = progress + '%';
      progressLabel.textContent = progress + '%';
    }
  }, 25);
}

startBtn.addEventListener('click', animateProgressBar);
