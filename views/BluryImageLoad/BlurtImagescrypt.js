const container = document.querySelector('.container')
const loadingText = document.querySelector('.loading-text')

let load = 0 ; 

let int = setInterval(blurring , 60) ; 

function blurring() {
    load++

    if(load > 99 ) {
        clearInterval(int)
    }
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load , 0 , 100 , 1 , 0)
    container.style.filter = `blur(${scale(load , 100 , 0 , 0 , 30)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
