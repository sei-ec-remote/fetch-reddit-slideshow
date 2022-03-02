console.log('script linked')
// ## Requirements/User Experience

// #### Page should load with

// * Some sort of title
const titleH1 = document.getElementById('pageTitle')

// * A short description telling the user what to do
const description = document.getElementById('description')

// * A blank text field
const searchField = document.getElementById('searchField')
const search = document.getElementById('search')

// * A Button ("start" or "go" or "search")
const submitButton = document.getElementById('submitButton')


// * Show a button to stop slideshow

// button that is created when results return and disappears when clicked (default page state should return on stop)
const createStopButton = () => {
    const stopButton = document.createElement('button')
    stopButton.id = 'stop-button'
    stopButton.innerText = 'Stop slideshow'
}

// #### When the user enters a search term and presses enter

// declaring imgArray globally so it can be used outside of below function
let imgArray = []

// event listener for what to happen on submitButton click
submitButton.addEventListener('click', () => {

    // * The form / title / description should hide
    // maybe removeChild on those elements?
    const removeFormTitleDescription = () => {
        document.querySelector('body').removeChild(titleH1)
        document.querySelector('body').removeChild(description)
        document.querySelector('body').removeChild(searchField)
        // document.querySelector('body').removeChild(searchButton)
    }

    createStopButton()
    // * Fetch related posts from reddit (with `fetch`)
    // implement fetch
    const redditFetch = () => {
        const requestURL = `http://www.reddit.com/search.json?q=${searchField}+nsfw:no`
        fetch(requestURL)

        .then((responseData)=>{
            // Fetch will package the response into an object with some methods that allow us to do some useful things with the response.
            // Use the .json() method to return the data in JSON format
            return responseData.json()
        })

        .then((jsonData)=>{
            // whatever we return in the first .then promise will be passed into this callback function
            // do some stuff with the jsonData here
            
            // for (let i = 0; i < 10; i++){
            //     if (jsonData[i].includes('.png') || jsonData[i].includes('.jpeg') || jsonData[i].includes('.jpg')){
            //     imgArray.push(jsonData[i])
            //     }
            // }

            // for (let i = 0; i < 10; i++){
            //     let createImg = document.createElement('img')
            //     createImg.className = 'image'
            //     imgDivContainer.appendChild()
            // }
            console.log(jsonData)
            console.log(jsonData.results)
        })
        .catch((error)=>{

            // any errors encountered in the request or the .then promises above will be passed into this callback
            console.log("Oh no, there's been an error!", error)
        })
    }

    redditFetch()

    removeFormTitleDescription()

    // call redditFetch to get associated images
    
    // * Display animation / slideshow of images (with DOM manipulation)
    // a div displaying different images that change at different intervals
    const createImgDivContainer = () => {

        const imgDivContainer = document.createElement('div')

        imgDivContainer.id = 'img-container'

        imgDivContainer.innerText = 'slideshow goes here!'

        document.querySelector('body').appendChild(imgDivContainer)

        
    }

    // call createImgDivContainer to create div the img array will be stored in
    // createImgDivContainer()

    // call createStopButton to create the stop button
    createStopButton()

})





// * Repeat animation until user clicks "stop", then redisplay the original form/title/description
// image div should continue on a loop

// #### When the user clicks the "stop" button

// * Animation stops / images are removed
// removeChild the div that was created upon search
const removeImgDivContainer = () => {
    const imgDivContainer = document.getElementById('img-container')
    document.querySelector('body').removeChild(imgDivContainer)
}
// * Form / title / description are shown again
// appendChild these elements 
const addFormTitleDescription = () => {
    document.querySelector('body').appendChild(titleH1)
    document.querySelector('body').appendChild(description)
    document.querySelector('body').appendChild(searchField)
}
// * User can enter a new search term
// text form will be ready for another search

