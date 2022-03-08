const openBtn = document.querySelector('#open')
const searchBar = document.querySelector('.search-bar')
const searchWidg = document.querySelector('.search-widg')

openBtn.addEventListener ('click' , () => {
    searchWidg.classList.toggle('active')
    searchBar.focus()
})