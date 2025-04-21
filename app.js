const headerMenuToggle = document.querySelector(".header__menu-toggle");
const headerMenus = document.querySelector(".header__menus");

headerMenuToggle.addEventListener('click', () => {
  headerMenus.classList.toggle('active');
})

ScrollReveal({ 
    reset: true,
    delay: 300,
    distance: '60px',
    duration:1500
});

ScrollReveal().reveal('.section-title');
ScrollReveal().reveal('.section-desc',{
    delay: 600,
    duration:2500
});
ScrollReveal().reveal('.section-home__title');
ScrollReveal().reveal('.section-home__image', {
    origin: 'right'
});

ScrollReveal().reveal('.section-home__buttons', {
    delay: 600
});
//section menu
ScrollReveal().reveal('.section-menus__card', {
    interval: 300
});

//section about
ScrollReveal().reveal('.section-about__image', {
    delay:900,
    origin: 'left'
});
ScrollReveal().reveal('.section-about__stat', {
    delay: 1200,
    interval: 300
});

ScrollReveal().reveal('.section-about .primary-button', {
    duration: 3000,
    delay: 1200
});


//SECTION SERVICES
ScrollReveal().reveal('.section-services__card', {
    delay: 1200,
    interval: 300
});

//SECTION CONTACT
ScrollReveal().reveal('.section-contact__info-item', {
    delay: 1200,
    interval: 300
});

ScrollReveal().reveal('.section-contact__form', {
    delay: 1800,
    duration: 3000
});