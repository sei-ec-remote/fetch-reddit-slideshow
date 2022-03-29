document.addEventListener("DOMContentLoaded", () => {
  const requestURL = "https://www.reddit.com/search.json?q=cats+nsfw:no"
  const image = document.querySelector("#image")
  const goButton = document.querySelector("#go-button")
  const stopButton = document.querySelector("#stop-button")
  let catsArray = []
  let timer = 0

  stopButton.addEventListener("click", (event) => {
    clearInterval(timer)
  })

      goButton.addEventListener('click', (event) => {
        event.preventDefault()
        fetch(requestURL)
          .then(apiResponse => {
            return apiResponse.json()
          })
          .then(jsonData => {
              console.log(jsonData)
              console.log('this is the data we want:', jsonData)
              let cats = jsonData.data.children
              let catThumbnail = 0 
              for (i = 0; i < cats.length; i++) {
                catThumbnail = cats[i].data.thumbnail
                if ( catThumbnail.includes('png') || catThumbnail.includes('.jpg')) {
                  catsArray.push(catThumbnail)
                }
              }
              const slideshow = () => {
                image.src = catsArray[timer]
                while(timer === catsArray.length -1) {
                  timer = -1 
                }
                timer++
              }
              let timer = setInterval(slideshow, 2000)
            })
    })

})