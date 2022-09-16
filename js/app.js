//grab necessary DOM elements
const prompts = document.querySelector('#prompts') 
const slideshow = document.querySelector('#slideshow')
const stopBtn = document.querySelector('#stop')
const photoDiv = document.querySelector('#photo-div')
const searchForm = document.querySelector('#search')
const stop = document.querySelector('#stop')

//a counter to help cycle through images 
let count = 0





//make an array of images from the first 10 posts 
const createImageArray = (json) => {
    const origArray = json.data.children
    const imageURLs = origArray.map(elem => elem.data.thumbnail)
    return imageURLs
}
//create DOM elements for images
const ammendDOM = (urlArray) => {
    urlArray.forEach((url) => {
        let img = document.createElement('img')
        img.src = url
        img.style.display = 'none'
        photoDiv.appendChild(img)
    })
}

//function to cycle through images in the slideshow
const toggleImage = (imgNodes) => {
    imgNodes.forEach((node, i) => {
        //keep all images w/ display none except for the image at the index of the current count
        node.style.display = i === count ? 'block' : 'none'
    })
    //increment count by 1 unless count is at the end of the array, in which case cycle back to 0
    count = count === (imgNodes.length - 1) ? 0 : count + 1
} 

const refresh = () => {
    //remove image tags from DOM
    while (photoDiv.firstChild) {
        photoDiv.removeChild(photoDiv.firstChild)
    }
    //show prompt and form again. Clear search term from input
    prompts.style.removeProperty('visibility')
    searchForm.style.removeProperty('visibility')
    document.querySelector('#term').value = ''
    //hide stop button
    stop.style.display = 'none'
}

const initSlideshow = () => {
    //hide prompts and form
    prompts.style.visibility = 'hidden'
    searchForm.style.visibility = 'hidden'
    //show stop button
    stop.style.display = 'inline-block'
    const images = photoDiv.querySelectorAll('img')
    toggleImage(images)
    const interval = setInterval(toggleImage, 1500, images)
    stop.addEventListener('click', () => {
        clearInterval(interval)
        refresh()
    })
    
}



//on page load set event listeners 
document.addEventListener('DOMContentLoaded', ()=> {
    //listener function on search submit
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        //fetch data from reddit and turn it into JSON
        fetch(`https://www.reddit.com/search.json?q=${term.value}+nsfw:no&limit=10`)
        .then(res => res.json())
        //generate array of image URLs
        .then(createImageArray)
        //create image tags for each image and append to DOM
        .then(ammendDOM)
        .then(initSlideshow)
        .catch(console.error)
        
    })
})

//event listener for stop button



