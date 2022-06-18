const myForm = document.querySelector('#form')
const stopButton = document.querySelector('#stopButton')
const container = document.querySelector('.container')
const imageArrayURL = []
let searchTerm = null

const onShowRedditSuccess = (searchArray) => {
    for (let i = 0; i < 6; i++) {
        imageArrayURL[i] = searchArray.data.children[i].data.url
    } 
     
    let i = 1
    imageArrayURL.forEach(imageURL => {
        document.getElementById(`slide${i}`).setAttribute('src', `${imageURL}`)   
            i++
    })
    
    console.log('onsuccess')
}

const onShowRedditFailure = () => {
    console.log('on failure')
}

myForm.addEventListener('submit', (event) => {
    container.style.display = "none"
    
    document.querySelector('#myCarousel').style.display = 'flex'
    event.preventDefault()
    searchTerm = input.value.replace(/\s/g,'+')
    console.log(searchTerm)
    document.querySelector('#input').value = ""

    fetch(`https://www.reddit.com/search.json?q=${searchTerm}+nsfw:no+type:image`) 
        .then(res => res.json())
        .then(onShowRedditSuccess)
        .catch(onShowRedditFailure)
    
})

stopButton.addEventListener('click', () => {
    container.style.display = 'flex'
    document.querySelector('#myCarousel').style.display = 'none'
    let i = 0
    imageArrayURL.forEach(imageURL => {
        imageArrayURL[i] = 
        //document.getElementById(`slide${i}`).removeAttribute('src')   
        i++
    })
})

$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 100  
  })