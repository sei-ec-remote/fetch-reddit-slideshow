
let iterator = 0

// Step 1
// Search bar and results
const form = document.getElementById('inputform')
console.log(form)
// add a listener to my submit button
form.addEventListener('submit', (event) => {

    event.preventDefault()

    const userSearchTerm = input.value
    console.log(userSearchTerm)
    // insert the userSearchTerm into the API fetch request
    fetch(`https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image`)
    .then(response => response.json())
    .then(photoLoop)
    .catch()
})

//Step 2
// Div to store images
// Here we are grabbing the images returned from our search and sorting them. Then we will take the ones we like and put them into the "emptyArray"
let i = 0
const photoLoop = (arrayObject) => {    
    
    // const urlPath = arrayObject.data.children[i].data.preview.image[i].data.url

    // Loop to iterate through the stored images   
    let emptyArray = []
    for (let i = 0; i < 25; i++) {
        emptyArray[i] = arrayObject.data.children[i].data.url
        console.log("emptyArray" + emptyArray)
    
    slideLoop(emptyArray)
    }}  


// Step 3 
//take the cleaned images and put them into the emptyArray to display in the slideshow div. 
const slideLoop = (emptyArray) => {
    if (iterator <25) {
        for (let i = 0; i < slideLoop.length; i++)
        console.log("iterator:" + iterator)
        const slidePhotoDivGrab = document.querySelector('#slideshow')
        slidePhotoDivGrab.innerHTML = `<img src="${emptyArray[iterator]}" + width=300 + heigth=300 /img>`
        
        
        document.querySelector('body').appendChild(slidePhotoDivGrab)
        iterator++
    }
}

setInterval(slideLoop, 2000)
// Use this interval later


// https://www.reddit.com/r/aww.json

// redditFetch(redditApiUrl2)
// white_check_mark
// eyes
// raised_hands