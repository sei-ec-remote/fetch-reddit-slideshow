const form = document.getElementById("form")
const slide = document.getElementById("slide")
const title = document.querySelector("h1")
const message = document.querySelector("h2")
const display = document.getElementById("photo-display")
const button = document.querySelector("button")
const magImg = document.getElementById("mag-img")

let linkArray = []
let imageIdArray = []
let currentSlide = 0

const makeImages = () => {
    linkArray.forEach((link, index) => {
        const image = document.createElement("img")
        image.style.display = "none"
        image.src = link
        image.setAttribute("id", index)
        display.appendChild(image)
        imageIdArray.push(index)
    })
    window.slideInterval = setInterval(runSlideshow, 2000)
    message.innerText = ""
}


const resetSearch = () => {
    clearInterval(slideInterval)
    button.style.display = "none"
    imageIdArray.forEach(id => {
        document.getElementById(`${id}`).remove()
    })
    imageIdArray.length = 0
    linkArray.length = 0
    title.style.display = "block"
    form.style.display = "block"
    message.innerText = "Try another search!"
    magImg.style.top = "-20em"
}


const runSlideshow = () => {
    imageIdArray.forEach((id) => {
        if (document.getElementById(`${id}`).style.display = "inline-block") {
            document.getElementById(`${id}`).style.display = "none"
        }
        if (id == currentSlide) {
            document.getElementById(`${id}`).style.display = "inline-block"
        }
    })
    if (currentSlide === (imageIdArray.length - 1)) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    magImg.style.top = "-35em"
    button.innerText = "Stop"
    button.style.display = "inline-block"
    button.addEventListener("click", resetSearch)
}


//a function to make an array of thumbnail links
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
    makeImages()
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
    .catch(console.error)
})









