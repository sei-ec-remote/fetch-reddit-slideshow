





// We want to make a request to the Random User API
document.addEventListener("DOMContentLoaded", () => { 
    const stopButton = document.getElementById('stop')
    const textInput = document.getElementById('textInput')
    const searchButton = document.getElementById('search-button')
    const images = document.getElementById('images')
    const container = document.querySelector('.container')
    const requestURL = "http://www.reddit.com/search.json?q="
    const catArray = []
    let catTimer = 0    
    stopButton.addEventListener('click', (e) => {
        clearInterval(time)
    })
    searchButton.addEventListener('click', (e) => {
        e.preventDefault()
        container.remove()
        searchButton.remove()
        fetch(`${requestURL}${textInput.value}+nsfw:no`)
            .then((apiResponse) => {
                // console.log('this is the apiresponse', apiResponse.json())
                return apiResponse.json()
            })
            .then((jsonData) => {
                let catData = jsonData.data.children
                console.log('this is the jsondata',jsonData)
                // find which children element attempting to touch
                console.log('this is the data data children',catData[1])
                let catThumb = 0
                for (i = 0; i < catData.length; i++) {
                    catThumb = catData[i].data.thumbnail
                    if (catThumb.includes('.jpg') || catThumb.includes('.png')){
                        console.log('this is the catData', catThumb)
                        catArray.push(catThumb) 
                    } 
                    
                }
                catFunction = () => {

                     images.src = catArray[catTimer]
                     while(catTimer === catArray.length-1){
                         catTimer = -1
                     }  
                     catTimer++
                }
                let time = setInterval(catFunction, 2000)
            })
        .catch(err => console.log('error!', err))
        
})

}) 
// handle the response that we receive (convert it to JSON)
// locate our data and store it so we can render
// use that data to create some HTML elements to display
// render those elements


