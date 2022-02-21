// URL References:
const url = 'http://www.reddit.com/search.json?q='

// global references to html elements
const header = document.getElementsByTagName('header')[0]
const headerElements = header.children
const buttonSearch = document.getElementById('buttonSearch')

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

// create a function to transition the images in the slideshow
const loopThroughImages = (slideshow, slideshowImages) => {
    for (let i = 1; i < slideshowImages.length; i ++){
        slideshow.src = slideshowImages[i]
        console.log('now displaying the image found here, ', slideshowImages[i])
    }
}



//create a function to add image element to add the pics from the fetch
const createSlideshow = (slideshowImages) => {
    // create the image element
    const slideshow =  document.createElement('img')
    //lets make this a decent size image
    slideshow.style.width = "500px"
    slideshow.style.height = "500px"
    // append slide show to the document
    // first let's make a reference to what we want to append it to
    const body = document.getElementsByTagName('body')[0]
    console.log('this is the body reference to append the pic: ', body)
    body.appendChild(slideshow)
    //now that the slideshow is appended let's add a pic to the slide to test it out
    //slideshow.src = slideshowImages[1]
    // let's try and loop through the images every 1 second aka 1000 ms
    setInterval(loopThroughImages(slideshow, slideshowImages),1000)
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