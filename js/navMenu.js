const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-menu__links');
const navLinks = document.querySelectorAll('.nav-menu__links a');
const body = document.querySelector('html');

//toggle nav
burger.addEventListener('click', (e)=> {    
    nav.classList.toggle('nav-active');
    e.stopImmediatePropagation();
    
    //animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    //burger animation
    burger.classList.toggle('toggle') 
});

nav.addEventListener("click", (eve) => {
  eve.stopImmediatePropagation();
});

body.addEventListener("click", (ev) => {
     if (ev.currentTarget != burger) {  
        navLinks.forEach((link) => {
           link.style.animation = '';
        });
        nav.classList.remove("nav-active");
        burger.classList.remove('toggle');
     }
});