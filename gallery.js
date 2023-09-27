const galleryImages = document.querySelectorAll('.gallery img');
const popUpDialog = document.querySelector('.pop-up-image');
const popUpDialogCurrentImage = document.querySelector('.pop-up-image img');
const popUpDialogCloseButton = document.querySelector('.pop-up-image span');

galleryImages.forEach((image) => {
    image.onclick = () => {
        popUpDialog.style.display = 'block';
        popUpDialogCurrentImage.src = image.getAttribute('src');
    };
});

popUpDialogCloseButton.onclick = () => {
    popUpDialog.style.display = 'none';
};
