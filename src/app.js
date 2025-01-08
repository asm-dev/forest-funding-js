import { initCarousel } from "./modules/carousel.js";
import { initCountdownAndProgress } from "./modules/countdown.js";
import { initDonationTracker } from "./modules/donation-tracker.js";

document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  initCountdownAndProgress();
  initDonationTracker();
});
