// Use AJAX to make a request. Show data in console
const imgDisplay = document.createElement('img')
const submitButton = document.querySelector('#submitButton')
const searchBar = document.querySelector('#searchBar')
const stopButton = document.createElement('button')
const textDisplay = document.querySelector('#feels')
const title = document.querySelector("#title")

document.addEventListener("DOMContentLoaded", () => {
    const requestURL = "https://www.reddit.com/search.json?q=cats+nsfw:no"
    let urls = []
    let intervalID;

    submitButton.addEventListener('mouseover', function () {
        submitButton.style.color = 'gray';
    })
    submitButton.addEventListener('mouseout', function () {
        submitButton.style.color = 'white';
    })

    const loopStart = () => {
        let i = 0;
        const imgLoop = () => {
            imgDisplay.src = urls[i]
            container.appendChild(imgDisplay)
            imgDisplay.style.width = "300px"
            imgDisplay.style.height = "400px"
            i++
            if (i === urls.length) {
                i = 0
            }
        }

        intervalID = setInterval(imgLoop, 2000)
    }

    submitButton.addEventListener('click', (event) => {
        const removeInput = document.getElementById('searchBar')
        removeInput.remove()

        const removeTitle = document.getElementById('title')
        removeTitle.remove()

        const removeButton = document.getElementById('submitButton')
        removeButton.remove()

        stopButton.className = 'stopButton'
        stopButton.innerText = "stop"
        container.appendChild(stopButton)

        const removeFeels = document.getElementById('feels')
        removeFeels.remove()


        fetch(`${requestURL}`)
            .then(apiResponse => {
                return apiResponse.json()
            })

            .then(jsonData => {
                // console.log("this is the data we want: ", jsonData)
                let data = jsonData.data.children
                // map over & return data.url
                // console.log("data", data)
                urls = data.map((img) => {
                    return img.data.thumbnail
                })

                loopStart()

                stopButton.addEventListener('click', function () {
                    clearInterval(intervalID)
                    container.appendChild(title)
                    container.appendChild(textDisplay)
                    container.appendChild(searchBar)
                    container.appendChild(submitButton)
                    imgDisplay.remove()
                    stopButton.remove()
                })
                stopButton.addEventListener('mouseover', function () {
                    stopButton.style.color = 'gray';
                })
                stopButton.addEventListener('mouseout', function () {
                    stopButton.style.color = 'white';
                })
            })

            .catch(err => console.log("error!", err))

    })

})


// Create an array of image URLs (tip: use filter and map).
// Make the form / title / description hide
// Cycle through images
// tip: use setInterval
// Either add images, or change the src of a single image tag
// Add some interesting style / animation
// Create button to stop animation (tip: use clearInterval).


// When the user enters a search term and presses enter
// The form / title / description should hide
// Show a loading message (optional)
// Fetch related posts from reddit (with fetch)
// Display animation / slideshow of images (with DOM manipulation)
// Show a button to stop slideshow
// Repeat animation until user clicks "stop", then redisplay the original form/title/description
// When the user clicks the "stop" button
// Animation stops / images are removed
// Form / title / description are shown again
// User can enter a new search term
