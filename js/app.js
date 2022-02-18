document.addEventListener("DOMContentLoaded", () => {
    const requestURL = "http://www.reddit.com/search.json?q="
    const searchInput = document.querySelector('#searchInput')
    const submitButton = document.querySelector('#submitButton')
    const stopButton = document.querySelector('#stopButton')
    const imgBox = document.getElementById('imgBox')

    

  
  //show and hide HTML Elements
    const hideElement = () => {
        let x = document.getElementById('submitForm')
        if (x.style.display === "none") {
            x.style.display = "inline";
        } else {
            x.style.display = "none" ;
        }

        let y = document.getElementById('stopButton')
        if (y.style.display === "none") {
            y.style.display = "inline";
        } else {
            y.style.display = "none" ;
        }

        if (imgBox.style.display === 'none') {
            imgBox.style.display = 'inline';
        } else {
            imgBox.style.display = 'none' ;
        }
    }

  
    submitButton.addEventListener('click', () => {
        //preventing page refresh on press of submit
        event.preventDefault()
        // console.log('clicky', event)
        hideElement()

        fetch(`${requestURL}${searchInput.value}`)
        // handle the response that we receive (convert it to JSON)
            .then(apiResponse => {
                return apiResponse.json()
            })
            // locate our data and store it so we can render
            .then(jsonData => {
                console.log('here is jsonData' , jsonData)
                
                //array to store the images called
                let imagesArr = []

                for (let i = 0; i <= 15; i++) {
                 
                    if (jsonData.data.children[i].data.url.includes('jpg' || 'png')) {
                    console.log(jsonData.data.children[i].data.url) 
                    imagesArr.push(`${jsonData.data.children[i].data.url}`)
                    }
                    console.log('these are the images', imagesArr)              
                }
                if (imagesArr === [""]) {
                    alert("No image URLs found. Please try a different query")
                }
                    
                // for (let i = 0; i < imagesArr.length; i++ ) {
                //     let imgDestination = document.getElementsByClassName('carousel-inner')
                //     let createImgHTML = document.createElement('div')
                //     createImgHTML.className = ('carousel-item')
                //     createImgHTML.innerHTML = (`<img src="${imagesArr[i]}" class="d-block w-100" data-bs-interval="3000" id=${i}`)
                //     imgDestination.appendChild(createImgHTML)
                //     createImgHTML.appendChild(createImgHTML)
                
                // }

                for (let i = 0; i < imagesArr.length; i++) {


                    
                    let imageSrc = document.createElement("IMG")
                    imageSrc.src= (imagesArr[i])


                    let carouselItem = document.createElement('div')
                    carouselItem.className = ('carousel-item')

                    let carouselLocation = document.getElementById('carousel-inner')

                    carouselItem.innerHTML = (`<img src="${imageSrc.src}" class ="d-block w-100" data-bs-interval="5000" id=img${i} >`)
                    carouselLocation.appendChild(carouselItem)
              
                
                }
            })
        })
                


    // stopButton.addEventListener('click', () => {
    //   //preventing page refresh on press of submit
    //   event.preventDefault()
    //   // console.log('clicky', event)
    //   hideElement()
    //   imagesArr = []
    //   console.log('is imagesArr empty?', imagesArr)
    

    // })


})