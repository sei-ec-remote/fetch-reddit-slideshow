const form = document.getElementById('search-form')
const slideShow = document.getElementById('slideshow')
const stopButton = document.getElementById('stop-show')

let imageArray = []
let imageCount = 0

let startSlideShow

const showInitialImage = (responseArray) => {
    let array = responseArray.data.children.map( data => data.data)
    imageArray = array

    while(slideShow.firstChild) {
        slideShow.removeChild(slideShow.firstChild)
    }
    if (imageCount != 0) { 
        imageCount = 0 
    }
    const picBox = document.createElement('img')
    picBox.setAttribute('src', imageArray[imageCount].url)
    slideShow.appendChild(picBox)   
    imageCount++
    startSlideshow = setInterval(showNextImage, 2000)
}


const showNextImage = () => {
    while(slideShow.firstChild) {
        slideShow.removeChild(slideShow.firstChild)
    }

    if (imageCount < imageArray.length) {
        const picBox = document.createElement('img')
        picBox.setAttribute('src', imageArray[imageCount].url)
        slideShow.appendChild(picBox)   
        imageCount++
    } 
} 

const stopSlideShow = () => {
    imageArray = []
    clearInterval(startSlideShow)
}

stopButton.addEventListener('click', stopSlideShow);

form.addEventListener('submit', event => {

    let userInput = document.getElementById('user-search').value

    event.preventDefault()
    fetch(`https://www.reddit.com/search.json?q=${userInput}+nsfw:no+type:image`)
    .then(res => res.json())
    .then(showInitialImage)
    .catch(console.error)
})


