const form = document.getElementById("form")
const slide = document.getElementById("slide")
const title = document.querySelector("h1")
const message = document.querySelector("h2")
const image = document.querySelector("img")

linkArray = []

// a function to change the image urls of the img
const runSlideshow = () => {
    const currentLinkIndex = linkArray.find((link, index) => {
        if (link === image.src) {
            return index
        }
    })
    let newLinkIndex = currentLinkIndex +1
    if (newLinkIndex == linkArray.length) {
        newLinkIndex = 0
    }
    image.src = newLinkIndex
}



//a function to make an array of thumbnail links, then run them through slideshow function
const makeLinkArray = (responseArray) => {
    const dataArray = responseArray.data
    const postsArray = dataArray.children
    postsArray.forEach(post => {
        const childData = post.data
        const thumbLink = childData.thumbnail
        if (thumbLink !== "self") {
            linkArray.push(thumbLink)
        }
    })
    image.src = linkArray[0]
    setInterval(runSlideshow, 5000)
}







// When the user enters a search term and presses enter
form.addEventListener("submit", event => {
    event.preventDefault()
// The form / title / description should hide
    title.style.display = "none"
    form.style.display = "none"
     // Show a loading message (optional)
    message.innerText = "Loading..."
    const userInput = input.value
    const searchTerm = userInput.replace(" ", "%20")
    fetch(`http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`)
    .then(response => response.json())
    .then(makeLinkArray)
    .catch(console.error)
})






// Fetch related posts from reddit (with fetch)
// Display animation / slideshow of images (with DOM manipulation)
// Show a button to stop slideshow
// Repeat animation until user clicks "stop", then redisplay the original form/title/description
// When the user clicks the "stop" button
// Animation stops / images are removed
// Form / title / description are shown again
// User can enter a new search term


// Use AJAX to make a request. Show data in console
// Create an array of image URLs (tip: use filter and map).
// Make the form / title / description hide
// Cycle through images
// tip: use setInterval
// Either add images, or change the src of a single image tag
// Add some interesting style / animation
// Create button to stop animation (tip: use clearInterval).



//url stored @   /children/data/thumnail  : "http..." not "self"
// { ..., data:[..., children: [data: {..., thumnail: ,...},...],...],...}
//