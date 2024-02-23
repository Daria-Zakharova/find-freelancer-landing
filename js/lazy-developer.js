(() => {
    if (window.innerWidth >= 1400) {
        return;
    }
    const body = document.querySelector('body');
    body.innerHTML = `
    <div class="error-message error-message--centered">
    <div class="error-message__flex-wrp">
    <img class="error-message__img" src="./assets/img/content/error/sad-emoji.png"
        alt="blue emoji expressing how bad developer feels about being too lazy not to make this website responsive">
    <div class="error-message__content">
        <h1 class="error-message__title">Sorry, the website is not responsive enough for your device</h1>
        <p class="error-message__txt">It starts looking wrong and broken already on screens below 1400 pixels and I am sincerely afraid to test it on mobile devices.</p>
    </div>
    </div>
    </div>`;
})();
