// We want to make a request to the Random User API

document.addEventListener("DOMContentLoaded", () => {
    const requestURL = "https://www.reddit.com/search.json?q=overwatch+memes+nsfw:no"

    const addPic = (pic) => {
        let hold = document.getElementById('#photo')
        hold.textContent = 
    }





    form.addEventListener('submit', (e) => {
        e.preventDefault
    })
    
    fetch(requestURL)
        .then(apiResponse => {
            return apiResponse.json()
        })
        .then(jsonData => {
            console.log(jsonData)
        })
    .catch(err => console.log('error!', err))

})
// handle the response that we receive (convert it to JSON)
// locate our data and store it so we can render
// use that data to create some HTML elements to display
// render those elements