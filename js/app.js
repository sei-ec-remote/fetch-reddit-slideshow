
// define DOM elements
const slide = document.querySelector('#slide');
// define form
const form = document.getElementById('form');
// define instructions text area
const textDiv = document.getElementById('text-box');
// define div where stop button populates
const stopDiv = document.getElementById('stop');
//create stop button
const stopButton = document.createElement('button');
// set stopButton id
stopButton.setAttribute('id','stopButton');
// define container div for carousel
const containerDiv = document.querySelector(".carousel-inner")
// creates empty array in which to put useable images
let imageArray = [];
//this will let us get a solid number for the array length
let arrayLength;

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
        //console.log(shortURL);
        if (shortURL.includes('jpg') || shortURL.includes('png') || shortURL.includes('gif')) {
            imageArray.push(shortURL);
        }
    })
    arrayLength = imageArray.length
    //loopThroughImageArray(imageArray);
}

const onGetImageFailure = (resultArray) => {
    console.log('On get image failure.');
}

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


// THIS NEEDS WORK!
// 23.10 notes: for whatever reason, it's looping through the array infinitely....why???
function loopThroughImageArray(imageArray) {
    for (let i = 0; i < arrayLength; i++) {
        //console.log(imageArray[i]);
        //const carousel = document.createElement('div');
        //containerDiv.appendChild(carousel);
        // if (i = 0) {
        //     carousel.setAttribute('class', 'carousel-item active');
        // } else {
        //     const carousel = document.createElement('div');
        //     carousel.setAttribute('class', 'carousel-item');
        // }
        //carousel.innerHTML = `testing!`
        };
}

// test timing interval functionality
let curArrayIndex = -1;
function advanceInterval() {
    // this checks to see if there is anything in imageArray atm
    if (!imageArray[0]) {
        return;
    } else {
    // this moves us up one in the array index
    ++curArrayIndex;
    // this resets us in the array index if we're at the end
    if (curArrayIndex >= imageArray.length) {
        curArrayIndex = 0;
    }
    //setImage(imageArray[curArrayIndex]);
    // console.log functionality!
    console.log(imageArray[curArrayIndex]);
    }
}
// ok! this is working!
let intervalID = setInterval(advanceInterval, 3000);

// try to make a slideshow!