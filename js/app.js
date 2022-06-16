// Initial test 1: 1:38pm
// get *15* images from reddit
    // on #form submit: get reddit images of #searchBar value

// hide #on-load (style.display = "none")
// style.display = "flex" for #redditFetch

// get the form element
const form = document.getElementById("form");
const redditFetch = document.getElementById("slideShow")
const hider = document.getElementById("reddit-fetch")
const onLoad = document.getElementById("on-load")
const stopper = document.getElementById("stop")

// slideshow js attempt
let slideNum = 0
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("reddit-thumb")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideNum++;
    if (slideNum > slides.length) {
        slideNum = 1
    }
    slides[slideNum-1].style.display = "block";
    setTimeout(showSlides, 3000)
}
// end attempt

const renderImages = () => {
    
    for (let i = 0; i < document.images.length; i++) {
        const currImg = document.images[i].setAttribute("id", `${i}`)
    }
    // combine these loops into one later
    for (let i=0; i < document.images.length; i++) {
        let changeImg = document.getElementById(`${i}`)

        let width = changeImg.naturalWidth
        let height = changeImg.naturalHeight

        let fixedRatios = calculateAspectRatioFit(width, height, 400, 400)
        newWidth = fixedRatios.width
        newHeight = fixedRatios.height

        changeImg.width = newWidth
        changeImg.height = newHeight

    }

    showSlides();
    hider.style.display = "flex"

}

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };
 }




const onFetchRedditSuccess = (searchArr) => {
    console.log(searchArr)
    console.log("fetch was a success")
    console.log(searchArr.data.children[0].data.thumbnail)
console.log(searchArr.length)

    const imagesList = []
    for (let i = 0; i < 15; i++) {
        if (searchArr.data.children[i].data.url.includes("imgur") != true) {
        imagesList.push(searchArr.data.children[i].data.url)
        }
    }
    console.log(imagesList)


    imagesList.forEach(image => {
        const thumbSlide = document.createElement('div');
        thumbSlide.classList.add("reddit-thumb");
        thumbSlide.classList.add("text-center")
        thumbSlide.innerHTML = `<img src="${image}" id="reddit-image-${image}">`;
        console.log(thumbSlide)
        // thumbSlide.style.width = "100px";
        // thumbSlide.style.height = "50px";
        redditFetch.appendChild(thumbSlide);

        // const thumbImage = document.getElementById(`reddit-image-${image}`)
        // let width = thumbImage.clientWidth;
        // let height = thumbImage.clientHeight;
        // console.log(width)
        // console.log(height)
    })

    //not working for some reason
    // let changeImgSizes = document.getElementsByClassName("reddit-image");
    // changeImgSizes.style.width = "100px";
    // changeImgSizes.style.height = "50px";
    console.log(document.images[0])

    // for (i=0; i < document.images.length; i++) {
    //     let width = document.images[i].naturalWidth;
    //     let height = document.images[i].naturalHeight;
    //     console.log(width)
    //     console.log(height)
    //     console.log(calculateAspectRatioFit(width, height, 50, 75))
        setTimeout(renderImages, 2000)
    // }
    // redditFetch.style.display = "flex"
 
    //             console.log(hasThumbnail)
    //             //create div for each img PLACEHOLDER
    //             const thumbSlide = document.createElement('div');
    //             thumbSlide.classList.add("reddit-thumb");
    //             thumbSlide.innerHTML = `<img src="${hasThumbnail}"`;
    //             redditFetch.appendChild(thumbSlide)
    //         }
    //     }
    //     redditFetch.style.display = "flex"
    // })






}

const onFetchRedditFailure = () => {
    console.log("fetch was a failure")
}

// make event listener
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("default prevented");
    onLoad.style.display = "none";
    // translate user's search into a variable AND replace spaces with '+'
    const searchTerm = input.value.replace(/\s/g, '+');

    console.log(searchTerm)

    //make fetch request
    fetch(`https://www.reddit.com/search.json?q=${searchTerm}+nsfw:no+type:image`)
        // if successful
        // already a json I think?
        // run success function
        .then(res => res.json())
        .then(onFetchRedditSuccess)
        // else if it fails run fail function
        .catch(onFetchRedditFailure)

})

stopper.addEventListener('click', () => {
    
    let currentImages = document.getElementsByClassName("reddit-thumb")
    while(currentImages[0]) {
        currentImages[0].parentNode.removeChild(currentImages[0]);
    }

    onLoad.style.display = "block";
    hider.style.display = "none";
    slideNum = 0
})