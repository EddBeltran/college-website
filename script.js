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