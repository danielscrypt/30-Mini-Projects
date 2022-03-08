const sounds = ['goofy' , 'booby' , 'boofy' , 'goody' , 'heyho' , 'hello']

sounds.forEach(sound => {
    const btn = document.createElement('button')

    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click' , () => {
        const audio = document.getElementById(sound) ; 
        stopSongs()

        audio.play()
    })

    document.querySelector('#buttons').appendChild(btn)

})

function stopSongs() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound) ; 
        audio.pause() ; 
        audio.currentTime = 0 ;   
        
    })
    
}