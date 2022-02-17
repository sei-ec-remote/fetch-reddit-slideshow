// Use AJAX to make a request. Show data in console
document.addEventListener("DOMContentLoaded", () => {
    const requestURL = "https://www.reddit.com/search.json?q=cats+nsfw:no"
    const submitButton = document.querySelector('#submitButton')
    const searchBar = document.querySelector('#searchBar')
    let urls = []


    submitButton.addEventListener('click', (event) => {
        const removeInput = document.getElementById('searchBar')
        removeInput.remove()

        const removeButton = document.getElementById('submitButton')
        removeButton.remove()

        const stopButton = document.createElement('button')
        stopButton.className = 'stopButton'
        stopButton.innerText = "stop"
        container.appendChild(stopButton)


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
                    // return img.data.url
                    const imgDisplay = document.createElement('img')
                    imgDisplay.className = 'imgShow'
                    imgDisplay.src = img.data.url
                    console.log(img.data.url)
                    imgDisplay.style.width = "300px"
                    console.log(imgDisplay)
                    container.appendChild(imgDisplay)


                })

                // for (let i = 0; i = urls.length; i++) {
                //     const imgDisplay = document.createElement('img')
                //     imgDisplay.className = 'imgShow'
                //     imgDisplay.src = urls[i]
                //     console.log(urls[i])
                //     imgDisplay.style.width = "300px"
                //     console.log(imgDisplay)
                //     return container.appendChild(imgDisplay)
                // }
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
