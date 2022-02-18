const requestUrl = "http://www.reddit.com/search.json?q=cats+nsfw:no"
const imgSpace = document.querySelector('#imgSpace')
const submitButton = document.querySelector('#submitButton')
let setInt = null

document.addEventListener("DOMContentLoaded", ()=>{
    imgSpace.style['display'] = 'none'
    
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        formSubmit.style['display'] = 'none'
        imgSpace.style['display'] = 'block'

        const stopButton = document.createElement('button')
        stopButton.innerHTML = "stop"
        stopButton.id = 'stopButton'
        document.body.appendChild(stopButton)

        stopButton.addEventListener('click', () => {
            stopButton.style['display'] = 'none'
            formSubmit.style['display'] = 'block'
            imgSpace.style['display'] = 'none'
            })
        })
       

        //stops page from reloading on submit
        event.preventDefault()
        // console.log('clicky!')

        fetch(requestUrl)
        // handle the response that we receive (convert it to JSON)
            .then(apiResponse => {
                return apiResponse.json()
            })
            // locate our data and store it so we can render
            .then(jsonData => {
                let source = jsonData.data.children
                let newArray = []
                for (let i = 0; i < 12; i++){
                    newArray.push(source[i].data.thumbnail)   
                }
                
                const pictures = () => {
                    imgSpace.src = newArray[0]
                }
                let counter = 0
                setInterval(() => {
                    imgSpace.src = newArray[counter]
                    counter++
                    if (newArray.length-1 === counter){
                        counter = 0
                    }
                }, 4000)
            })
                .catch(err => console.log('error!', err))
      
    })

   

