import { COLORS, DONATION_AIM } from "../constants.js";
import { createButton } from "../utils/create-button.js";

export const initDonationTracker = () => {
  const floatingButton = createButton(
    "floating-button",
    "Salva el bosque de Crescente",
    COLORS.TERTIARY,
    { position: "fixed", bottom: "2rem", right: "2rem" }
  );
  document.body.appendChild(floatingButton);

  const directDonationButton = createButton(
    "donate-button",
    "Enviar ayuda directa",
    COLORS.ACCENT,
    { marginTop: "0" }
  );

  const currentActionSection = document.getElementById("current-action");
  currentActionSection.appendChild(directDonationButton);

  let totalDonations = 0;

  floatingButton.addEventListener("click", () => {
    currentActionSection.scrollIntoView({ behavior: "smooth" });
  });

  directDonationButton.addEventListener("click", () => {
    const userDonation = prompt("¿Cuánto te gustaría donar?");
    const donationAmount = parseInt(userDonation);

    if (!isNaN(donationAmount) && donationAmount > 0) {
      totalDonations += donationAmount;
      const achievedPercentage = Math.min(
        (totalDonations / DONATION_AIM) * 100,
        100
      );

      document.getElementById("donation-achieved").textContent =
        achievedPercentage;
      document.getElementById("donation-progress").value = achievedPercentage;

      alert(`¡Gracias por tu donativo! Total recaudado: ${totalDonations}€`);
    } else {
      alert("Por favor, inserta una cifra válida.");
    }
  });
};
