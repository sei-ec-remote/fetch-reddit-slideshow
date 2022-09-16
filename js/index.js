const form = document.getElementById("form")
const slide = document.getElementById("slide")
const title = document.querySelector("h1")
const message = document.querySelector("h2")
const display = document.getElementById("photo-display")

let linkArray = []
let imageIdArray = []
let currentSlide = 1

const makeImages = () => {
    linkArray.forEach((link, index) => {
        const image = document.createElement("img")
        image.style.display = "none"
        image.src = link
        image.setAttribute("id", index)
        display.appendChild(image)
        imageIdArray.push(index)
    })
    setInterval(runSlideshow, 2000) 
}

const runSlideshow = () => {
    imageIdArray.forEach((id) => {
        if (document.getElementById(`${id}`).style.display = "block") {
            document.getElementById(`${id}`).style.display = "none"
        }
        if (id == currentSlide) {
            document.getElementById(`${id}`).style.display = "block"
        }
    }
    if (currentSlide === (imageIdArray.length - 1){
        currentSlide = 0
    } else {
        currentSlide++
    }
}


//a function to make an array of thumbnail links, then run them through slideshow function
const makeLinkArray = (responseArray) => {
    const dataArray = responseArray.data
    const postsArray = dataArray.children
    postsArray.forEach(post => {
        const childData = post.data
        const thumbLink = childData.thumbnail
        if (thumbLink !== "self" && thumbLink !== "default") {
            linkArray.push(thumbLink)
        }
    })
    message.style.display = "none"
}


// When the user enters a search term and presses enter
form.addEventListener("submit", event => {
    event.preventDefault()
// The form / title / description should hide
    title.style.display = "none"
    form.style.display = "none"
     // Show a loading message
    message.innerText = "Loading..."
    const userInput = input.value
    //fix spaces between words
    const searchTerm = userInput.replace(" ", "%20")
    fetch(`http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`)
    .then(response => response.json())
    .then(makeLinkArray)
    .then(makeImages())
    .catch(console.error)
})

