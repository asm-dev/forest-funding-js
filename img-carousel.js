document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#carousel-images");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  const images = document.querySelectorAll("#carousel-images img");

  const imagesAvailable = images.length;
  let imageWidth;
  let imagesToShow = 0;
  let currentIndex = 0;

  const initCarousel = () => {
    imagesToShow = window.innerWidth < 768 ? 1 : 3;
    imageWidth = 100 / imagesToShow;

    images.forEach((img) => (img.style.flex = `0 0 ${imageWidth}%`));

    currentIndex = Math.min(currentIndex, imagesAvailable - imagesToShow);
    updateCarousel();
  };

  const updateCarousel = () => {
    if (currentIndex < 0) {
      currentIndex = imagesAvailable - imagesToShow;
    }
    if (currentIndex > imagesAvailable - imagesToShow) {
      currentIndex = 0;
    }

    const offset = currentIndex * -imageWidth;
    container.style.transform = `translateX(${offset}%)`;
  };

  prevButton.addEventListener("click", () => {
    currentIndex--;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex++;
    updateCarousel();
  });

  window.addEventListener("resize", initCarousel);
  initCarousel();
});
