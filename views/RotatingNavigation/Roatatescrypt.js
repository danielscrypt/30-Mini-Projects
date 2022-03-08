const container = document.querySelector('.container')
const cricleContainer = document.querySelector('circle-container')
const circle = document.querySelector('circle')
const closeBtn = document.querySelector('#close')
const openBtn = document.querySelector('#open')

openBtn.addEventListener('click' , () => {
        container.classList.add('showNav')
}  )

closeBtn.addEventListener('click' , () => {
    container.classList.remove('showNav')
}  )

