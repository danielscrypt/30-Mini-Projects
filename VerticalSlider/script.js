  
const sliderContainer = document.querySelector('.container')
const slideRight = document.querySelector('.right-side')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up')
const downButton = document.querySelector('.down')
const slidesLength = slideRight.querySelectorAll('div').length

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

let activeSlide = 0 ; 
const sliderHeight = sliderContainer.clientHeight

upButton.addEventListener('click' , () => {
    if (activeSlide < 3 ) {
        activeSlide ++ 
    } else {
        activeSlide = 0
    }
    slideRight.style.transform = `translateY(-${activeSlide* sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`
})

downButton.addEventListener('click' , () => {
    if (activeSlide > 0  ) {
        activeSlide -- 
    } else {
        activeSlide = 3
    }
    slideRight.style.transform = `translateY(-${activeSlide* sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`
})

