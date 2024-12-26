const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateSlider();
    });
});

updateSlider();
