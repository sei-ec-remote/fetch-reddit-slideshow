// page loads with search bar and submit

// user gets a prompt and types in a term
    // screen changes and displays

// prog goes out and grabs a bunch of info related to the search
    // then displays the photos


// the photos slide show until stop button is hit
    // then the images are removed
    // the original search pops back up

// research another item

// workingarray = obj.data.children
// if(dat.data.url.includes"jpg") {
//     // USE INCLUDES
// }

const photoLoop = (arrayObject) => {
    
    // const image1 = "https://static4.depositphotos.com/1005353/308/i/950/depositphotos_3088768-stock-photo-handicap-bathtub.jpg" //testing
    

    const slidePhotoDivGrab = document.querySelector('#imgDiv1')
    const photoDiv = document.createElement('div')

    // console.log(arrayObject.data.children[0].data.url)

    photoDiv.innerHTML = `<img src="${arrayObject.data.children[4].data.url}" + width=300 + height=300 /img>`  /// THIS WORKS


    document.querySelector('body').appendChild(photoDiv)

}




const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {

    event.preventDefault()

    const userSearchTerm = input.value


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