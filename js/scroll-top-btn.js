const scrollTopBtn = document.querySelector(".scroll-top-btn");
scrollTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", toggleVisible);

function toggleVisible() {
    let isVisible = Boolean(document.querySelector(".scroll-top-btn--visible"));
    if (!isVisible && window.scrollY > 100 || isVisible && window.scrollY <= 100) {
        scrollTopBtn.classList.toggle("scroll-top-btn--visible");
    }

}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}