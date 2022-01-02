const addNoteBtn = document.querySelector('.add-note')
const body = document.querySelector('.container')


addNoteBtn.addEventListener('click' , () => {
    const textArea = document.createElement('div')
    textArea.classList.add('note')
    textArea.classList.add('focus')
    textArea.innerHTML = ` 
    <label for="note-area" class="note-label">
    <i class="far fa-edit" id="edit"></i>
    <i class="far fa-trash-alt" id="remove"></i>
    </label>
    <textarea name="note" id="note-area" cols="30" rows="10" aria-setsize="false" ></textarea>
    `

    body.appendChild(textArea)

    const noteLabels = document.querySelectorAll('.note-label')
    const editBtns = document.querySelectorAll('#edit')
    const removeBtns = document.querySelectorAll('#remove')
    const texts = document.querySelectorAll('.note')
     
        removeBtns.forEach(btn => {
            btn.addEventListener('click' , () => {
                btn.parentNode.parentNode.remove()
            });
        })    
        editBtns.forEach(btn => {
            btn.addEventListener('click' , () => {
                const parent = btn.parentNode.parentNode
                if(parent.classList == 'note focus') {
                    parent.classList.remove('focus') 
                } else {
                    parent.classList.add('focus')
                }
            });
        })  
})


