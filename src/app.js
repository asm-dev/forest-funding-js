import { initCarousel } from "./modules/carousel.js";
import { initCountdownAndProgress } from "./modules/countdown.js";
import { initDonationTracker } from "./modules/donation-tracker.js";
import { initDonationForm } from "./modules/donation-form.js";

document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  initCountdownAndProgress();
  initDonationTracker();
  initDonationForm();
});
