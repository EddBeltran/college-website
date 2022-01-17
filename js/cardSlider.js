const slider = document.querySelector('.news-inner'),
  slides = Array.from(document.querySelectorAll('.news'))

let isDragging = false,
   startPos = 0,
   currentTranslate = 0,
   prevTranslate = 0,
   animationID = 0,
   currentIndex = 0

const newsWidth = slides[0].offsetWidth;

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    //slide.offsetWidth;
    slideImage.addEventListener('dragstart', (e) => e.
    prevenDefault())

    //touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)

    //Mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
})

//Disable context menu
// window.oncontextmenu = function(event) {
//     event.prevenDefault()
//     event.stopPropagation()
//     return false
// } 


function touchStart(index) {
    return function (event) {
        currentIndex = index
        startPos = getPositionX(event)
        isDragging = true
        //css tricks how to use animation frame
        animationID = requestAnimationFrame(animation)
        slider.classList.add('grabbing')
        //sliderWith.
    }
}

function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
    const moveBy = currentTranslate - prevTranslate
    console.log("pos", moveBy)

    //if(moveBy < -100 && currentIndex < slides.lenght - 1){
    //    currentIndex -=1
    //    console.log("sumar")
    //}

    

    //if(moveBy > 100 && currentIndex > 0){
    //   slides.lenght += 1
    //   console.log("restar") 
    //}
    
    setSliderPositionByIndex()
    slider.classList.remove('grabbing')
}

function touchMove(event) {
    if (isDragging){
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
        console.log("index", currentIndex)
    }
    
}

function getPositionX(event){
    return event.type.includes('mouse') 
    ? event.pageX
    : event.touches[0].clientX
}

function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
}

function setSliderPositionByIndex() {
    currentTranslate = currentIndex * - newsWidth
    prevTranslate = currentTranslate
    setSliderPosition()
};