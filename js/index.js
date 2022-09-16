const form = document.getElementById("form")
const slide = document.getElementById("slide")
const title = document.querySelector("h1")
const message = document.querySelector("h2")
// const image = document.querySelector("img")
const display = document.getElementById("photo-display")

let linkArray = []
let currentSlide = 0



// a function to change the image urls of the img
// const runSlideshow = () => {
//     const image = display.firstElementChild
//     const newImage = document.createElement("img")
//     let currentLinkIndex = linkArray.find((link, index) => {
//         if (link === image.src) {
//             return index
//         }
//     })
//     let newLinkIndex = currentLinkIndex++
//     if (newLinkIndex === linkArray.length) {
//         newLinkIndex = 0
//     }
//     console.log(linkArray[1])
//     newImage.src = linkArray[newLinkIndex]
//     image.remove()
//     display.appendChild(newImage)
// }


const runSlideshow = () => {
    document.getElementById(`${currentSlide - 1}`).style.display = "none"
    document.getElementById(`${currentSlide}`).style.display = "block"
    if (currentSlide < (linkArray.length - 1)) {
        currentSlide++
    } else { 
        currentSlide = 0
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
    // const image = document.createElement("img")
    // image.src = linkArray[0]
    // display.appendChild(image)
    setInterval(runSlideshow, 2000)
}

//a function to make an array of images
const makeImages = () => {
    linkArray.forEach((link, index) => {
        const image = document.createElement("img")
        image.style.display = "none"
        image.src = link
        image.setAttribute("id", index)
        display.appendChild(image)
    })
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

