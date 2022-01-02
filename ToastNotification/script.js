const popUps = document.getElementById('pop')
const button = document.querySelector('.btn')

const popColor = function () {
   return Math.floor(Math.random() * 4)  
} 

const colors = [ 'none' , 'info' , 'success' , 'error']
const numbers = ['one', 'two' , 'three' , 'four']

button.addEventListener('click' , () =>  addToast())

function addToast () {
    const newPop = document.createElement('span')
    newPop.classList.add('toast')
    newPop.classList.add(colors[popColor()])
    newPop.innerText = `Message ${numbers[popColor()]}`
    popUps.appendChild(newPop)


    setTimeout (() => {
        newPop.remove()
    }, 3000)
}