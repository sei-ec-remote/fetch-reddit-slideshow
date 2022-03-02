const requestUrl = "http://www.reddit.com/search.json?q="
const imgSpace = document.querySelector('#imgSpace')
const submitButton = document.querySelector('#submitButton')
const formSubmit = document.querySelector('#formSubmit')
const textInput = document.querySelector('#textInput')
const stopButton = document.querySelector('#stopButton')

// variable for our interval
let setInt = null
// container for the images
let images = []
// index of the current image being shown 
let imageIndex = 0
// interval speed
const timerSpeed = 1000

// stop button not shown on load
stopButton.style.display = 'none'
imgSpace.style.display = 'none'

const fetchReddit = (e) => {
    //stops page from reloading on submit
    e.preventDefault()
    
    // console.log ('fetch the value', textInput.value )
    fetch(requestUrl + textInput.value)
    // console.log('this is the e value', e.value)
    .then( res => res.json())
    .then((apiResponse) => {
        // console.log(apiResponse.data.children)
        images = apiResponse.data.children 
        .map(p => {
            return {
                url: p.data.url,
                subreddit: p.data.subreddit,
                author: p.data.subreddit
            }
        })
        
        .filter(image => {
            const imgFile = image.url.slice(-4)
            if (imgFile === '.jpg' || imgFile === '.png') return true
            return false
        })
        // interval for the slideshow
        setInt = setInterval(changeSlide, timerSpeed)
        stopButton.style.display = 'block'
        // invoke the slideshow
        changeSlide()
    })
    
    .catch((err) = () => { 
        console.log(err)
    })

    formSubmit.style.display = 'none'
    imgSpace.style.display = 'block'
    
}


const changeSlide = () => {
    // incremet the slideshow index
    imageIndex++
    // reset the image index if its out of bounds
    if(imageIndex >= images.length) imageIndex = 0
    console.log(images[imageIndex])
    // empty out the div of any elements
    while(imgSpace.firstChild) {
        imgSpace.removeChild(imgSpace.firstChild)
    }
    // update the DOM
    const imageSlide = document.createElement('img')
    imageSlide.src = images[imageIndex].url
    imageSlide.alt = images[imageIndex].author
    imageSlide.width = '400'
    
    imgSpace.appendChild(imageSlide)
}


const stopSlideshow = () => {
    stopButton.style.display = 'none'  
    formSubmit.style.display = 'block' 
    clearInterval(setInt) 
    imgSpace.style.display = 'none'
}

formSubmit.addEventListener('submit', fetchReddit)
stopButton.addEventListener('click', stopSlideshow)

