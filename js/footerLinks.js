const collapsible = document.querySelectorAll(".links__collapsible");
const tio = document.querySelector(".bro");

collapsible.forEach((item) =>
    item.addEventListener('click', function () {
        this.classList.toggle('links__collapsible-active');
    })
);