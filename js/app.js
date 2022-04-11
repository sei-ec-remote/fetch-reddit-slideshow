// We want to make a request to the Random User API
document.addEventListener("DOMContentLoaded", () => {
    //request URL base, the query input is populated by the user
    const requestUrl = "http://www.reddit.com/search.json?q="
    //search input value entered by the user
    const searchInputValue = document.querySelector('#search')
    const image = document.getElementById('#image')
    const submitButton = document.querySelector('#submitButton')
    const stopButton = document.querySelector('#stopButton')
    // Create an array of image URLs (tip: use filter and map)
    let images = []
    //Create button to stop animation (tip: use clearInterval)
    stopButton.addEventListener('click', (e) => {
        clearInterval()
    })
    // click listener to submit request on click
    submitButton.addEventListener('click', (event) => {
        // stops page from reloading on form submit
        event.preventDefault()
        // console.log('clicky!', event)
        // extract the value from our number input and send it our request
        fetch(`${requestUrl}${searchInputValue.value}`)
        // handle the response that we receive (convert it to JSON)
        .then(apiResponse => {
            return apiResponse.json()
        })
        // locate our data and store it so we can render
        .then(jsonData => {
            console.log(jsonData)
            let searchImages = jsonData.data.children
            console.log('this is the data returned from search:', searchImages)
            
           
            // Cycle through images
            // tip: use setInterval
            // Either add images, or change the src of a single image tag
        })
            .catch(err => console.log('error!', err))
        // console.log('number input value:', numberInput.value)
    })

})