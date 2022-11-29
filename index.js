// The magic happens here!

let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')

// buttons
let clearButton = document.querySelector('#clear-screen-button')
let stopButton = document.querySelector('#stop-button')
let startButton = document.querySelector('#start-button')

pixel.addEventListener('mouseenter', () => {
    pixel.classList.add('colored-in')
})

// loop through and make new pixels
for (let i = 0; i < 3134; i++) {
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    
    // add mouseEnter functionality
    // newPixel.addEventListener('mouseenter', (e) => {
    //     e.target.classList.add('colored-in')
    // })
    
    screen.append(newPixel)
}



// button functionality

let addDrawingCapability = () => {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('colored-in')
        })
    })
}



let removeDrawingCapability = () => {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.removeEventListener('mouseenter', addDrawingCapability)
    })
}

let startDrawing = () => {
    addDrawingCapability()
}


let clearFunction = function() {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.classList.remove('colored-in')
    })
}

clearButton.addEventListener('click', clearFunction)
stopButton.addEventListener('click', removeDrawingCapability)
startButton.addEventListener('click', startDrawing)