document.addEventListener("DOMContentLoaded", () => {
  const createButton = (id, text, color, additionalStyles = {}) => {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = text;

    Object.assign(button.style, {
      padding: "1rem 2rem",
      fontSize: "1rem",
      backgroundColor: color,
      color: "white",
      border: "none",
      borderRadius: "var(--border-radius)",
      cursor: "pointer",
      display: "block",
      margin: "1rem auto",
      textAlign: "center",
      zIndex: "1000",
      ...additionalStyles,
    });

    return button;
  };

  const floatingButton = createButton(
    "floating-button",
    "Salva el bosque de Crescente",
    "var(--terciary-color)",
    {
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
    }
  );
  document.body.appendChild(floatingButton);

  const directDonation = createButton(
    "donate-button",
    "Enviar ayuda directa",
    "var(--accent-color)",
    {
      marginTop: "0px",
    }
  );

  const currentActionSection = document.getElementById("current-action");
  const donationAchievedSpan = document.getElementById("donation-achieved");
  const donationProgress = document.getElementById("donation-progress");
  const donationGoal = 2000;
  let totalDonations = 0;

  if (currentActionSection) {
    currentActionSection.appendChild(directDonation);
  }

  floatingButton.addEventListener("click", () => {
    currentActionSection.scrollIntoView({ behavior: "smooth" });
  });

  const handleScroll = () => {
    const sectionTop = currentActionSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop <= windowHeight / 2) {
      floatingButton.style.display = "none";
    } else {
      floatingButton.style.display = "block";
    }
  };

  window.addEventListener("scroll", handleScroll);

  directDonation.addEventListener("click", () => {
    const userDonation = prompt("¿Cuánto te gustaría donar?");
    const donationAmount = parseInt(userDonation);

    if (!isNaN(donationAmount) && donationAmount > 0) {
      totalDonations += donationAmount;

      const achievedPercentage = Math.min(
        Math.floor((totalDonations / donationGoal) * 100),
        100
      );
      donationAchievedSpan.textContent = achievedPercentage;
      donationProgress.value = achievedPercentage;

      alert(
        `¡Gracias por tu donativo! El tocal recaudado es de ${totalDonations}€`
      );

      if (totalDonations >= donationGoal) {
        alert(
          "Hemos conseguido alcanzar el dinero necesario para recuperar el monte. Si quieres colaborar en otras acciones por favor visita el apartado de donaciones."
        );
      }
    } else {
      alert("Por favor inserta una cifra válida.");
    }
  });

  handleScroll();
});
