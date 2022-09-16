const imagecontainer = document.body.querySelector('#imagecontainer')

const onGetRedditSuccess = (images) => {
    console.log (images)
    const newArr = images.data
    newArr.children.forEach(image => {
        const imageBox = document.createElement('img')
        imageBox.classList.add('imageBox')
        // img.addAttribute('thumbnail-url', ) not working 
        imageBox.setAttribute('src', image.data.thumbnail) 
        imagecontainer.appendChild(imageBox) 
        console.log (image.data.thumbnail)
    })
    
}

const getReddit = (event) => {
    event.preventDefault()
    // console.log('inGetReddit') test console.log
    fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
    .then(res => res.json())
    .then(onGetRedditSuccess)
    .catch(console.error)

}
// console.log ("inneHi") test console.log
const onSubmitBtn = document.querySelector(`#submitBtn`)

onSubmitBtn.addEventListener('click', getReddit)





console.log("innHi")
// document.addEventListener('click', () => {
//     fetch(' http://www.reddit.com/search.json`${}`')
//     // need to figure this out 

//     .then(res => res.json())
//     .then()
//     .catch(console.error)

// })