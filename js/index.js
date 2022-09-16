let currPhotoArr = []

const currPhoto = document.querySelector('.photobox')
const photobox = document.querySelector('#photo')
const stopButton = document.querySelector('#stop')
stopButton.style.visibility = 'hidden'


const form = document.querySelector('#form')


// startButton.addEventListener('click', event => {
//     event.target
// })


const onGetPhotoSuccess = (photoArray)=>{
    const levelTwo = photoArray.data
    levelTwo.children.forEach(photo => {
    currPhotoArr.push(photo.data.thumbnail)
    })
    // createFirstImage(currPhotoArr)
    // const photoBucket = document.createElement('img')
    // photoBucket.classList.add('photobucket')
    // photoBucket.setAttribute('src', currPhotoArr[imageIndex])
    // photoBucket.setAttribute('alt', 'an image of /constname/ from reddit')
    // photobox.appendChild(photoBucket)
    // const image = document.querySelector('#photo')
    // console.log(image)
}

let imageIndex = 0
const advanceImage = () => {

    const image = document.querySelector('#photo')
    if (image == null){
        const photoBucket = document.createElement('img')
        photoBucket.classList.add('photobucket')
        photoBucket.setAttribute('src', currPhotoArr[imageIndex])
        photoBucket.setAttribute('alt', 'an image of /constname/ from reddit')
        photobox.appendChild(photoBucket)
     
    } else if (image.innerHTML === 'self'){
        imageIndex++
    }
    image.removeChild(image.firstChild)
    imageIndex++
    const photoBucket = document.createElement('img')
    photoBucket.classList.add('photobucket')
    photoBucket.setAttribute('src', currPhotoArr[imageIndex])
    photoBucket.setAttribute('alt', 'an image of /constname/ from reddit')
    photobox.appendChild(photoBucket)

    if (imageIndex>20){
        imageIndex = 0
    }
}



document.addEventListener('DOMContentLoaded',()=>{
    fetch(`http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`)
    //returning the json response from this request
        .then(res => res.json())
        //naming it res 

        .then(onGetPhotoSuccess)

        .catch(console.error)
})

const showStop = () => {
    stopButton.style.visibility = 'visible'
    console.log('helpp!')
}

const startShow = () => {
    setInterval(advanceImage,3000);
}
const stopShow = () => {clearInterval(startShow)}

stopButton.addEventListener('click', showStop)
// startButton.addEventListener('click'), event =>{
//     if (event.target.innerText === 'Stop'){
//         clearInterval(startShow)
//     }
// }
const hideForm = ()=> {
    form.style.visibility = 'hidden'
}

// console.log(searchTerm)
form.addEventListener('submit', event => {
    event.preventDefault()
    const searchTerm = input.value
    // const searchTerm = form.elements['0']
    // const searchValue = searchTerm
    console.log(searchTerm)
    fetch(`http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`)
    //returning the json response from this request
        .then(res => res.json())
        //naming it res 

        .then(onGetPhotoSuccess)
        .then(advanceImage)
        .then(startShow)
        // .then(hideForm)
        .then(showStop)

        .catch(console.error)
    return searchTerm
} )
