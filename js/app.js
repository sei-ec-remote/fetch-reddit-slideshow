console.log('Linked.')

document.addEventListener('DOMContentLoaded', () => {
    
    const URL = 'http://www.reddit.com/search.json?q='
    const title = document.getElementById('title')
    const description = document.getElementById('description')
    const fetchDataForm = document.getElementById('fetchDataForm')
    const textInput = document.getElementById('textInput')
    const submitButton = document.getElementById('submitButton')
    const gallery = document.getElementById('gallery')
    let thumbnails = [] // the array of images is stored here
    let interval = null // to store the interval ID so we can use clearInterval()
    
    submitButton.addEventListener('click', (event) => {
        //stops the page reload when you submit a form. Stops page from reloading after form is submitted.
        event.preventDefault()

        // hide title, desciption, and form
        title.style.display = 'none'
        description.style.display = 'none'
        fetchDataForm.style.display = 'none'

        // add a stop button at the bottom of the image to stop the slideshow
        const stopButton = document.createElement('button')
        stopButton.id = 'stopButton'
        stopButton.textContent = 'Stop'
        document.body.appendChild(stopButton)
        stopButton.addEventListener('click', () => {
            clearInterval(interval)
            stopButton.style.display = 'none'
            title.style.display = 'block'
            description.style.display = 'block'
            fetchDataForm.style.display = 'block'
            const img = document.querySelector('img')
            gallery.removeChild(img)
            textInput.value = ''
        })

        // create image tag and append to div (id = gallery)
        const img = document.createElement('img')
        img.id = 'imageTag'
        gallery.appendChild(img)

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
                console.log(thumbnails)
                // To change the src of the image at each interval
                let counter = 0
                interval = setInterval( () => {
                    imageTag.src = thumbnails[counter]
                    counter++
                    if(counter === thumbnails.length - 1)
                    {
                        counter = 0
                    }
                } ,1000)
            })
            .catch( err => console.log('Error with API request.', err))
    })
})