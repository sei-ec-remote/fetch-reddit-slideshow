
const startButton = document.querySelector('#start')
const slideshowContainer = document.querySelector('#slideshow-container')
const formContainer = document.querySelector('#form-container')
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const slide = document.querySelector('#slide')
const stopButton = document.querySelector('#stop')

let imageUrls = []
let currentSlide = 0
let interval = null

const displaySlideshow = () => {
    console.log(currentSlide)
    slide.setAttribute('src', `${imageUrls[currentSlide]}`)
    if (currentSlide >= imageUrls.length - 1) {
        currentSlide = 0
    } else {
        currentSlide += 1
    }
}

const handleRedditPosts = (post) => {
    slideshowContainer.classList.remove('hide')
    for (let i = 0; i < post.data.children.length; i++) {
        let imgUrl = post.data.children[i].data.thumbnail
        if (imgUrl.includes('.jpg') || imgUrl.includes('.png')) {
            imageUrls.push(imgUrl)
        }
    }
    displaySlideshow()
    interval = setInterval(displaySlideshow, 3000)
}

form.addEventListener('submit', event => {
    event.preventDefault()
    formContainer.classList.add('hide')
    stopButton.classList.remove('hide')
    const searchTerm = input.value
    fetch(`http://www.reddit.com/search.json?q=${searchTerm}`)
        .then(res => res.json())
        .then(handleRedditPosts)
        .catch(console.error)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    formContainer.classList.remove('hide')
    slideshowContainer.classList.add('hide')
    stopButton.classList.add('hide')
    form.reset()
    currentSlide = 0
    imageUrls = []
}) 