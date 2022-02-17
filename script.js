document.addEventListener('DOMContentLoaded', () => {

//     let imageOne = document.querySelector("#firstImage")
    
//    let pic = document.querySelector("#img1")
//     console.log('Script is running');
//     let testDiv = document.querySelector('.carousel-item')
//     console.log(testDiv.innerHTML)
    
let button = document.querySelector("#button-addon1")
let input = document.querySelector("#inputField")
let inputText = input.value 
let fetchURL = 'https://www.reddit.com/search.json?q=' 
let title = document.querySelector("#title")
let directions = document.querySelector("#directions")
let stop = document.querySelector("#stop")

stop.hidden = true
// console.log("is this the button", button)
let search = button.addEventListener('click', function() { 

let inputText = input.value 
console.log(inputText)

button.hidden = true
input.hidden = true
title.hidden = true
directions.hidden = true
stop.hidden = false









fetch(`${fetchURL}${inputText}`) 
  .then((responseData)=>{
    return responseData.json();
  })
  .then((jsonData)=>{
    let imageArray = []
    console.log("Here is the data:", jsonData);
    for (i = 0; i < 25; i++)
    if (jsonData.data.children[i].data.url.includes("jpg")) {
     console.log(jsonData.data.children[i].data.url) 
    
     imageArray.push(`${jsonData.data.children[i].data.url}`)

    
     
    }
    console.log(imageArray)
    if (imageArray === [""]) {
      location.reload() 
      alert("No images found, try another keyword!")

    }
    for (i = 0; i < imageArray.length; i++) {
      let newImage = document.createElement("IMG")
      let newDiv = document.createElement('div')
      let divLocation = document.querySelector('.carousel-inner')
      newImage.id=(`#img${[i]}`)
      newImage.src= (imageArray[i])
      newDiv.className = ('carousel-item')
      newDiv.innerHTML = (`<img src="${newImage.src}" class ="d-block w-100" alt="...">`)
        divLocation.appendChild(newDiv)

      console.log("source shows here " + newImage.src)
        
    }
  })
})
stop.addEventListener('click', function() { 

  location.reload()


})
console.log('Just fired AJAX request!');
    























})