const form = document.querySelector('#form')
const container = document.querySelector('#container')
const slidepic = document.querySelector('img')
const stopButton = document.querySelector('#stop')
const header = document.querySelector('h1')
const directions = document.querySelector('p')

const hasPhoto = function(child) {
    return child.data.url.endsWith('.jpg')
}

const onGetSearchSuccess = (searchResults) => {
    const searchChildren = searchResults.data.children
    const resultsWithPics = searchChildren.filter(hasPhoto)
    const imgurls = []
    resultsWithPics.forEach((result) => {
        imgurls.push(result.data.url) 
    })
    console.log(imgurls)
    i = 0
    function slideshow() {
        slidepic.src = imgurls[i]
        if (i < imgurls.length - 1) {
            i++
        } else {
            i = 0
        }
        form.style.display = 'none'
        stopButton.style.display = 'flex'
        slidepic.style.display = 'flex'
        header.style.display = 'none'
        directions.style.display = 'none'
    }
    const slideshowtimer = setInterval(slideshow, 2000)
    stopButton.addEventListener('click', function () {
        clearInterval(slideshowtimer)
        form.style.display = 'flex'
        stopButton.style.display = 'none'
        slidepic.style.display = 'none'
        header.style.display = 'flex'
        directions.style.display = 'flex'
    })
}


const onGetSearchFailure = () => {
    console.log('fail')
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchTerm = input.value

    fetch(`http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`)
        .then(res => res.json())

        .then(onGetSearchSuccess)

        .catch(onGetSearchFailure)

})

document.addEventListener('DOMContentLoaded', function () {
    form.style.display = 'flex'
    stopButton.style.display = 'none'
    slidepic.style.display = 'none'
})

// stopButton.addEventListener('click', function () {
//     clearInterval(slideshow)
//     form.style.display = 'flex'
//     stopButton.style.display = 'none'
//     slidepic.style.display = 'none'
//     header.style.display = 'none'
//     directions.style.display = 'none'
// })