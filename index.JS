let globalImgUrlArray = []
let iterator = 0
let timerIdtoEnd = 0

// Step 1
// Search bar and results
const form = document.querySelector('#inputform')
// add a listener to my submit button
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const userSearchTerm = input.value
    console.log(userSearchTerm)
    // insert the userSearchTerm into the API fetch request
    fetch(`https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image`)
    .then(response => response.json())
    .then(photoLoop)
    .catch()
})

//Step 2
// Div to store images
// Here we are grabbing the images returned from our search and sorting them. Then we will take the ones we like and put them into the "emptyArray"
let i = 0
const photoLoop = (arrayObject) => {    
    
    // const urlPath = arrayObject.data.children[i].data.preview.image[i].data.url

    // Loop to iterate through the stored images   
    let emptyArray = []
    for (let i = 0; i < arrayObject.data.children.length; i++) {
        emptyArray.push(arrayObject.data.children[i].data.url)
        console.log("emptyArray" + emptyArray)
    }
    const setOutsideArray = (emptyArray) => {
        globalImgUrlArray = [...emptyArray]
        return emptyArray
    }
    setOutsideArray(emptyArray)
    console.log(globalImgUrlArray[0])
    loopContainer()
    }  


// Step 3 
//take the cleaned images and put them into the emptyArray to display in the slideshow div. 
const loopContainer = () => {
const slideLoop = () => {
    console.log('slideLoop')
    if (iterator === globalImgUrlArray.length) {
        clearInterval(timerIdtoEnd)  
    }
    const makeImg = document.querySelector('#image')
    makeImg.src = globalImgUrlArray[iterator]
    iterator++ 

    document.querySelector('#stopSlideShow').addEventListener('click', event => {
        clearInterval(timerIdtoEnd)
    })
}
const startInterval = () => {
    console.log('startinterval')
    let intervalID = setInterval(slideLoop,2000)
    timerIdtoEnd = intervalID
}
startInterval()
}
// Use this interval later


// https://www.reddit.com/r/aww.json

// redditFetch(redditApiUrl2)
// white_check_mark
// eyes
// raised_hands