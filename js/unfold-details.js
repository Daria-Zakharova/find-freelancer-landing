const DETAIL_BTN_SELECTOR = 'tutorial__details-btn';
const DETAILS_SELECTOR = 'tutorial__details';

const detailsBtns = document.querySelectorAll('.' + DETAIL_BTN_SELECTOR);
detailsBtns.forEach(el => {
    el.addEventListener("click", activateDetailsBtn);
});

function activateDetailsBtn(evt) {
    // find out which details to reveal|close
    const dataAtr = evt.currentTarget.closest('a').dataset.stage;
    // toggles button transform
    evt.currentTarget.classList.toggle(`${DETAIL_BTN_SELECTOR}--clicked`);
    // toggles clicked details visibility
    document.querySelector(`a[data-stage="${dataAtr}"]+.${DETAILS_SELECTOR}`).classList.toggle(`${DETAILS_SELECTOR}--visible`);
    // disables other details visibility if there is any
    document.querySelector(`a:not([data-stage="${dataAtr}"])+.${DETAILS_SELECTOR}--visible`)?.classList.remove(`${DETAILS_SELECTOR}--visible`);
    // disables other btn transform
    document.querySelector(`a:not([data-stage="${dataAtr}"]) .${DETAIL_BTN_SELECTOR}--clicked`)?.classList.remove(`${DETAIL_BTN_SELECTOR}--clicked`);
}