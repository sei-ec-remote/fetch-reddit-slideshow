
const carousel = document.querySelector('#carousel')

const form = document.querySelector('#form')

// // const seeAllImages = document.querySelector('')
// const imageLoop = (arrayObject) => {
//     for (let i=0; i< arrayObject.length; i++){
//         arrayObject.data.children[i].data.url
//     }
//     return [i]
// }


const onShowRedditSuccess = (imageArray) => {
    
    let img = document.querySelector('.carousel-item')
    for (let i=0; i < imageArray.data.children.length; i++){
        img.innerHTML = `<img class= "d-block w-100 img-fluid" src="${imageArray.data.children[i].data.url}" />`
    }

    // console.log(imageArray.data.children[1].data.url)
    // for (let i=0; i<images.length; i++){
    //     const itemImage = document.querySelector('.item')
    //     itemImage.classList.add('item-image')
    //     itemImage.innerHTML=images.data.children[i].data.url
        // i++
    //     console.log(images.data.children[i].data.url)
    // }
}
// redditArray.data.children[1].data.url
    // console.log(images)
//     const itemImage = document.querySelector('.item')
// itemImage.classList.add('item-image')


    // const singleImage = document.querySelector('.single-image')
    // if (itemImage) {
    //     itemImage.remove()
    // }

    // carousel.style.display = 'none'
    

    // const imageDiv = document.createElement('div')

    // const imageSrc = images.data.children[`${imageLoop}`].data.url
    // imageDiv.innerHTML=`
    // <img src= "${imageSrc}"/>
    // `
    // document.querySelector('body').appendChild(imageDiv)
    console.log('success')

// console.log(onShowRedditSuccess)

const onShowRedditFailure = () => {
    console.log('failure')
}

// const showImages = (event) => {
//     const redditURL = event.target.getAttribute('data-url')
//     console.log(redditURL)
//     fetch(redditURL)
//         .then(res => res.json())
//         .then(onShowRedditSuccess)
//         .catch(onShowRedditFailure)

// }

// (redditImages => {
//         const imageDiv = document.getElementById('image-div')
//         imageDiv.innerText= redditImages.data.children.data.preview.images.source.url
//         imageDiv.setAttribute('data-url', redditImages.url)
//     })
// }





// form.addEventListener('submit',(event) => {
//     event.preventDefault()

//     const searchImage = input.value

//     fetch(`https://www.reddit.com/search.json?q=${searchImage}+nsfw:no`)
//     .then(res => res.json())
//     .then(onShowRedditSuccess)
//     console.log('success')
//     .catch(onShowRedditFailure)
//     console.log(searchImage)
// })


const onGetRedditSearchSuccess = (redditArray) => {

    let img = document.querySelector('.carousel-item')
    for (let i=0; i < redditArray.data.children.length; i++){
        img.innerHTML = `<img class="d-block w-100 img-fluid" src="${redditArray.data.children[i].data.url}" /img>`
    }
    console.log(redditArray.data.children[1].data.url)
}

    // children = redditArray.data.children

    // const imageArray= children.filter((newImage) => {
    //     if(newImage.data.url.includes('jpg')){
    //         return newImage       
    //     } else if (newImage.data.url.includes("png")){
    //         return newImage
    //     } else if (newImage.data.url.includes("gif")){
    //         return newImage
    //     } else if (newImage.data.url.includes("jpeg")){
    //         return newImage
    //     }
console.log(onGetRedditSearchSuccess)
    // redditArray.data.children[3].data.url.forEach(image =>{
    //     const imageDiv = document.createElement('div')
    //     imageDiv.classList.add('single-image')
    //     const singleImage= document.querySelector('.single-image')
    //     if(singleImage){
    //         singleImage.remove()
    //     }
    //     imageDiv.setAttribute('data-url', image.url)
    //     imageDiv.innerHTML = image.url
    //     imageDiv.addEventListener('click', showImages)
    //     container.appendChild(imageDiv)
    // })
    // // console.log(redditArray.data.children[`${imageLoop}`].data.url)
    // console.log('success')




const onGetRedditSearchFailure = () => {
    console.log('failed')
}




document.addEventListener('DOMContentLoaded',() => {
    fetch(`https://www.reddit.com/search.json?q="Sushi"+nsfw:no+type:image`)
        .then(res => res.json())
        .then(onGetRedditSearchSuccess)
        console.log('success')
        .catch(onGetRedditSearchFailure)
        console.log('failure')
})

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const imageSearch = input.value
    fetch (`https://www.reddit.com/search.json?q="${imageSearch}"+nsfw:no+type:image`)
    //remember to take out kittens and put ${searchImage}
    .then(res => res.json())
    .then(onShowRedditSuccess)
    console.log(`success`)
    .catch(onShowRedditFailure)
    console.log(`failure`)
})


//images gets the image 
// reddit_video get the video
// title gets the title