const API_URL = 'http://www.reddit.com/search.json?q=cats+nsfw:no'
const INTERVAL_DELAY = 2000
let currentImages = []
let currentIndex = 0
let interval = null

document.getElementById('search-form').addEventListener('submit', e => {

    e.preventDefault()

    let userQuery = document.getElementById('query').value

        if (userQuery) {
            fetchReddit(userQuery)
            document.getElementById('query').vaule = ''
        }
})
const fetchReddit = (query) => {
    fetch(API_URL + query)
    .then(response => response.json())
    .then(jsonData => {
        currentImages = jsonData.data.children.map(p => {
            return {
                title: p.data.title,
                url: p.data.url
            }
        })
        startSlideshow()
    })
    .catch(err => {
        console.log('ERROR', err)
    })
}
const startSlideshow = () => {
    currentIndex = 0

    placeImage()
    document.getElementById('form-container').style.display = 'none'
    document.getElementById('slideshow-container').style.visibility = 'visible'
    
    interval = setInterval(changeImage, INTERVAL_DELAY)
}

const changeImage = () => {
    currentIndex++
    if (currentIndex >= currentImages.length) {
        currentIndex = 0
    }
    placeImage()
}

const placeImage = () => {
    document.getElementById('result').innerHTML = ''
    let img = document.createElement('img')
    img.src = currentImages[currentIndex].url
    img.alt = currentImages[currentIndex].url

    document.getElementById('result').append(img)
}

document.getElementById('stop-button').addEventListener('click', () => {
    document.getElementById('slideshow-container').style.visibility = 'hidden'
    document.getElementById('form-container').style.display = 'block'

    clearInterval(interval)
})
