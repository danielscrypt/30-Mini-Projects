const smallGlass = document.querySelectorAll('.glass')
const liters = document.querySelector('#liters')
const remained = document.querySelector('.remained')
const percentage = document.querySelector('#precentage')

updateBigCup()

smallGlass.forEach((glass , idx) => {
    glass.addEventListener('click' , () => highlightGlass(idx))
    
})


 const highlightGlass = (idx) => {
     console.log(idx)
    if (idx === 7 && smallGlass[idx].classList.contains("active")) idx--;
    else if(smallGlass[idx].classList.contains('active') && !smallGlass[idx].nextElementSibling.classList.contains('active')) {
        idx--
    }

    smallGlass.forEach((glass, idx2) => {
        console.log(idx2)
        if(idx2 <= idx) {
            glass.classList.add('active')
        } else {
            glass.classList.remove('active')
        }
    } , 
)
    updateBigCup()

    }

       function updateBigCup () {
        const fullCups = document.querySelectorAll('.glass.active').length
        const totalCups = smallGlass.length
    
        if(fullCups === 0) {
            percentage.style.visibility = 'hidden'
            percentage.style.height = 0
        } else {
            percentage.style.visibility = 'visible'
            percentage.style.height = `${fullCups / totalCups * 330}px`
            percentage.innerText = `${fullCups / totalCups * 100}%`
        }
    
        if(fullCups === totalCups) {
            remained.style.visibility = 'hidden'
            remained.style.height = 0
        } else {
            remained.style.visibility = 'visible'
            liters.innerText = `${4 - (500 * fullCups / 1000)}L`
        }
    }