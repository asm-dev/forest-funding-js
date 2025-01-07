document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#carousel-images");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  const images = document.querySelectorAll("#carousel-images img");

  const imgsOnDisplay = images.length;
  const imgsToShow = 3;
  const widthConfig = 100 / imgsToShow;

  let imgIndex = 0;
  images.forEach((img) => (img.style.flex = `0 0 ${widthConfig}%`));

  const updateCarousel = () => {
    if (imgIndex < 0) {
      imgIndex = imgsOnDisplay - imgsToShow;
    }
    if (imgIndex > imgsOnDisplay - imgsToShow) {
      imgIndex = 0;
    }
    const offset = imgIndex * -widthConfig;
    container.style.transform = `translateX(${offset}%)`;
  };

  prevButton.addEventListener("click", () => {
    --imgIndex;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    ++imgIndex;
    updateCarousel();
  });
});
