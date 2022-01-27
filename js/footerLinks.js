const collapsible = document.querySelectorAll(".links__collapsible");

collapsible.forEach((item) =>
    item.addEventListener('click', function () {
        this.classList.toggle('links__collapsible-active');
    })
);