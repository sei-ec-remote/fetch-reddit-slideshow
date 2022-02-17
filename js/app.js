console.log('Linked.')

document.addEventListener('DOMContentLoaded', () => {
    
    const URL = 'http://www.reddit.com/search.json?q='
    const fetchDataForm = document.getElementById('fetchDataForm')
    const textInput = document.getElementById('textInput')
    const submitButton = document.getElementById('submitButton')
    const gallery = document.getElementById('gallery')
    const imageTag = document.getElementById('imageTag')
    let thumbnails = [] // the array of images is stored here
    let interval = null
    
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()//stops the page reload when you submit a form. Stops page from reloading after form is submitted.
        // fetchDataForm.style.display = 'none'

        // Extract the value from our textInput.
        // Place that text into the query string.
        fetch(`${URL}${textInput.value}+nsfw:no`)
            // Handle the response that we receive (convert it to JSON).
            .then( responseData => {
                return responseData.json()
            })
            //Locate our data and store it so we can render it.
            .then( jsonData => {
                let images = jsonData.data.children
                // store image URLs in variable, thumbnail, above
                for(let i = 0; i < images.length; i++)
                {
                    if(images[i].data.thumbnail !== 'default')
                    {
                        thumbnails.push(images[i].data.thumbnail)
                    }
                }
                // thumbnails.forEach(addImage)
                
                let counter = 0
                interval = setInterval( () => {
                    imageTag.src = thumbnails[counter]
                    counter++
                    if(counter === thumbnails.length - 1)
                    {
                        clearInterval(interval)
                    }
                } ,2000)
                
            })
            .catch( err => console.log('Error with API request.', err))
    })

})