
// capture container for slides
const slideContainer = document.querySelector('#slide-container')

// capture form element
const form = document.querySelector('#form')

// initialize an empty array for storing image URLs
const gallery = []

// handle reddit fetch success
const onRedditFetchSuccess = (redArray) => {
    // console log the top level JSON object
    console.log(redArray)
    // set variable for the array of results
    const redditResult = redArray.data.children
    // log array of results
    console.log(redditResult)
    // iterate over array of results to check the preview image property
    redditResult.forEach(element => {
        // if the array element has a preview property, create a div and push it to the page
        if (element.data.hasOwnProperty('preview') && element.data.preview.images[0].resolutions[3]) {
            // set variable for the URL of the preview image
            const imgURL = element.data.preview.images[0].resolutions[3].url
            gallery.push(imgURL)
            // create div to be pushed
            const imgDiv = document.createElement('div')
            imgDiv.classList.add('image-slide')
            // set innerHTML of the div to the src URL of the array element
            imgDiv.innerHTML = `<img src="${imgURL}">`
            // console.log(imgDiv.innerHTML)
            // append div with image to container
            document.querySelector('#slide-container').appendChild(imgDiv)
        }
    })
    console.log(gallery)
}

const onRedditFetchFailure = () => {
    console.log('reddit fetch failed')
}

// initialize fetch from reddit on clicking a button
// document.addEventListener('click', (event) => {
//     event.preventDefault()
//     fetch(`https://www.reddit.com/r/pics/search.json?q=cats&limit=50&restrict_sr=1&sr_nsfw=`)
//         .then(response => response.json())
//         .then(onRedditFetchSuccess)
//         .catch(onRedditFetchFailure)
// })

form.addEventListener('submit', (event) => {
    // prevent the default behavior of 'refresh page'
    event.preventDefault()

    // capture user input
    const userSearch = input.value

    fetch(`https://www.reddit.com/r/pics/search.json?q=${userSearch}&limit=50&restrict_sr=1&sr_nsfw=`)
        .then(response => response.json())
        .then(onRedditFetchSuccess)
        .catch(onRedditFetchFailure)
})

// initialize fetch from reddit on DOM Content Loaded
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://www.reddit.com/r/pics/search.json?q=cats&limit=50&restrict_sr=1&sr_nsfw=')
//         .then(response => response.json())
//         .then(onRedditFetchSuccess)
//         .catch(onRedditFetchFailure)
// })