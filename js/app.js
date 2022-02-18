console.log("linked")
const stopShow = document.getElementById("stopShow")
const message = document.getElementById("message")
const form = document.querySelector("form")
const slideshow = document.querySelector(".slideshow-container")
const header = document.querySelector("h1")
let interval = ""
let imgArr = []
let count = 0


// We want to make a request to the Random User API
document.addEventListener("DOMContentLoaded", () => {
    const requestURL =  "http://www.reddit.com/search.json?q="
    const input = document.querySelector('#input')
    const slideshow = document.querySelector(".slideshow-container")
    const submitButton = document.querySelector('#submitButton')
   


    // click listener to submit request on click
    submitButton.addEventListener('click', (event) => {
        // stops page from reloading on form submit
        event.preventDefault()
        // console.log('clicky!', event)
        // extract the value from our number input and send it our request
       
        fetch(`${requestURL}${input.value}+nsfw:no`)
        // handle the response that we receive (convert it to JSON)

        .then(apiResponse => {
            return apiResponse.json()
        })

        // locate our data and store it so we can render
        .then(jsonData => {
            let userInput = jsonData.data.children
            const keys = Object.entries(userInput)
            console.log(keys)
            keys.find(function (key) {
               let innerKey = key[1].data
               let URL = innerKey.thumbnail
               if (URL.includes("jpg")||URL.includes("png")){
                imgArr.push(URL)
                }  
            })
            
            header.textContent=`${input.value}`

            count = 0

            startSlideshow()

            interval = setInterval(function () {
                nextImg()
                setTimeout(removeImages, 2200)
            },3000)

 

            // use that data to create some HTML elements to display
            // render those elements
            // ------- people.forEach(addPerson)
            
        })
            .catch(err => console.log('error!', err))
        // console.log('number input value:', numberInput.value)
    })

})




// FUNCTIONS


// Switches to next image and style image
function nextImg () {
    if (count>=imgArr.length) {
        count = 0
    }
    let img = document.createElement("img")
    img.style.backgroundImage=`url(${imgArr[count]})`
    slideshow.appendChild(img)
    img.style.backgroundSize="cover"
    img.style.width="300px"
    img.style.height="300px"
    img.style.border="white 4px solid"
    img.style.borderRadius="25px"
    count ++
}

// Reverts back to load screen
function endSlideshow () {
    // resets classes and variables
    stopShow.classList.add("hide")
    message.classList.remove("hide")
    form.classList.remove("hide")
    input=""
    imgArr=[]
    clearInterval(interval)
    removeImages()
    header.textContent="Slideshow"
} 

// hides form and shows stop button
function startSlideshow () {
    stopShow.classList.remove("hide")
    message.classList.add("hide")
    form.classList.add("hide")

}

// Removes image from slideshow container
function removeImages() {
    while (slideshow.firstChild) {
        slideshow.removeChild(slideshow.firstChild);
    }
}



// Eventlisteners
stopShow.addEventListener("click", endSlideshow)
submitButton.addEventListener("click",startSlideshow)