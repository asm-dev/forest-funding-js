export const DONATION_AIM = 2000;
export const TARGET_DATE = new Date("2025-06-30T21:00:00");
export const MINUTE_INTERVAL = 60000;

const rootStyles = getComputedStyle(document.documentElement);

export const COLORS = {
  PRIMARY: rootStyles.getPropertyValue("--primary-color").trim(),
  ACCENT: rootStyles.getPropertyValue("--accent-color").trim(),
  TERTIARY: rootStyles.getPropertyValue("--terciary-color").trim(),
};
