export const initCarousel = () => {
  const container = document.querySelector("#carousel-images");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  const images = document.querySelectorAll("#carousel-images img");

  let imageWidth;
  let imagesToShow = 0;
  let currentIndex = 0;

  const updateCarousel = () => {
    const offset = currentIndex * -imageWidth;
    container.style.transform = `translateX(${offset}%)`;
    console.log("updato container con ofset -->", offset);
  };

  const handleResize = () => {
    imagesToShow = window.innerWidth < 768 ? 1 : 3;
    imageWidth = 100 / imagesToShow;

    images.forEach((img) => (img.style.flex = `0 0 ${imageWidth}%`));
    updateCarousel();
  };

  prevButton.addEventListener("click", () => {
    console.log("paso por aqui");
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    console.log("paso por el otro");
    currentIndex = Math.min(currentIndex + 1, images.length - imagesToShow);
    updateCarousel();
  });

  window.addEventListener("resize", handleResize);
  handleResize();
};
