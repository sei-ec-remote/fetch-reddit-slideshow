let container = document.querySelector('#middle-container')
const form = document.querySelector('form')
let photos = []
let photosIndex = 0
let interval = null
document.getElementById('stop').style.display = 'none'
document.getElementById('submit').style.display = 'inline-block'
document.getElementById('form').style.display = 'none'
document.getElementById('see-images').style.display = 'none'



   
document.getElementById('submit').addEventListener('click', (event) =>{  
    event.preventDefault()
    const searchBar = document.getElementById('search').value
        
    fetch(`http://www.reddit.com/search.json?q=${searchBar}+nsfw:no`)
    .then(res => res.json())
    .then(jsonData => {
         photos = jsonData.data.children.map(obj => {
            return{
                title: obj.data.title,
                url: obj.data.thumbnail,
                subreddit: obj.data.subreddit,
                posthint: obj.data.post_hint
            }
            }).filter(obj =>{
                return obj.posthint === 'image'
            })
            console.log(photos)
        })
      

       
    
    .catch(err => {
        console.log('ERROR', err)
       })   
       
       document.getElementById('submit').style.display = 'none' 
       document.getElementById('form').style.display = 'inline'
       document.getElementById('see-images').style.display = 'inline'
})



    

const slideshow = () =>{
    photosIndex = 0
     getImage()

     interval = setInterval(changeImage, 4000)
}
 const changeImage = () =>{
    photosIndex ++ 

    if(photosIndex>= photos.length){
        photosIndex = 0 
    }
    getImage()
 }
function getImage(){
    document.getElementById('pics-container').innerText = ''
let image = document.createElement('img')
image.src = photos[photosIndex].url
image.alt = photos[photosIndex].title
let title = document.createElement('h3')
title.innerText = photos[photosIndex].title
 document.getElementById('pics-container').appendChild(image)
 document.getElementById('pics-container').appendChild(title)
 
}

document.getElementById('see-images').addEventListener('click', (event) =>{
    event.preventDefault()
    slideshow()
    document.getElementById('stop').style.display = 'inline-block'
    document.getElementById('form').style.display = 'none'
    document.getElementById('see-images').style.display = 'none'
})

const stop = () =>{
    document.getElementById('submit').style.display = 'inline'
    document.getElementById('form').style.display = 'none'
document.getElementById('see-images').style.display = 'none'
    document.getElementById('stop').style.display = 'none'
    photos = []
}

document.getElementById('stop').addEventListener('click', () =>{
    stop()
    
    
 
})

