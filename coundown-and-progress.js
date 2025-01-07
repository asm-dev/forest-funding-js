document.addEventListener("DOMContentLoaded", () => {
  const TARGET_DATE = new Date("2025-06-30T21:00:00");
  const DONATION_AIM = 2000;
  const MINUTE_INTERVAL = 60000;

  const countdownDays = document.getElementById("countdown-days");
  const countdownHours = document.getElementById("countdown-hours");
  const countdownMinutes = document.getElementById("countdown-minutes");
  const donationAimSpan = document.getElementById("donation-aim");
  const donationAchievedSpan = document.getElementById("donation-achieved");
  const donationProgress = document.getElementById("donation-progress");

  donationAimSpan.textContent = DONATION_AIM;

  const updateCountdown = () => {
    const now = new Date();
    const timeDiff = TARGET_DATE - now;

    if (timeDiff <= 0) {
      countdownDays.textContent = 0;
      countdownHours.textContent = 0;
      countdownMinutes.textContent = 0;
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    countdownDays.textContent = days;
    countdownHours.textContent = hours;
    countdownMinutes.textContent = minutes;
  };

  const updateProgress = () => {
    const achievedPercentage = Math.min(
      parseInt(donationAchievedSpan.textContent) || 0,
      100
    );
    donationAchievedSpan.textContent = achievedPercentage;
    donationProgress.value = achievedPercentage;
  };

  setInterval(() => {
    updateCountdown();
    updateProgress();
  }, MINUTE_INTERVAL);

  updateCountdown();
  updateProgress();
});
