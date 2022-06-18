const p = (str) => {console.log(str)}
//js ingredients
    //Message strArr for the submit button, when there no .backButton on it
    // messageHolder = 
    const form = document.querySelector('#actionButton')

    //The button #submit //To request the search Or go back
    resaltsPanal = document.getElementById('container')

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
const slideShow = () => {
    let slideindex = 0 
}
const onPicterFailure = () => {console.log('This has FAILED')}
/////////////////Main Function
const onPictureSeccess = (picture) => {
    
    //Clear out the old img if there is any.
    const oldSlideDeck = document.querySelectorAll('.slide-deck')
    if (oldSlideDeck) {
        oldSlideDeck.forEach(img => {
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
        // img.style.display = 'none'
        img.setAttribute('src', pictureURL[i])
        resaltsPanal.appendChild(img) 
    }
    // slideShow() //slideshow alll <img> in <div.container>
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