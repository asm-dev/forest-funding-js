document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#carousel-images");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  const images = document.querySelectorAll("#carousel-images img");

  const imagesToShow = 3;
  const imageWidth = 100 / imagesToShow;
  let currentIndex = 0;

  images.forEach((img) => (img.style.flex = `0 0 ${imageWidth}%`));

  const updateCarousel = () => {
    const totalImages = images.length;

    if (currentIndex < 0) {
      currentIndex = totalImages - imagesToShow;
    }
    if (currentIndex > totalImages - imagesToShow) {
      currentIndex = 0;
    }
    const offset = currentIndex * -imageWidth;
    container.style.transform = `translateX(${offset}%)`;
  };

  prevButton.addEventListener("click", () => {
    currentIndex -= 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex += 1;
    updateCarousel();
  });

  // Esperar a que todas las imágenes estén cargadas antes de inicializar
  let loadedImagesCount = 0;
  images.forEach((img) => {
    img.addEventListener("load", () => {
      loadedImagesCount++;
      if (loadedImagesCount === images.length) {
        updateCarousel(); // Inicializar carrusel una vez cargadas las imágenes
      }
    });
  });

  // Manejar casos en los que las imágenes ya estén en caché
  images.forEach((img) => {
    if (img.complete) {
      img.dispatchEvent(new Event("load"));
    }
  });
});
