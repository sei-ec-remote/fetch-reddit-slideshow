// URL References:
const url = 'http://www.reddit.com/search.json?q='

// global references to html elements
const header = document.getElementsByTagName('header')[0]
const headerElements = header.children
const buttonSearch = document.getElementById('buttonSearch')
const body = document.getElementsByTagName('body')[0]

//reference to an empty list to hold images from the fetch
const slideshowImages = []

//function to hide content after form has been submitted
const hideForm = () => {
    for(let i=0; i < headerElements.length; i++){
        headerElements[i].style.display = "none"
        console.log('hiding this element,', headerElements[i])
    }
}

// create a function that will put the search term into the request url
const pulledSearchTerm = () =>{
    const searchInput =  document.getElementById('inputSearch').value
    const resultUrl = `${url}${searchInput}+nsfw:no`
    return resultUrl
}

// image array reference
let imageArrayRef = 1

// variable to store our intervalID
let intervalForSlides;

// create a function to transition the images in the slideshow
const loopThroughImages = (slideshow, slideshowImages) => {
        slideshow.src = slideshowImages[imageArrayRef]
        console.log('now displaying the image found here, ', slideshowImages[imageArrayRef])
        imageArrayRef += 1
}


//create a function to add image element to add the pics from the fetch
const createSlideshow = (slideshowImages) => {
    // create the image element
    const slideshow =  document.createElement('img')
    //lets make this a decent size image
    slideshow.style.width = "500px"
    slideshow.style.height = "500px"
    // append slide show to the document
    body.appendChild(slideshow)
    // add stop button too
    createStopSlideButton()
    //loopThroughImages caller function
    const loopImages = () => loopThroughImages(slideshow, slideshowImages)
    // let's try and loop through the images every 1 second aka 1000 ms
    intervalForSlides  = setInterval(loopImages,1000)
}

const createStopSlideButton = () => {
    const stopButton = document.createElement('button')
    stopButton.style.width = '250px'
    stopButton.style.height = '100px'
    stopButton.textContent = "STOP"
    body.appendChild(stopButton)
    stopButton.addEventListener('click', () => {
        clearInterval(intervalForSlides)
    })  
}

//create a function to stop the slideshow and return back to the original header which will let user input a new image search
const stopSlideshow = () => {


}


//create a function to fetch data from reddit
const fetchRedditPics = (requestUrl) => {
    console.log("requestUrl,", requestUrl)
    fetch(requestUrl)
        .then((responseData)=>{
            return responseData.json();
        })
        .then((jsonData)=>{
            const dataChildren = jsonData['data']['children']
            for(let i =0; i< dataChildren.length; i ++){
            const imageUrl = dataChildren[i]['data']['thumbnail']
            //console.log('imageUrl, ', imageUrl)
            slideshowImages.push(imageUrl)
            }
            return slideshowImages
        })
        .then((slideshowImages)=>{
            console.log('slideshowImages,', slideshowImages)
            createSlideshow(slideshowImages)
        })
        .catch((error)=>{
            console.log("shoot there is an error..", error)
        })
}


//add listeners 
document.addEventListener('DOMContentLoaded', () => {
    //console.log("DOM Content Loaded")
    buttonSearch.addEventListener("click",(event) => { 
        event.preventDefault()
        hideForm()
        fetchRedditPics(pulledSearchTerm())
    }
    )
})