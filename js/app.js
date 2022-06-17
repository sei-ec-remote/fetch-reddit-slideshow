// define DOM elements
const slide = document.querySelector('#slide');
const form = document.getElementById('form');
const textDiv = document.getElementById('text-box');
const stopDiv = document.getElementById('stop');
const stopButton = document.createElement('button');
stopButton.setAttribute('id','stopButton');
let imageArray = [];
let intervalID;

// on click of submit button run this code
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputText = input.value;
    fetch(`https://www.reddit.com/search.json?q=${inputText}+nsfw:no`)
        .then(res => res.json())
        .then(onGetImageSuccess)
        .catch(onGetImageFailure);
    textDiv.style.display = 'none';
    stopDiv.appendChild(stopButton);
    stopButton.innerText = 'RESET';
    stopButton.style.display = 'block';
})

//code to run when image get success
const onGetImageSuccess = (resultArray) => {
    const listingArray = resultArray.data.children;
    listingArray.forEach(listing => {
        let shortURL = listing.data.url;
        if (shortURL.includes('jpg') || shortURL.includes('png') || shortURL.includes('gif')) {
            imageArray.push(shortURL);
        }
    })
    intervalID = setInterval(advanceInterval, 3000);
}

const onGetImageFailure = (resultArray) => {
    console.log('On get image failure.');
}

//need to add event listener to stop button
stopButton.addEventListener('click', (e) => {
    clearInterval(intervalID);
    imageArray = [];
    slide.src = '';
    textDiv.style.display = 'block';
    stopButton.style.display = 'none';
    slide.style.border = 'none';
})

// timing interval functionality
let curArrayIndex = -1;
function advanceInterval() {
    if (!imageArray[0]) {
        return;
    } else {
    ++curArrayIndex;
    if (curArrayIndex >= imageArray.length) {
        curArrayIndex = 0;
    }
    slide.src = imageArray[curArrayIndex];
    slide.style.border = '1px solid black';
    }
}


