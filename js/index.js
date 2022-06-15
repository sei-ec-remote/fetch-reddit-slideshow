const searchContainer = document.querySelector("#search-container");
const searchResults = document.querySelector("#search-results-container");
const slideshow = document.querySelector("#slideshow");
const stopButton = document.querySelector("#stop-button");
const imgArray = [];

let timer = null;
let after = "";


const displayResults = () => {
    searchContainer.style.display = "none";
    searchResults.style.display = "grid";
}

const displaySearch = () => {
    searchContainer.style.display = "block";
    searchResults.style.display = "none";
}

const displayNextImage = () => {
    // refill our images array if we're running out
    if (imgArray.length < 5) { refillImgArray(); }
    console.log(imgArray.length);

    slideshow.style.backgroundImage = `url(${imgArray.shift()})`;
}

const startSlideShow = () => {
    console.log("slideshow start");
    displayNextImage();
    timer = setInterval(displayNextImage, 1500);
}

const onSearchSuccess = (searchJSON) => {
    const thisAfter = searchJSON.data.after;
    const imgRegex = /\.(jpg|png|gif)$/;

    // console.log(searchJSON);

    const searchRaw = searchJSON.data.children;
    const searchedURLs = searchRaw.map(result => result.data.url);
    const imageURLs = searchedURLs.filter(url => imgRegex.test(url));

    imgArray.push(...imageURLs);
    after = thisAfter;

    displayResults();
    if (!timer) { startSlideShow(); }

    console.log("Search succeeded!");
}

const onSearchFailure = () => {
    alert("Search failed!");
}

const fetchImagesFromAPI = (after = null) => {
    const urlStr = `http://www.reddit.com/search.json?q=${input.value}${after ? `&after=${after}`: ""}`;

    fetch(urlStr)
        .then(resultObj => resultObj.json())
        .then(onSearchSuccess)
        .catch(onSearchFailure)
}

const refillImgArray = () => { fetchImagesFromAPI(after); }


searchContainer.addEventListener("submit", (event) => {
    // don't refresh the page when form submitted
    event.preventDefault();

    fetchImagesFromAPI();
})

stopButton.addEventListener("click", () => {
    displaySearch();
    while (imgArray.length) { imgArray.pop(); }
    clearInterval(timer);
    timer = 0;
})