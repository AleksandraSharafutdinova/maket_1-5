new Swiper(".swiper-container", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView:'auto',
    slidesPerGroup: 1,
});

function popup() {
    const element = document.querySelector('.main-menu');
    const arrow = document.querySelector('.hide')

    element.classList.toggle('main-menu--hidden');
    arrow.classList.toggle('hide--rotate');

    if (element.classList.contains('main-menu--hidden')) {
        arrow.textContent = 'Показать всё';
    } else {
        arrow.textContent = 'Скрыть';
    }
}