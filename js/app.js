
//define container div
const container = document.querySelector('#container')
const slide = document.querySelector('#slide');
// define form
const form = document.getElementById('form');

const textDiv = document.getElementById('text-box');

const stopDiv = document.getElementById('stop');
//create stop button
const stopButton = document.createElement('button');
// set stopButton id
stopButton.setAttribute('id','stopButton');

let imageArray = [];

// on click of submit button run this code
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // define the user query
    const inputText = input.value;
    fetch(`https://www.reddit.com/search.json?q=${inputText}+nsfw:no`)
        .then(res => res.json())
        .then(onGetImageSuccess)
        .catch(onGetImageFailure);
    // hide textDiv    
    textDiv.style.display = 'none';
    // display it on page?
    stopDiv.appendChild(stopButton);
    stopButton.innerText = "STOP";
})

//code to run when image get success
const onGetImageSuccess = (resultArray) => {
    console.log('on get image success!');
    // define array of listings
    const listingArray = resultArray.data.children;
    listingArray.forEach(listing => {
        let shortURL = listing.data.url;
        console.log(shortURL);
        if (shortURL.includes('jpg') || shortURL.includes('png') || shortURL.includes('gif')) {
            imageArray.push(shortURL);
        }
    })
    loopThroughImageArray(imageArray);
}

const onGetImageFailure = (resultArray) => {
    console.log('on get image failure.');
}

container.addEventListener('DOMContentLoaded', () => {
    container.innerText = 'hello, im loaded';
})

//need to add event listener to stop button
stopButton.addEventListener('click', (e) => {
    // console.log('stop button clicked!');
    // // images removed
    // clearInterval(loopInterval);
    // slide.src = '';
    // imageArray = [];
    // // form title desc shown again
    // textDiv.style.display = 'block';
    // user can enter new search term.
    // STUPID FIX - RELOAD WHOLE PAGE
    location.reload();
})

let loopInterval;

function loopThroughImageArray(imageArray) {
    for (let i = 0; i < imageArray.length; i++) {
        // for each iteration console.log a word
        // and make a pause after it
        (function (i) {
            loopInterval = setTimeout(function () {
                //console.log(imageArray[i]);
                slide.src = imageArray[i];
            }, 2000 * i);
        })(i);
    };
}

