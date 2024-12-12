const images = [
    "images/cat1.jpg",
    "images/cat2.jpg",
    "images/cat3.jpg",
    "images/cat4.jpg",
];

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const imageElement = document.getElementById("random-img");
    imageElement.src = randomImage;
    imageElement.alt = `${randomImage}`;
}