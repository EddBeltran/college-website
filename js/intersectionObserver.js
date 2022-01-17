const counters = document.querySelectorAll('.counter-number');
const speed = 50;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.getAttribute('data-counter');
        const inc = target / speed

        if (count < target){
            +counter.setAttribute('data-counter', count + inc)
            counter.innerText = (count + inc).toFixed(0);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCount();
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu__links');
    const navLinks = document.querySelectorAll('.nav-menu__links a');
    
    burger.addEventListener('click', ()=> {
        //toggle nav
        nav.classList.toggle('nav-active');
        
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
}
navSlide();


//intersection observer
const menu = document.querySelector(".nav-menu");
const sectionOne = document.querySelector(".hero-slider")

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            menu.classList.add("nav-scrolled");
        }else {
            menu.classList.remove("nav-scrolled");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
