
const carousel = document.querySelector('#carousel')
const form = document.querySelector('#form')
const container = document.querySelector('.container')
const heading = document.getElementById('heading')

// // const seeAllImages = document.querySelector('')
// const imageLoop = (arrayObject) => {
//     for (let i=0; i< arrayObject.length; i++){
//         arrayObject.data.children[i].data.url
//     }
//     return [i]
// }


const onShowRedditSuccess = (imageArray) => {

    for (let i=0; i < imageArray.data.children.length-1;++i) {
       
        let img = document.getElementById(`img${i+1}`)
        img.setAttribute("src", `${imageArray.data.children[i].data.url}`)
        console.log('success through array')
        console.log(img)
        
    }

   
    // const carouselDiv = document.getElementById('carousel-fluid')
    // console.log('got carousel')
    // carouselDiv.innerHTML = `<div id="carousel-fluid" class="carousel slide" data-interval="2000" data-riding="carousel"></div>`

    console.log('carousel working')
   
}
console.log('success')

const onShowRedditFailure = () => {
    console.log('failure')
}
function showCarousel(){
    if(carousel.style.display === 'none'){
        carousel.style.display = 'block'
    } 
}

function onSubmit (){
    if(heading.style.display === 'none'){
        heading.style.display = 'block'
    } else {
        heading.style.display = 'none'
    }
}

function onStopSlideshow (){
    if(heading.style.display === 'block'){
        heading.style.display = 'none'
    } else {
        heading.style.display = 'block'
    }
    
}
// document.addEventListener('DOMContentLoaded',() => {
//     function hideCarousel (){
//         carousel.style.display="none"
//         // if(heading.style.display === 'block'){
//         //     heading.style.display = 'none'
//         // } else {
//         //     heading.style.display = 'block'
//         // }
//     }
//     hideCarousel()
// })

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const imageSearch = input.value
    fetch (`https://www.reddit.com/search.json?q="${imageSearch}"+nsfw:no+type:image`)
    .then(res => res.json())
    .then(onShowRedditSuccess)
    console.log(`success`)
    .catch(onShowRedditFailure)
    console.log(`failure`)
    
})


const button = document.querySelector('#button')

button.addEventListener('click',(event)=>{
    event.preventDefault()
    // console.log('button works')
    const stopDiv = document.getElementById('carousel-fluid')
    console.log('button works')
    // stopDiv.setAttribute("data-interval", "false")
    stopDiv.innerHTML = `<div id="carousel-fluid" class="carousel slide" data-interval="false"></div>`
    console.log('button works')
    document.getElementById('form').input.value=""
    console.log(`success`)
} )
