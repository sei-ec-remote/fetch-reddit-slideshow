const form = document.getElementById('form')
const stopButton = document.getElementById('stop-button')
const submit = document.getElementById('submitInput')
const image = document.getElementById('image')
const redditApiUrl = 'https://www.reddit.com/search.json?q=${searchTerm}+nsfw:no+type:image'

const render = () => {
    image.style.display = "none"
}


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', formHandleSubmit)

})

myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchTerm = input.value.replace

    fetch('https://www.reddit.com/search.json?q=`${searchTerm}`+nsfw:no+type:image') 
        .then(res => res.json())
        .then(onShowRedditSuccess)
        .catch(onShowRedditFailure)

})

