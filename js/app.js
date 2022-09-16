
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

// this function changes the src of an image tag using setAttribute()
// the src comes from the array of image urls created through fetch and push
// currentSlide is used to keep track of the index of the image urls in the array, go through them in order and then resets when it reaches the length of the array
const displaySlideshow = () => {
    console.log(currentSlide)
    slide.setAttribute('src', `${imageUrls[currentSlide]}`)
    if (currentSlide >= imageUrls.length - 1) {
        currentSlide = 0
    } else {
        currentSlide += 1
    }
}

// this function is used to populate the imageUrls array with urls
// the conditional checks whether each 'url' is actually an image (.jpg/.png) before pushing them to the imageUrls array
// it then displays the pictures at a set interval by calling displaySlideshow()
const handleRedditPosts = (post) => {
    slideshowContainer.classList.remove('hide')
    for (let i = 0; i < post.data.children.length; i++) {
        let imgUrl = post.data.children[i].data.thumbnail
        if (imgUrl.includes('.jpg') || imgUrl.includes('.png')) {
            imageUrls.push(imgUrl)
        }
    }
    displaySlideshow()// calling it first ensures there is no 3 sec delay before the first image appears
    interval = setInterval(displaySlideshow, 3000)
}

// .hide is set to display: none in css, so adding and removing the class will "hide" or "show" corresponding html elements
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