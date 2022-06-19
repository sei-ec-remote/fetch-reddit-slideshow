//js ingredients
//search button to add an eventListener to it.
const form = document.querySelector('#actionButton')
//The div that the pictures will be added to.
resaltsPanal = document.getElementById('container')
//Used to end the slideshow
let stopSlideWhow = false 

//This Displays the img one by one. CSS give it the animation.
const slideShow = (slideDeck, slideIndex) => {
    if (stopSlideWhow) return //used to end the function loop.
    //When the last img of the sideDeck has been shown.
    if (slideIndex === slideDeck.length) { 
        //Need to remove the last slide at the end.
        slideDeck[slideIndex - 1].style.display = 'none'
        // Slide index need be set to 0, so the func will run like it was first called
        slideIndex = 0}
    //This will remove the last slide, but if it run the first time, there is no "last slide" and the - 1 will crash it.
    if (slideIndex > 0) {slideDeck[slideIndex-1].style.display = 'none'}
    //Setting this to block will undo the display = none on all img
    slideDeck[slideIndex].style.display = 'block'
    //This set up for the next slide in the deck before calling itself again.
    slideIndex++ 
    setTimeout(slideShow, 5000, slideDeck, slideIndex)
}
const onPicterFailure = () => {console.log('This has FAILED')}

/////////////////Main Function
const onPictureSeccess = (picture) => {
    //When you hit search you want the slide to run, so this will turn it back on if the slide has been turned off before.
    stopSlideWhow = false
    //Clear out the old img if there is any.
    let slideDeck = document.querySelectorAll('.slide-deck')
    if (slideDeck) {
        slideDeck.forEach(img => {
            img.remove()
    })}

    //(map)Retrieving the url from what has been fitched.
    //(forEatch)Making the <img>s and appending them to the container.
    //Added class 'slide-deck' will allow me to grab all img later.
    //I dont want to show the img right away so they are marked display non untill the right time.
    const pictureURL = picture.data.children.map(picture => {
        return picture.data.url
    }).forEach(url => {
        const img = document.createElement('img')
        img.classList.add('slide-deck')
        img.style.display = 'none'
        img.setAttribute('src', url)
        resaltsPanal.appendChild(img) 
    })
    //With all set now time to slide show them.
    //querySelectorAll is static so it need be used again to grab the new <img>s
    //slide index is just there to make slideShow more readable.
    let slideIndex = 0;
    slideDeck = document.querySelectorAll('.slide-deck')
    slideShow(slideDeck, slideIndex) 
}

//This will be the main eventListener. Grab the user input and fetch.
form.addEventListener('click',  (e) => {
    e.preventDefault()
    let picture = input.value
 
    fetch(`https://www.reddit.com/search.json?q=${picture}+nsfw:no+type:image`)
        .then(res => res.json())
        .then(onPictureSeccess)
        .catch(onPicterFailure)
})
//This used to stop the slideshow when the user needs it to.
document.getElementById('stop-slideshow').addEventListener('click', ()=>{
    stopSlideWhow = true
})