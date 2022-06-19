const mainDisplay = document.querySelector("col-8")
let userInput = document.getElementById("form")
let imageArray = []
let textArray = []

const onGetImageSuccess = (resultsArray) => {
        containerSearch.style.display = "none"
        containerResults.style.display = "block"
        // console.log(resultsArray)
        resultsArray.forEach(images => {
        const imagePreview = document.createElement("div")
        imagePreview.classList.add("image-preview")
        imagePreview.innerText = `${images.title}, by ${images.author}`
        const searchImage = document.createElement("div")
        searchImage.classList.add("the-image")
        searchImage.innerHTML = `<img src="${images.link}" height="850" width="850"/>`
            textArray.push(imagePreview)
            imageArray.push(searchImage)
        })
    changeSlides()
}

const changeSlides = () => {
    let index = 0
    document.getElementsByClassName("col-8")[0].appendChild(textArray[index])
    document.getElementsByClassName("col-8")[0].appendChild(imageArray[index])


    const slidesGo = () => {
        document.getElementsByClassName("col-8")[0].removeChild(textArray[index])
        document.getElementsByClassName("col-8")[0].removeChild(imageArray[index])
        if (index == imageArray.length - 1) {
            index = 0 
            } else {
            index++
            // console.log(index)
        }
        document.getElementsByClassName("col-8")[0].appendChild(textArray[index])
        document.getElementsByClassName("col-8")[0].appendChild(imageArray[index])
    }
    let slidesInterval = setInterval(slidesGo, 5000)

    reset.addEventListener("click", () => {
        clearInterval(slidesInterval)
        document.getElementById("form").reset()
        containerSearch.style.display = "block"
        containerResults.style.display ="none"
        imageArray.forEach(img => {
            img.remove()
        })
        textArray.forEach(text => {
            text.remove()
        })

    })
}

const onGetImageFail = () => {
    console.log("Get image Failure")
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let searchRequest = document.getElementById("input").value
    fetch(`https://www.reddit.com/search.json?q=${searchRequest}+nsfw:no`)
    .then(res => res.json())
    .then(res => res.data.children)
    .then(res => res.map(post => ({
        author: post.data.author,
        link: post.data.url,
        img: post.data.thumbnail,
        title: post.data.title
        
     })))
    .then(onGetImageSuccess)
    .catch(onGetImageFail)
})
