//variable declarations
const slideshowImages = document.querySelectorAll(".slideshow-img");

const nextImageDelay = 5000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

//calls function handled by the internal setInterval function
setInterval(nextImage, nextImageDelay);

//function handles the transitioning of images
//sets images to display one after another while hiding the other images
//visibility handled by opacity for a cleaner animation over jumping between images
function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
}