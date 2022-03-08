const numbers = document.querySelectorAll('.number')


numbers.forEach(number => {
    number.innerText = '0'

    const updateNumber = () => {
        const target = +number.getAttribute('data-target')
        const c = +number.innerText

        const increament = target / 200 

        if (c < target) {
            number.innerText = `${Math.ceil(c + increament)}`
            setTimeout ( updateNumber , 1 )
        }
    }

    updateNumber()
})

