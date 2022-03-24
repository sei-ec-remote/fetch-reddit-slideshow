document.addEventListener('DOMContentLoaded', () => {
// We want to make a request to the Random User API
const requestUrl = 'https://www.reddit.com/search.json?q='
const stopButton = document.getElementById('stawp')
const catBox = document.getElementById('catBox')
const get = document.getElementById('get')
const input = document.getElementById('yeet')
let images = []

stopButton.addEventListener('click', () => {
    clearInterval(time)
    get.style.visibility = 'visible'
    input.style.visibility = 'visible'
    stopButton.style.visibility = 'hidden'
})

let timer = 0

get.addEventListener('click', (e) => {
    e.preventDefault()
    // hide()
    fetch(`${requestUrl}${input.value}`)
        .then((responseData) => {
            return responseData.json()
        })
        .then((jsonData) => {
            get.style.visibility = 'hidden'
            input.style.visibility = 'hidden'
            stopButton.style.visibility = 'visible'
            console.log(jsonData)
            console.log(jsonData.data.children)
            let cats = jsonData.data.children
            let catThumb = 0
            for ( let i = 0; i < cats.length; i++) {
                catThumb = cats[i].data.thumbnail
                if (catThumb.includes('.png') || catThumb.includes('.jpg') ) {
                    console.log(catThumb)
                    images.push(catThumb)
                }
                console.log(images)
            }
            imageRotation = () => {
                catBox.src = images[timer]
                while (timer === images.length - 1) {
                    timer =- 1
                }
                timer ++
            }
            let time = setInterval(imageRotation, 1000)
            console.log(timer)
            
        })
        .catch((error) => {
            console.log('error', error)
        })
    })
})