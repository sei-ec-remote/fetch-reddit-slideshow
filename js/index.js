// capture container with title and search bar
const startContainer = document.querySelector('#start-container')

// capture container for slides
const slideContainer = document.querySelector('#slide-container')

// capture stop button
const stopButton = document.querySelector('#stop-button')

// capture form element
const form = document.querySelector('#form')

// initialize an empty array for storing image URLs
// const gallery = []

// function to initiate gallery view
const showGallery = (array) => {
    array.forEach(picture => {
        // // check if a slide with class image-slide exists already

        // create a new empty div
        const imgDiv = document.createElement('div')

        // add image-slide class
        imgDiv.classList.add('image-slide')

        // set innerHTML of the div to the src URL of the array element
        imgDiv.innerHTML = `<img src="${picture}">`
        
        // console.log(imgDiv.innerHTML)
        // append div with image to container
        slideContainer.appendChild(imgDiv)

        // set timeout before moving to next photo
    })
}

// handle reddit fetch success
const onRedditFetchSuccess = (redArray) => {
    // set display of start-container to none
    startContainer.style.display = 'none'
    // set display of slide container and stop button to visible
    slideContainer.style.display = 'block'
    stopButton.style.display = 'block'
    // console log the top level JSON object
    console.log(redArray)
    
    // set variable for the array of results
    const redditResult = redArray.data.children
    
    // log array of results
    console.log(redditResult)

    // initialize an empty array for storing image URLs
    const gallery = []

    // iterate over array of results to check the preview image property
    redditResult.forEach(element => {
        // if the array element has a preview property, create a div and push it to the page
        if (element.data.hasOwnProperty('preview') && element.data.preview.images[0].resolutions[3]) {
            
            // set variable for the URL of the preview image
            const imgURL = element.data.preview.images[0].resolutions[3].url

            // push the url into the gallery array
            gallery.push(imgURL)
        }
    })
    console.log(gallery)
    showGallery(gallery)
}

const onRedditFetchFailure = () => {
    console.log('reddit fetch failed')
}

form.addEventListener('submit', (event) => {
    // prevent the default behavior of 'refresh page'
    event.preventDefault()

    // capture user input
    const userSearch = input.value

    fetch(`https://www.reddit.com/r/pics/search.json?q=${userSearch}&limit=5&restrict_sr=1&sr_nsfw=`)
        .then(response => response.json())
        .then(onRedditFetchSuccess)
        .catch(onRedditFetchFailure)
})

stopButton.addEventListener('click', () => {
    // remove children of slide container
    while (slideContainer.firstChild) {
        slideContainer.removeChild(slideContainer.firstChild)
    }

    // set slide container and stop button to display: none
    slideContainer.style.display = 'none'
    stopButton.style.display = 'none'

    // re-display the start container
    startContainer.style.display = 'block'
})

// initialize fetch from reddit on DOM Content Loaded
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://www.reddit.com/r/pics/search.json?q=cats&limit=50&restrict_sr=1&sr_nsfw=')
//         .then(response => response.json())
//         .then(onRedditFetchSuccess)
//         .catch(onRedditFetchFailure)
// })