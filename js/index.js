// as a user i want to be able to start a slideshow
// i want to have the option to search for a pic 
//i want to be able to stop the slide show or restart it 
// document.addEventListener('DOMContentLoaded',() => {
//     fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//     .then(res=>res.json())
//     // passing json to success function
//     .then(onSuccess)
//     // if fails pass to catch for error
//     .catch(onFailure)
// })
document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    const image = document.getElementById('image')
    const startbutton = document.getElementById('startbutton')
    const stopbutton = document.getElementById('stopbutton')
    const textinput = document.getElementById('startsearch')
    let array = []
    
        const requestURL = "http://www.reddit.com/search.json?q="
        startbutton.addEventListener('click', (event) => {
            event.preventDefault()
            fetch(`${requestURL} ${textinput.value}`)
            .then(apiResponse => {
                return apiResponse.json()
                 })
                 .then(jsonData => {
                    //  console.log(jsonData)
                     let userinput = jsonData.data.children
                    //  console.log(userinput)
                     let userthumbnail = 0 
                     for (let i = 0; i < userinput.length; i++) {
                        userthumbnail = userinput[i].data.thumbnail
                        if (userthumbnail.includes('.png') || userthumbnail.includes('.jpg')) {
                            // console.log(userthumbnail)
                            array.push(userthumbnail)
                            // console.log(array) 
                        }
                     }
    
                      const slideshow = () => {
                      image.src = array [counter]
                      while(counter === array.length - 1){
                          counter = -1
                      }
                      counter++ 
                     }
                     let time = setInterval (slideshow, 1000)
                    })
    
                })
            })
    
    