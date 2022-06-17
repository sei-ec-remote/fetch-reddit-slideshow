// capture container with title and search bar
const startContainer = document.querySelector('#start-container')

// capture container for slides
const slideContainer = document.querySelector('#slide-container')

// capture stop button
const stopButton = document.querySelector('#stop-button')

// capture form element
const form = document.querySelector('#form')

// define variable to capture intervalID
let slideStepID = 0

// function to initiate gallery view
const buildGallery = (array) => {
    array.forEach(picture => {
        // // check if a slide with class image-slide exists already

        // create a new empty div
        const imgDiv = document.createElement('div')

        // add image-slide class
        imgDiv.classList.add('image-slide', 'img-fluid')

        // set innerHTML of the div to the src URL of the array element
        imgDiv.innerHTML = `<img src="${picture}">`
        
        // console.log(imgDiv.innerHTML)
        // append div with image to container
        slideContainer.appendChild(imgDiv)
    })
    slideTransition()
}

// function to manage slide transitions
const slideTransition = () => {
    // grab HTML collection of the divs with image
    const images = document.querySelectorAll('.image-slide')
    console.log(images)
    // initialize a variable to keep track of index position in collection
    let step = 0
    // set the first image to visible by adding visible class
    images[step].classList.add('visible')
    // start interval for switching images
    slideStepID = setInterval(() => {
        // remove visible class from previous image
        images[step].classList.remove('visible')
        // if step exceeds the number of images in collection, go back to first
        if (step === images.length-1) {
            step = 0
        } else {
            step++
        }
        // console.log(step)
        // add visible class to image div at newly incremented index
        images[step].classList.add('visible')
    }, 4000)

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
    // console.log(gallery)
    buildGallery(gallery)
}

// display on reddit fetch failure
const onRedditFetchFailure = () => {
    console.log('reddit fetch failed')
}

// add event listener to search bar to take user input
form.addEventListener('submit', (event) => {
    // prevent the default behavior of 'refresh page'
    event.preventDefault()

    // capture user input
    const userSearch = input.value

    // fetch from reddit API with user input
    fetch(`https://www.reddit.com/r/pics/search.json?q=${userSearch}&limit=50&restrict_sr=1&sr_nsfw=`)
        .then(response => response.json())
        .then(onRedditFetchSuccess)
        .catch(onRedditFetchFailure)
})

// event listener to return to search menu
stopButton.addEventListener('click', () => {
    // clear interval on slideshow function
    clearInterval(slideStepID)

    // remove children of slide container
    while (slideContainer.firstChild) {
        slideContainer.removeChild(slideContainer.firstChild)
    }

    // set slide container and stop button to display: none
    slideContainer.style.display = 'none'
    stopButton.style.display = 'none'

    // re-display the start container
    startContainer.style.display = 'block'

    // clear form contents
    form.reset()
})

// initialize fetch from reddit on DOM Content Loaded
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://www.reddit.com/r/pics/search.json?q=cats&limit=50&restrict_sr=1&sr_nsfw=')
//         .then(response => response.json())
//         .then(onRedditFetchSuccess)
//         .catch(onRedditFetchFailure)
// })