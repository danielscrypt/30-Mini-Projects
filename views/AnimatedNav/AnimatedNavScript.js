const navBar = document.querySelector('.nav-bar')
const toggler = document.querySelector('.icon')


toggler.addEventListener('click' , () => {
    navBar.classList.toggle('active')
})