


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




const redditApiSucessObj = (redditArray) => {
    const picAddress = (console.log(redditArray.data.children[0].data.url))

    const slidePhoto = document.getElementById('slideshowContainer')

    const metaElement = document.createElement('meta')

    metaElement.content = picAddress
    metaElement.property = "og:image"

    slidePhoto.classList.add('single-image')
    slidePhoto.metaElement.add()



    
    slidePhoto.innerHTML = '<img src="'+ picAddress+ '" />'

    document.querySelector('body').appendChild(slidePhoto) 

    document.querySelector('body').appendChild(metaElement) 
}




// example API call https://www.reddit.com/search.json?q=cats+nsfw:no

const redditFetch = (requestUrl) => {
    fetch(requestUrl)

    .then(cleanIt => cleanIt.json())

    .then(photoLoop)
    
    // .then(redditApiSucessObj)

    // .then(photoLoop)
    
    .catch()
    
    
}

const photoLoop = (arrayObject) => {

    const slidePhotoDiv = document.getElementById('slideshowContainer')
    const redditImgElement = document.createElement('img')
    redditImgElement.setAttribute('src','https://i.imgur.com/LRoLTlK.jpeg')


   
    // for(let i = 0,i < arrayObject.length; i++) {

        // arrayObject.data.children[i].data.url

        // grabs my slideshow container


        // add classlist to that objt
        // slidePhoto.classList.add('single-image')
        
                // let picaddress = console.log(arrayObject) // 
        // arrayObject.data.children[10].data.url
        
        // let picaddress = arrayObject.data.children.map(child => {
        //     // Downsize the object
        //     return {
        //       url: child.data.url,
        //         subreddit: child.data.subreddit,
        //     author: child.data.author
        //     }
        //   })

        // console.log("picaddress:",picaddress[2].url)

          
        //   const redditImg = document.createElement('img')
        //   redditImg.setAttribute('src','https://i.imgur.com/LRoLTlK.jpeg')
        //   document.querySelector('body').appendChild(redditImg) 
 

        // slidePhotoDiv.innerHTML = "img src='https://i.imgur.com/LRoLTlK.jpeg'">

        // slidePhotoDiv.innerHTML = '<img src="`${picaddress[2].url}`" >'
 
        // data.data.children

        console.log(picaddress);
    
        
        

        document.querySelector('body').appendChild(slidePhotoDiv) 
    

    // }
}

// const redditApiUrl = 'https://www.reddit.com/r/pics/.json?jsonp+nsfw:no'
const redditApiUrl1 =  https://www.reddit.com/r/aww.json

let imageSearch = "dogs"
const redditApiUrl2 =  `https://www.reddit.com/search.json?q="${imageSearch}"+nsfw:no+type:image`
//data.children.length

https://www.reddit.com/r/aww.json

redditFetch(redditApiUrl2)






