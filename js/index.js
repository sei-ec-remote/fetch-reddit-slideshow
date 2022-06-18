const p = (str) => {console.log(str)}
//js ingredients
    //Message strArr for the submit button, when there no .backButton on it
    // messageHolder = 
    const form = document.querySelector('#actionButton')

    //The button #submit //To request the search Or go back
    resaltsPanal = document.getElementById('container')
    let stopSlideWhow = false
// funct toggle my submit/back button
const toggleSubmitButton = () => {
    //if .backButton 
    // if (submit.getAttribute('class', 'backButton')) {
    //     //remove .backButton
    //     submit.classList.toggle('back-button')
    //     //change innerText = message[0]
    //     submit.innerText = buttonMessage[1]
    // } 
    // else { //!.backButton 
    //     //add .backButton
    //     submit.classList.toggle('back-button')
    //     //change innerText = message[1]
    //     submit.innerText = buttonMessage[0]
    // }
}
const slideShow = (slideDeck, slideIndex) => {
    if (stopSlideWhow) return
    //let slideindex = 0 
    //And repeat slide
    // p("slideIndex: "+slideIndex)
    if (slideIndex > 0) {slideDeck[slideIndex-1].style.display = 'none'}
    // slideDeck[slideIndex-1].style.display = 'none'
    // p('hi')
    slideDeck[slideIndex].style.display = 'block'
    //slideDeck[slideIndex+1].style.display = 'block'
    slideIndex++
    // p('hi again')
    // slideDeck[slideIndex-1].style.display = 'block'
    setTimeout(slideShow, 2000, slideDeck, slideIndex)
}
const onPicterFailure = () => {console.log('This has FAILED')}
/////////////////Main Function
const onPictureSeccess = (picture) => {
    stopSlideWhow = false
    //Clear out the old img if there is any.
    let slideDeck = document.querySelectorAll('.slide-deck')
    if (slideDeck) {
        slideDeck.forEach(img => {
            img.remove()
    })
    }
    const pictureURL = []
    for (let index = 0; index < picture.data.children.length; index++) {
        pictureURL[index] = picture.data.children[index].data.url   
    }
    for (let i = 0; i < pictureURL.length; i++) {
        const img = document.createElement('img')
        img.classList.add('slide-deck')
        img.style.display = 'none'
        img.setAttribute('src', pictureURL[i])
        resaltsPanal.appendChild(img) 
    }
    let slideIndex = 0;
    slideDeck = document.querySelectorAll('.slide-deck')
    // slideDeck[3].style.display = 'block'
    slideShow(slideDeck, slideIndex) //slideshow alll <img> in <div.container>
    //if !.backButton
        // fetches 
        // fill the container with <img>
// tton
    //else
        // remove content of div
        // toggle my submit/backbutton remove class name to .backButton 

// funct toggle my submit/back button
    //if .backButton 
        //remove .backButton
        //change innerText = message[0]
    //else 
        //add .backButton
        //change innerText = message[1]
}

//addEventL
// // on #submit to start the search
form.addEventListener('click',  (e) => {
    e.preventDefault()
    let picture = input.value
 
    fetch(`https://www.reddit.com/search.json?q=${picture}+nsfw:no+type:image`)
        .then(res => res.json())
        .then(onPictureSeccess)
        .catch(onPicterFailure)
})
document.getElementById('stop-slideshow').addEventListener('click', ()=>{
    stopSlideWhow = true
})