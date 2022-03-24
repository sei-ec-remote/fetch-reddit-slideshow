//make a request to the API
//handle the response that we see 
//locate the data we want so we can storea nd render it 
//use the data to make some HTML elements to display
//render these elements 

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


