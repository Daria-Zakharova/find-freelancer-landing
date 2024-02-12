import { cloneAll } from './clone.js';

const SLIDES_VISIBLE = 3;
const SLIDE_WIDTH = 380;
const SLIDES_GAP = 30;
const SLIDE_SELECTOR = '.js-slider-item'

const slider = document.querySelector('.js-slider');
const slides = document.querySelectorAll(SLIDE_SELECTOR);

const prevSlideBtn = document.querySelector(".js-slider-btn-prev");
const nextSlideBtn = document.querySelector(".js-slider-btn-next");

let currentSlide = 0;
let transititonSwitcher;
let transitionEnabled = false;

const startClone = cloneAll({
    selector: `${SLIDE_SELECTOR}:nth-child(${SLIDES_VISIBLE})`,
    position: 'before',
});
const endClone = cloneAll({
    selector: `${SLIDE_SELECTOR}:nth-last-child(${SLIDES_VISIBLE + 1})`,
    position: 'after',
});


slider.prepend(...endClone);
slider.append(...startClone);
moveSlider(currentSlide);

prevSlideBtn.addEventListener("click", enableTransition);
nextSlideBtn.addEventListener("click", enableTransition);

prevSlideBtn.addEventListener("click", prevSlide);
nextSlideBtn.addEventListener("click", nextSlide);
// slider.style.transitionProperty = "transform";

function moveSlider(slideIdx) {
    const cardsWidth = (SLIDES_VISIBLE + slideIdx) * SLIDE_WIDTH;
    const gapWidth = (SLIDES_VISIBLE + slideIdx) * SLIDES_GAP;
    const translateWidth = cardsWidth + gapWidth;
    slider.style.transform = translateWidth > 0 ? `translateX(-${translateWidth}px)` : `translateX(${translateWidth}px)`;
}

function prevSlide() {
    // transititonSwitcher && clearTimeout(transititonSwitcher);
    currentSlide -= SLIDES_VISIBLE;
    const lastSlideIdx = slides.length;
    const min = 0 - SLIDES_VISIBLE;
    if (currentSlide <= min) {
        currentSlide = lastSlideIdx;
        slider.style.transitionProperty = "none";
        moveSlider(currentSlide);

        transititonSwitcher = setTimeout(() => {
            slider.style.transitionProperty = "transform";
            currentSlide -= SLIDES_VISIBLE;
            moveSlider(currentSlide);

        }, 0);
    }
    else {
        moveSlider(currentSlide);
    }
}

function nextSlide() {
    transititonSwitcher && clearTimeout(transititonSwitcher);
    currentSlide += SLIDES_VISIBLE;
    const firstSlideIdx = 0;
    const max = slides.length + SLIDES_VISIBLE;
    if (currentSlide >= max) {
        currentSlide = firstSlideIdx;
        slider.style.transitionProperty = "none";
        moveSlider(currentSlide);

        transititonSwitcher = setTimeout(() => {
            slider.style.transitionProperty = "transform";
            currentSlide += SLIDES_VISIBLE;
            moveSlider(currentSlide);

        }, 0);
    }
    else {
        moveSlider(currentSlide);
    }
}

function enableTransition() {
    slider.style.transitionProperty = "transform";
    transitionEnabled = !transitionEnabled;

    prevSlideBtn.removeEventListener("click", enableTransition);
    nextSlideBtn.removeEventListener("click", enableTransition);
}