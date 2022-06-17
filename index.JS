

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
    const urlPath2 = arrayObject.data.children[0].data.url

    // Loop to iterate through the stored images   
    let emptyArray = []
    for (let i = 0; i < 25; i++) {
        emptyArray[i] = arrayObject.data.children[i].data.url
        console.log("emptyArray" + emptyArray)
    slideLoop(emptyArray)
    }}  

const slideLoop = (emptyArray) => {
    // console.log(emptyArray[0])
    const slidePhotoDivGrab = document.querySelector('#slideshow')
    slidePhotoDivGrab.innerHTML = `<img src="${emptyArray[i]}" + width=300 + heigth=300 /img>`
    document.querySelector('body').appendChild(slidePhotoDivGrab)
    // iterator++
}
// setInterval(slideLoop, 2000)
//     const slidePhotoDivGrab = document.querySelector('#slideshow')
// // have the pictures iterate through
//     // let arrayObject = 0
//     // for (let i = 0; i < 15; i++)
//     let imageArray = arrayObject.data.children
//     console.log(imageArray)

//     const photoDiv = document.createElement('div')

//     // console.log(arrayObject.data.children[0].data.url)

//     photoDiv.innerHTML = `<img src="${arrayObject.data.children[1].data.url}" + width=600 + height=600 /img>` 

//     document.querySelector('body').appendChild(photoDiv)
//     console.log(arrayObject)
// }


    

// const redditApiUrl = 'https://www.reddit.com/r/pics/.json?jsonp+nsfw:no'
// const redditApiUrl1 =  https://www.reddit.com/r/aww.json

// let imageSearch = "dogs"   // THIS WORKED 
// const redditApiUrl2 =  `https://www.reddit.com/search.json?q="${imageSearch}"+nsfw:no+type:image`  // THIS WORKED


// https://www.reddit.com/r/aww.json

// redditFetch(redditApiUrl2)
// white_check_mark
// eyes
// raised_hands