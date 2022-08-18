// The magic happens here!

let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')
// important to use getElementsByClassName because HTML collections, unlike NodeLists, are live collections, and thus update when lines 13-20 run.
let allPixels = document.getElementsByClassName('.pixel')

// buttons
let clearButton = document.querySelector('#clear-screen-button')
let startButton = document.querySelector('#start-button')
let stopButton = document.querySelector('#stop-button')


pixel.addEventListener('mouseenter', (e) => {
    pixel.classList.add('colored-in')
})

for (let i =0; i < 7423; i++) {
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    // newPixel.addEventListener('mouseenter', function(e) {
    //     e.target.classList.add('colored-in')
    // })
    screen.append(newPixel)
}

clearButton.addEventListener("click", (e) => {
    // way #2 is doing it here with querySelector after they have all been added
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.classList.remove('colored-in')
    })
})

let addDrawingCapability = () => {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('colored-in')
        })
    })
}

let startDrawing = () => {
    addDrawingCapability()
}

let stopDrawing = () => {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.removeEventListener('mouseenter', addDrawingCapability)
    })
}

startButton.addEventListener("click", startDrawing)

stopButton.addEventListener("click", stopDrawing)