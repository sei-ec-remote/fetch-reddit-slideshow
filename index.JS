// call HTML



// Div to store images
const photoLoop = (arrayObject) => {    
    const slidePhotoDivGrab = document.querySelector('#slideshow')
// have the pictures iterate through
    // let arrayObject = 0
    // for (let i = 0; i < 15; i++)
    let imageArray = arrayObject.data.children
    console.log(imageArray)

    const photoDiv = document.createElement('div')

    // console.log(arrayObject.data.children[0].data.url)

    photoDiv.innerHTML = `<img src="${arrayObject.data.children[1].data.url}" + width=600 + height=600 /img>` 
    const x = 1
    const previewPath = data.children[x].data.preview.image[x].source.url

    document.querySelector('body').appendChild(photoDiv)
    console.log(arrayObject)
}

// Search bar and results
const form = document.getElementById('inputform')
console.log(form)
form.addEventListener('submit', (event) => {

    event.preventDefault()

    const userSearchTerm = input.value
    console.log(userSearchTerm)

    fetch(`https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image`)

    .then(response => response.json())


    .then(photoLoop)
    
    .catch()
})

    

// const redditApiUrl = 'https://www.reddit.com/r/pics/.json?jsonp+nsfw:no'
// const redditApiUrl1 =  https://www.reddit.com/r/aww.json

// let imageSearch = "dogs"   // THIS WORKED 
// const redditApiUrl2 =  `https://www.reddit.com/search.json?q="${imageSearch}"+nsfw:no+type:image`  // THIS WORKED


// https://www.reddit.com/r/aww.json

// redditFetch(redditApiUrl2)
// white_check_mark
// eyes
// raised_hands