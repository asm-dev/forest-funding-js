export const initDonationForm = () => {
  const form = document.querySelector("#donation-form");

  const submitDonation = async (formData) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("nombre"),
            email: formData.get("correo"),
            donation: formData.get("monto"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Hubo un error al procesar la donación. Por favor inténtalo nuevamente"
        );
      }

      const result = await response.json();
      return result.message || "¡Gracias por ayudar a salvar el bosque!";
    } catch (error) {
      throw new Error(error.message || "Ha ocurrido un problema");
    }
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const name = formData.get("nombre").trim();
    const email = formData.get("correo").trim();
    const donation = formData.get("monto");

    if (!name || !email || donation <= 0) {
      alert("Por favor, completa todos los campos con información válida.");
      return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    try {
      const responseMessage = await submitDonation(formData);
      alert(responseMessage);
      form.reset();
    } catch (error) {
      alert(error.message);
    } finally {
      submitButton.textContent = "Donar";
      submitButton.disabled = false;
    }
  });
};
