const tagsEl  = document.querySelector('.tags')
const text = document.querySelector('#text')

text.focus()

text.addEventListener('keyup' , (e) => {
    createTags(e.target.value)

    if( e.key === 'Enter' ) {
        setTimeout (() => {
            e.target.value = ''
        } , 10)
        
        selectRandom()
        console.log(e.target.value)
        console.log(text.innerText)
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()
        !== '').map(tag => tag.trim())
    
        tagsEl.innerHTML = '' ; 

        tags.forEach (tag => {
            const newSpan = document.createElement('span')
            newSpan.classList.add('tag')
            newSpan.innerText = tag 
            tagsEl.appendChild(newSpan)
        })
}

function selectRandom() {
    const times = 30

    const interval = setInterval(() => {
        const RandomTag = pickRandom()

        highlight(RandomTag)
        
        setTimeout(() => {
            unhighlight(RandomTag)
        }, 50);
    }, 100);

    setTimeout(() => {

        clearInterval(interval)

        setTimeout(() => {

            const RandomTag = pickRandom()
            highlight(RandomTag)

        }, 100);

    }, times * 100);
    
}

function pickRandom () {
    const tagsPick = document.querySelectorAll('.tag')
    return tagsPick[Math.floor(Math.random() * tagsPick.length)]

}

function highlight (tag) {
    tag.classList.add('highlight')
}

function unhighlight (tag) {
    tag.classList.remove('highlight')
}