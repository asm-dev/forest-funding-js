import { TARGET_DATE, MINUTE_INTERVAL, DONATION_AIM } from "../constants.js";

export const initCountdownAndProgress = () => {
  const countdownElements = {
    days: document.getElementById("countdown-days"),
    hours: document.getElementById("countdown-hours"),
    minutes: document.getElementById("countdown-minutes"),
  };

  const donationElements = {
    aim: document.getElementById("donation-aim"),
    achieved: document.getElementById("donation-achieved"),
    progress: document.getElementById("donation-progress"),
  };

  const updateCountdown = () => {
    const now = new Date();
    const timeDiff = TARGET_DATE - now;

    if (timeDiff <= 0) {
      Object.values(countdownElements).forEach((el) => (el.textContent = 0));
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    countdownElements.days.textContent = days;
    countdownElements.hours.textContent = hours;
    countdownElements.minutes.textContent = minutes;
  };

  const updateAim = () => {
    donationElements.aim.textContent = DONATION_AIM;
  };

  const updateProgress = () => {
    const achieved = Math.min(
      parseInt(donationElements.achieved.textContent) || 0,
      100
    );
    const roundedPercentage = Math.round(achieved);
    donationElements.achieved.textContent = roundedPercentage;
    donationElements.progress.value = achieved;
  };

  const updateCountdownAndProgress = () => {
    updateCountdown();
    updateProgress();
  };

  setInterval(() => {
    updateCountdownAndProgress();
  }, MINUTE_INTERVAL);

  updateAim();
  updateCountdownAndProgress();
};
