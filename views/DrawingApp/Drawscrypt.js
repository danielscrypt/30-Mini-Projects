const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const sizePicker = document.querySelector('.size-picker')
const size1 = document.querySelector('.size1')
const size2 = document.querySelector('.size2')
const resetBtn = document.querySelector('.reset')
const colorPicker = document.querySelector('.color-picker')


let size = `${sizePicker.innerText}`; 
let isPressed = false ; 
colorPicker.value = '#3f3f3f'
let color = colorPicker.value 
let x
let y 


size1.addEventListener('click' , () => {
    if (size > 1 ) {
    size --

    sizePicker.innerText = size
    }
})

size2.addEventListener('click' , () => {
    if (size < 25 ) {
    size ++

    sizePicker.innerText = size
    }
})

resetBtn.addEventListener('click' , () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

})



canvas.addEventListener('mousedown' , (e) => {
    isPressed = true ; 
    
    x = e.offsetX
    y = e.offsetY

})

canvas.addEventListener('mouseup' , (e) => {
    isPressed = false ; 
    
    x = undefined
    y = undefined

})

canvas.addEventListener('mousemove' , (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2 , y2)
        drawLine(x , y , x2 , y2 )

        x = x2
        y = y2
    }
})


function drawCircle(x , y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine (x1 , y1 , x2 , y2) {
    ctx.beginPath()
    ctx.moveTo(x1 , y1)
    ctx.lineTo(x2 , y2)
    ctx.strokeStyle  = color ; 
    ctx.lineWidth = size * 2 ;
    ctx.stroke()
}


colorPicker.addEventListener('change' , (e) => color = e.target.value)
