const p = (str) => {console.log(str)}
//js ingredients
    //Message strArr for the submit button, when there no .backButton on it
    // messageHolder = 
    const form = document.querySelector('#form')

    //The button #submit //To request the search Or go back
    //const submit = document.getElementById('submit')
    //the input #input //To get user search request
    //input = document.getElementById('#input')
    // div #container to hold the users answers
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
const onPicterFailure = () => {console.log('This has FAILED')}
/////////////////Main Function
const onPictureSeccess = (picture) => {
    p(picture.data.children[0].data.url)
    p(picture.data.children[3].data.url)
    p(picture.data.children[2].data.url)
    p(picture.data.children[21].data.url)
    p(picture.data.children[23].data.url)
    p(picture.data.children[24].data.url)
    p(picture.data.children[19].data.url)
    
    p(picture.data.children.length)
    
    const pictureURL = []
    //picture.data.children[23].data.url
    for (let index = 0; index < picture.data.children.length; index++) {
        // p('inside the first belly')
        // p(`picture.data.children[${index}].url`)
        // p(picture.data.children[index].data.url)
        // p(picture.data.children[0].data.url)

        pictureURL[index] = picture.data.children[index].data.url
        
    }
    // p(pictureURL)
    // if (picture.data.children[23].data.preview.images[0].source[0].url == pictureURL) 
        //p('true')
//    picuter = 
        // p("did I get passed the first if?")
    for (let i = 0; i < pictureURL.length; i++) {
        // p("Did I make it in the second for")
        const img = document.createElement('img')
        img.setAttribute('src', pictureURL[i])
        resaltsPanal.appendChild(img)
        
    }
    // p("did I get passed the second if?")
    
    // 
    // preview
    // "images": [
    //     {
    //         "source": {
    //           "url":
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
    const picture = input.value

    fetch(`https://www.reddit.com/search.json?q=${picture}+nsfw:no+type:image`)
        .then(res => res.json())
        .then(onPictureSeccess)
        .catch(onPicterFailure)
})