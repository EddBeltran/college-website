//intersection observer
const menu = document.querySelector(".nav-menu");
const sectionOne = document.querySelector(".hero-slider")
const whiteLogo = document.querySelector(".logo--blanco")
const colorLogo = document.querySelector(".logo--color")


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
            whiteLogo.style.display ="none";
            colorLogo.style.display ="block"; 
        }else {
            menu.classList.remove("nav-scrolled");
            whiteLogo.style.display ="block";
            colorLogo.style.display ="none";
            
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
