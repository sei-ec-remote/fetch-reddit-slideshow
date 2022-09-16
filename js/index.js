const form = document.querySelector('#search-form')
const slideShow = document.querySelector('#slideshow')

let imageArray = []
let imageCount = 0


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
}


const showNextImage = () => {
    setInterval(showNextImage, 2000);
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

form.addEventListener('submit', event => {

    let userInput = document.getElementById('user-search').value

    event.preventDefault()
    fetch(`https://www.reddit.com/search.json?q=${userInput}+nsfw:no+type:image`)
    .then(res => res.json())
    .then(showInitialImage)
    .catch(console.error)
})

