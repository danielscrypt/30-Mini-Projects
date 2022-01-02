const likes = document.querySelector('#likes')
const image  = document.querySelector('.image')
const heart = document.querySelector('.fas')

let clicks = 0 

image.addEventListener('dblclick' , (e) => {
    addHeart(e)
})


function addHeart(e) {
    const x = e.clientX
    const y = e.clientY

    heart.classList.add('active')
    heart.style.top = `${y - 20 }px`
    heart.style.left = `${x - 20}px`

    clicks ++ 

    likes.innerText = clicks


    setTimeout( () => {
        heart.classList.remove('active')
    }
        ,250)
}