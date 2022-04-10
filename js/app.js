console.log('script linked')

// * Some sort of title
const titleH1 = document.getElementById('pageTitle')

// * A short description telling the user what to do
const description = document.getElementById('description')

// * A blank text field
const form = document.getElementById('form')
const userInput = document.getElementById('search')

// * A Button ("start" or "go" or "search")
const submitButton = document.getElementById('submitButton')

const createStopButton = () => {
    const stopButton = document.createElement('button')
    stopButton.id = 'stop-button'
    stopButton.innerText = 'Stop slideshow'
    document.querySelector('body').appendChild(stopButton)
}

// function for reddit fetch
const redditFetch = () => {
    const requestURL = `http://www.reddit.com/search.json?q=${userInput.value}+nsfw:no`
    fetch(requestURL)
    // jsonify the data
    .then((responseData)=>{
        return responseData.json()
    })
    // use for loop to grab each image from the response data
    .then((jsonData)=>{
        for (let i = 0; i < 10; i++){
            if (
                jsonData.data.children[i].data.url.includes('.png') || 
                jsonData.data.children[i].data.url.includes('.jpeg') ||
                jsonData.data.children[i].data.url.includes('.jpg')
            )
                {
                    // create an img html tag for each image in the response data
                    // and append it to the div for images
                    let img = document.createElement('img')
                    img.src = jsonData.data.children[i].data.url
                    imgDivContainer.appendChild(img)
                }
        }
    })
    .catch((error)=>{
        // any errors encountered in the request or the .then promises above will be passed into this callback
        console.log("Oh no, there's been an error!", error)
    })
}

// removing the starting page when the user presses search button
const removeFormTitleDescription = () => {
    document.querySelector('body').removeChild(titleH1)
    document.querySelector('body').removeChild(description)
    document.querySelector('body').removeChild(form)
}

// code for when the user submits search query
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // create div to contain images
    const imgDivContainer = document.createElement('div')
    imgDivContainer.id = 'img-container'
    document.querySelector('body').appendChild(imgDivContainer)

    redditFetch()
    removeFormTitleDescription()
    createStopButton()
    // add code to change back to the starting page when user clicks stop button
    const stopButton = document.getElementById('stop-button')
    stopButton.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('body').removeChild(imgDivContainer)
        document.querySelector('body').appendChild(titleH1)
        document.querySelector('body').appendChild(description)
        document.querySelector('body').appendChild(form)
        document.querySelector('body').removeChild(stopButton)
    })
})

const slideshow = () => {
    // display one picture
    document.createElement('img')
    img.src
    // then remove it and display another
    // use setInterval
}

