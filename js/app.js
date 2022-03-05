
    const requestURL = 'https://www.reddit.com/search.json?q='
    
    const searchInput = document.getElementById('input')
    const searchButton = document.getElementById('search')
    const divForImages = document.getElementById('images')
    const title = document.getElementById('title')
    const instruction = document.getElementById('instruction')
    const stopButton = document.createElement('button')
    const infoContainer = document.getElementById('info-container')
    
    stopButton.id = "stop"
    stopButton.innerText = "Stop Slideshow"
    stopButton.style.textAlign = "center"
    const buttonsDiv = document.getElementById('buttons-div')
    
    let imagesArray = []
    
    let image = document.createElement('img')
          image.id = "image"
    const images = document.getElementById('images')    

   const runSlideShow = () => { 
   searchButton.addEventListener('click', (e) =>{
         e.preventDefault()
        if (searchInput.value === ""){
            alert('please type something')
            window.location.reload()
        }
        stopButton.style.visibility = "visible"
        title.style.visibility = "hidden"
        instruction.style.visibility = "hidden"
        searchButton.style.visibility = "hidden"
        searchInput.style.visibility = "hidden"
        image.style.visibility = "visible"
        images.appendChild(image)
       buttonsDiv.appendChild(stopButton)
        console.log('clicky')
        fetch(`${requestURL}${searchInput.value}`)
        .then((responseData) => {
            return responseData.json()
        })
        .then((jsonData) => {
            //console.log('this is the json data in its rawest', jsonData)
            //console.log('this is the json data', jsonData.data.children)
            const jsonDataArray = jsonData.data.children
            
            const getImagesArray = jsonDataArray.filter(photo => photo.data.url.includes('.jpg'))
            imagesArray = getImagesArray.map(photo => photo.data.url)
           //console.log(imagesArray)
            
            //for (let i = 0;i < jsonDataArray.length;i++){
           //    //I tried ending at url but then I realized not every url is a .jpg reference
           //    if(jsonDataArray[i].data.url.includes('.jpg'))
           //    imagesArray.push(jsonDataArray[i].data.url)
           //}
           //console.log(imagesArray)
            
            let photoTimer = 0
            const imageTimer = () => {
                image.src = imagesArray[photoTimer]
               while (photoTimer === imagesArray.length - 1){
                photoTimer = -1
                }
                photoTimer++ 
            }
        
             let llillo = setInterval(imageTimer,1000)
          
           stopButton.addEventListener('click', () => {
               clearInterval(llillo)
           
           if (image.firstChild){
               remove.firstChild(image.firstChild)
           }
             stopButton.style.visibility = "hidden"
             title.style.visibility = "visible"
             instruction.style.visibility = "visible"
             searchButton.style.visibility = "visible"
             searchButton.style.textAlign = "center"
             searchInput.style.visibility = "visible"
             image.style.visibility = "hidden"
             
           })
       
        })
        .catch((error) => {
            window.location.reload
            console.log('whoops')
        })
    })
}
        

document.addEventListener('DOMContentLoaded', () => {
     runSlideShow() 
})