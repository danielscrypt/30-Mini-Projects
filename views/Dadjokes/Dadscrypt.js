const joke = document.querySelector('#jokes')
const getBtn = document.querySelector('.btn')

getDadJoke()

function getDadJoke() {

    const config = {
        headers : {
            Accept : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/' , config)
    .then(res => res.json())
    .then(data => {
        joke.innerText = data.joke
    })
    
}

getBtn.addEventListener('click' , getDadJoke)