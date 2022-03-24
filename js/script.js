// console.log("hi")
document.addEventListener("DOMContentLoaded", () => {

const searchButton = document.querySelector("#searchButton")
const stopButton = document.querySelector("#stopButton")
const title = document.querySelector("#title")
const requestURL = "http://www.reddit.com/search.json?q="
const textInput = document.querySelector("#textInput")
const info = document.querySelector("#info")
const imgUrl = document.getElementById("img")
let imageArray = []
let counter = 0


stopButton.addEventListener("click", (e) => {
    // title.style.display = ''
    // info.style.display = ''
    // searchButton.style.display = ''
    // textInput.style.display = ''
    clearInterval(slide)
})

searchButton.addEventListener("click", (e) => {
    e.preventDefault()
    searchButton.remove()
    textInput.remove()
    info.remove()
    title.remove()
    fetch(`${requestURL}${textInput.value}+nsfw:no`)
    .then(apiResponse => {
        return apiResponse.json()
    })
    .then(jsonData => {
        console.log(jsonData)
        let images = jsonData.data.children
        let thumb = 0
        console.log("this is images", images)
        for (let i = 0;i < images.length; i++) {
            thumb = images[i].data.thumbnail
            if (thumb.includes(".png")||thumb.includes(".jpg")) {
                console.log("this is thumb",thumb)
                imageArray.push(thumb)
            }
            console.log("this is imageArray", imageArray)
        }
        const cycle = () => {
            imgUrl.src = imageArray[counter]
            while (counter === imageArray.length - 1) {
                counter =- 1
            }
            counter ++
        }   
        let slide = setInterval(cycle, 500)
        console.log(counter)
    })
    .catch(err => console.log('error!', err))
})
})
