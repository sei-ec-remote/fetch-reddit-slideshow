// console.log('funky slideshow')
const container = document.querySelector('#container')
const singleRedditImage = document.querySelector('#single-image')
const onGetAllImagesBtn = document.querySelector('#see-images')
const form = document.querySelector('#form')
const clickMe = document.querySelector('#clickMe')
const stop = document.querySelector('#stop')
let stopId = null 

const onShowImageSuccess = (redditImage) => {
    
    // while ther is something in the single redditImage div
    while (singleRedditImage.firstChild) {
        // remove it
        singleRedditImage.removeChild(singleRedditImage.firstChild)
    }
    console.log(redditImage)
    container.style.display = 'none'
    imageThumb = document.createElement('div')
    // add the class single-image
    imageThumb.classList.add('single-image')
    // innerHTML - insert html into our DOM
    imageThumb.innerHTML = `
        <h1>${redditImage.name}</h1>
        <img src="${redditImage.sprites.front_default}"/>
    `
    // add single pokemon to the DOM
    singleRedditImage.appendChild(imageThumb)
}

const showRedditImage = (event) => {
    // getter method - getAttribute
    // set it as `data-url` I want to get it as `data-url`
    const imageUrl = event.target.getAttribute('data-url')
    // console.log(imageUrl)
    fetch(imageUrl)
    .then(res => res.json())
    .then(onShowImageSuccess)
    .catch(console.error)
}

let counter = 0

const aLoop = (imageArray) => {
    const redditImage = document.querySelector('#display-box')
    redditImage.src = imageArray[counter]
    counter++    
    // console.log('hello', counter)
    document.querySelector("#stop").addEventListener('click', event => {
        clearInterval(stopId)
        console.log('no more images now', stopId)
        
    })
}


const timer = (imageArray) => {
    let intervalId = setInterval(aLoop, 1000, imageArray)
    stopId = intervalId
}

console.log(aLoop)
console.log(timer)



const onGetAllSearchesSuccess = (response) => {
    const resArray = response.data.children
    // console.log('what happens here', response.data.children[0].data.url)
    const imageArray = resArray.map(responseObject => responseObject.data.url) 
    // console.log('what is this', imageArray)
    
	// loop over all the redditImage
    // take results from fetch and create array using .data.children - map that
    // use newly mapped array 
    // imageArray.forEach(redditImage => {
    //     // create a single div for each redditImage
    //     const slideshowImg = document.createElement('div')
	//     // give that div redditImage name
    //     slideshowImg.innerText = redditImage.name
    //     // add a class to each div
    //     slideshowImg.classList.add('redditImage-thumbnail')
    //     // data-*
    //     // we can set data in our DOM elements by first starting off with data-kaleSoup
    //     // data-url
    //     // setter method - setAttribute()
    //     slideshowImg.setAttribute('data-url', 'redditImageUrl')
    //     // click event
    //     slideshowImg.addEventListener('click', showRedditImage)
    //     // take this pokecard and add it to the container
    //     container.appendChild(slideshowImg)
        timer(imageArray)
        
    }
    // )}
    
    // button needs to respond to userInput
    
    
    
    onGetAllImagesBtn.addEventListener('click', () => {
        while (singleRedditImage.firstChild) {
            // remove it
            singleRedditImage.removeChild(singleRedditImage.firstChild)
        }
        container.style.display = 'flex'
    })
    
    clickMe.addEventListener('click', event => {
        event.preventDefault()
        const imageWordSearch = input.value
        // console.log('what is', imageWordSearch)
        fetch(`https://www.reddit.com/search.json?q=${imageWordSearch}+nsfw:no+type:image&limit=40`)
        .then(res => res.json())
        .then(onGetAllSearchesSuccess)
        .catch(console.error)
        
    })
    
    

    // document.addEventListener('DOMContentLoaded', () => {
    //     // fetch(`https://www.reddit.com/search.json?q=${userInput}+nsfw:no+type:image&limit=40`)
    //     // // fetch('https://www.reddit.com/search.json?q=cats+nsfw:no')
    //     // // returning the json response from this request
    //     //     .then(res => res.json())
    //     //     // intaking the return value from the above .then 
    //     //     // naming it res
    //     //     // this is kaleSoup
    //     //     .then(onGetAllSearchesSuccess)
    //     //     // if we have 2 params or args that needs to be passed in to a function we cannot do the above
    //     //     // .then(res => console.log(res, 'something else'))
    //     //     // handle the error
    //     //     .catch(console.error)
    // })