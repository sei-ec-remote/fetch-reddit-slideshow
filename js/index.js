const currPhotoArr = []
const photobox = document.body.querySelector('#photo')
console.log(photobox)
const onGetPhotoSuccess = (photoArray)=>{
    // console.log(photoArray)
    const newArr = photoArray.data
    newArr.children.forEach(photo => {
    const photoBucket = document.createElement('img')
    console.log(photo.data.url)
    photoBucket.classList.add('photobucket')
    photoBucket.setAttribute('src', photo.data.url)
    photobox.appendChild(photoBucket)

    })
}


document.addEventListener('DOMContentLoaded',()=>{
    fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
    //returning the json response from this request
        .then(res => res.json())
        //naming it res 
        // .then(console.log)
        .then(onGetPhotoSuccess)
        //if we have 2 params or args that needs to be passed in to a function we cannot do the above
        // .then(res => console.log(res, 'something else'))
        //hand the error
        .catch(console.error)
})


// form.addEventListener('submit', event => {
//     //prevent default submit behavior
//     //you will have to do this 99.99% of the time
//     event.preventDefault()

//     //can access inputs with their `id`s
//     // console.log(input.value)
//     const pokeNumber = input.value
//     console.log(pokeNumber)
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
//     .then(res => res.json())
//     .then(onShowPokemonSuccess)
//     .catch(console.error)

// })