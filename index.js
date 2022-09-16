const container = document.querySelector('#img-div')
const searchForm = document.querySelector('#search-form')
const searchButton = document.querySelector('#search-button')
const resetButton = document.querySelector('#reset-button')

// Hide Image container and button initially
searchForm.style.display = 'flex'
container.style.display = 'none'
resetButton.style.display = 'none'

// Check to see if url contains image function found @ https://stackoverflow.com/questions/9714525/javascript-image-url-verify
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

const displayImg = (imgArray) => {
    let imgNum = 0
    const slideShow = setInterval(() => {
        searchForm.style.display = 'none'
        container.style.display = 'flex'
        resetButton.style.display = 'flex'
        do{
            imgStr = imgNum.toString()
            redditImage = imgArray['data']['children'][imgStr]['data']['thumbnail']
            imgNum++
        } while (checkURL(redditImage) === false)
        document.getElementById("imageid").src = redditImage
    }, 2000)

    resetButton.addEventListener('click',() =>{
        clearInterval(slideShow)
        searchForm.style.display = 'flex'
        container.style.display = 'none'
        resetButton.style.display = 'none'
    })
}

// Likely Path
searchButton.addEventListener('click',() =>{
    // Prevent refresh 
    event.preventDefault()
    // Intake form text
    let search = document.querySelector('#search-text').value
    // Fetch search from reddit api
    fetch(`http://www.reddit.com/search.json?q=${encodeURIComponent(search.trim())}+nsfw:no`)
    .then(res => res.json())
    .then(displayImg)
    .catch(console.error)
})

