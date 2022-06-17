
const slideShowImageURLs = [];
let slidesShown = 0;
let runSlideshow;

const showSlide = () => {
    if(slidesShown === 0) {
        document.getElementById('input-box').style.display = 'none'
        document.getElementById('search-button').style.display = 'none'
        document.getElementById('stop-button').style.display = 'flex'
        document.getElementById('slide-show').style.display = 'flex'
    }
    
    document.getElementById('slide-show').innerHTML = `
        <div class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-item active">
                <img alt="this-image" class="d-block w-100" src="${slideShowImageURLs[slidesShown]}" width="800" height="650">
            </div>
        </div>
    `
    if(slidesShown < slideShowImageURLs.length-1) {
        slidesShown++
    } else {
        reset();
    }
    
}

document.addEventListener('DOMContentLoaded',() => {
    console.log('DOM Loaded')
})

const chooseImages = (dataJSON) => {
    for(let i=0;i<dataJSON.data.children.length;i++) {
        if(dataJSON.data.children[i].data.url.slice(-3) === 'jpg') {
            slideShowImageURLs.push(dataJSON.data.children[i].data.url)
        }
    }

    runSlideshow = setInterval(showSlide,5000);
}

document.getElementById('search-button').addEventListener('click', (event) => {
    event.preventDefault();
    userText = document.getElementById('input-box').value.replaceAll(' ', '+')
    console.log(userText)
    document.getElementById('search-button').value = 'loading...'
    
    fetch(`https://www.reddit.com/search.json?q=${userText}+nsfw:no&limit=100`) 
        .then((responseData)=> responseData.json())
        .then((jsonData)=>{
            chooseImages(jsonData)
        })
        .catch((jsonData) => {
            console.log('ERROR')
        })
})

document.getElementById('stop-button').addEventListener('click', (event) => {
    event.preventDefault();
    reset();
})

function reset () {
    clearInterval(runSlideshow)
    document.getElementById('slide-show').style.display = 'none';
    document.getElementById('stop-button').style.display = 'none'
    document.getElementById('input-box').value = ''
    document.getElementById('input-box').style.display = 'flex'
    document.getElementById('search-button').value = 'search'
    document.getElementById('search-button').style.display = 'flex'
    slidesShown = 0;
    for(let i=slideShowImageURLs.length-1;i>=0;i--) {
        slideShowImageURLs.pop();
    }
}