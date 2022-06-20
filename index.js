 const container = document.querySelector("#container")
 const searchButton = document.querySelector("search-btn")
 const form = document.querySelector('#form')


 const onShowSlideShowSuccess = () => {
       console.log("on success")
    const singleSlideshow = document.querySelector('.single-slideshow')
    if(singleSlideshow){
        singleSlideshow.remove()
    }
    container.style.display = 'none'
    const slideDiv = document.createElement('div')
    slideDiv.classList.add('single-slideshow')
    slideDiv.innerHTML=  `<img src="${imageArray.data.children[1].data.url}" + width=400 + height=400 /img>`
    document.querySelector('body').appendChild(slideDiv)

 }
 const onShowSlideshowFailure = () => {
    console.log('on failure')
}


const showSlideshow = (event) => {
    const slideURL = event.target.getAttribute('data-url')
    fetch(slideURL)
        .then(res => res.json())
        .then(onSlideshowSuccess)
        .catch(onShowSlideshowFailure)
}
const onGetSlideshowSuccess = (slideArray) => {
    slideArray.results.forEach(slideshow => {
        const slideBox = document.createElement('div')
        slideBox.classList.add('slideshow-')
        slideBox.innerText = slideshow.name
        slideBox.setAttribute('data-url', slideshow.url)
         slideBox.addEventListener('click', showSlideshow)
        // append all divs to the container
        container.appendChild(slideBox)
    })

}

const onGetSlideshowFailure= () => {
    console.log('on failure')
}
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
        .then(res => res.json())
        .then(onGetSlideshowSuccess)
        .catch(onGetSlideshowFailure)
})

seeAllSlideshow.addEventListener('click', () => {
    container.style.display = 'none'
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const slideNumber = input.value

    // make a fetch request for a single pokemon
    fetch(`http://www.reddit.com/search.json?q=cats+nsfw:no${slideNumber}`)
        .then(res => res.json())
        .then(onShowSlideShowSuccess)
        .catch(onShowSlideshowFailure)

    console.log(slideNumber)
})
