/*=== Toggle icon navbar ===*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*=== scroll sections active link ===*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* === Sticky navbar === */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* === Remove toggle icon and navbar when cleck navbar link (scroll) === */
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        
};

/* === Scroll reveal animation === */
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

/*=== Typed js ===*/

const typed = new Typed('.multiple-text', { 
    strings: ['Atlernant Informatique', 'Passionné du monde technologique'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

document.querySelectorAll('.contact a[href^="http"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      window.open(this.href, '_blank');
    });
  });
  