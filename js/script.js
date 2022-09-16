const display = document.getElementById('display')
const info = document.getElementById('info')
const removeInfo = () => {info.style.visibility="hidden"}
const stop = document.getElementById('stop')
let timer = undefined
const userInput = document.getElementById('search')



const stopSlideShow = () => {
    info.style.visibility = "visible"

    clearInterval(timer)
    document.getElementById('input').value =""
    display.innerHTML=""
    stop.style.visibility = "hidden"
}

const nextImage = () => {
        
    display.appendChild(display.firstChild)
}
// const goToLink = (event) => {
//    const externalSite = event.target.getAttribute('data-url')
   
//    window.location = externalSite
// }

const onGetImageSuccess = (imageArray) => {
    
        imageArray.data.children.forEach(image => {
            if (image.data.over_18 === false && image.data.thumbnail_height !== null && image.data.thumbnail_height !== 0){
                // console.log(image)
                const picture = document.createElement('div')
                picture.classList.add('picture')
                picture.innerHTML = `<img src="${image.data.thumbnail}">`
                picture.setAttribute('data-url', image.data.url)
                display.appendChild(picture)
                // picture.addEventListener('click', goToLink)
            }
        })
        console.log(info)
    removeInfo()
    stop.style.visibility = "visible"
    timer = setInterval(nextImage ,5000)    
    
}



// const search = () => {
     
//     fetch(`https://www.reddit.com/search.json?q=${input.value}&sort=hot&limit=300`)    
//     .then(res => res.json())
//     // .then(console.log)
//     .then(onGetImageSuccess)
//     .catch(console.error)
// }

form.addEventListener('submit', event => {
    event.preventDefault()
    const searchFor = input.value
    
    fetch(`https://www.reddit.com/search.json?q=${searchFor}&sort=hot&limit=300`)    
    .then(res => res.json())
    // .then(console.log)
    .then(onGetImageSuccess)
    .catch(console.error)
})