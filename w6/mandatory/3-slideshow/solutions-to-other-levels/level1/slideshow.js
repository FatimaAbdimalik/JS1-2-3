//deployed at https://cyf-slideshow-lvl-1-sample-soln.glitch.me/

window.onload = setup;

let currentImageIndex = 0;

const images = [
    "images/toytrucks_green.png",
    "images/toytrucks_orange.png",
    "images/toytrucks_red.png"
];

function setup() {
    currentImageIndex = 0;
    const forwardButton = document.getElementById("forwardButton");
    const backButton = document.getElementById("backButton");
    forwardButton.addEventListener("click", nextImage);
    backButton.addEventListener("click", prevImage);
    showCurrentImage();
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showCurrentImage();
}
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showCurrentImage();
}

function showCurrentImage() {
    const url = images[currentImageIndex];
    const img = document.getElementById("mainImage");
    img.setAttribute("src", url);
}
