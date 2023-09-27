const galleryImages = document.querySelectorAll(".gallery img");
const popUpDialog = document.querySelector(".pop-up-image");
// const popUpDialogCurrentImage = document.querySelector('.pop-up-image img');
const popUpDialogCloseButton = document.querySelector(
  ".pop-up-image .close-popup"
);

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

galleryImages.forEach((image) => {
  image.onclick = () => {
    popUpDialog.style.display = "block";
    // popUpDialogCurrentImage.src = image.getAttribute('src');
  };
});

popUpDialogCloseButton.onclick = () => {
  popUpDialog.style.display = "none";
};
