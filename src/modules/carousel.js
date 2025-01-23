export const initCarousel = () => {
  const container = document.querySelector("#carousel-images");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  const images = document.querySelectorAll("#carousel-images img");

  let imageWidth;
  let imagesToShow = 0;
  let currentIndex = 0;

  const updateCarousel = () => {
    const offset = (currentIndex * -100) / imagesToShow;
    container.style.transform = `translateX(${offset}%)`;
  };

  const handleResize = () => {
    imagesToShow = window.innerWidth < 768 ? 1 : 3;
    imageWidth = 100 / imagesToShow;

    images.forEach((img) => (img.style.flex = `0 0 ${imageWidth}%`));
    updateCarousel();
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;

    if (currentIndex > images.length - imagesToShow) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = images.length - imagesToShow;
    } else {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    updateCarousel();
  });

  window.addEventListener("resize", handleResize);
  handleResize();
};
