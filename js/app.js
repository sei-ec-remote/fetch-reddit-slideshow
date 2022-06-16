// TO DO
// (opt) show loading message
// onclick stopButton"
    // images removed
    // form title desc shown again
    // user can enter new search term.

//define container div
const container = document.querySelector('#container')
// define form
const form = document.getElementById('form');

const textDiv = document.getElementById("text-box");

//create stop button
const stopButton = document.createElement('button');
// set stopButton id
stopButton.setAttribute('id','stopButton');

// create currentImageURL placeholder
let currentImageURL;
let currentDisplayURL;

//create array for slideshow container
const imageArray = [];

// on click of submit button run this code
form.addEventListener('submit', (event) => {
    // prevent default refresh
    event.preventDefault();
    if (!imageArray[0] === undefined) {
        imageArray = [];
        currentDisplayURL = undefined;
        currentImageURL = undefined;
    }
    // fetch is an interface of AJAX
    const inputText = input.value;
    console.log('submit')
    fetch(`https://www.reddit.com/search.json?q=${inputText}+nsfw:no`)
        .then(res => res.json())
        .then(onGetImageSuccess)
        .catch(onGetImageFailure);
    // hide textDiv    
    textDiv.style.display = 'none';
    // display it on page?
    container.appendChild(stopButton);
    stopButton.innerText = "STOP";
})

//code to run when image get success
const onGetImageSuccess = (resultArray) => {
    console.log('on get image success!');
    // make a slideshow! 
    // to do that!!! iterate through array with forEach
        // IF THERE IS ALREADY CONTENT IN THE CONTAINER,
        // EMPTY IT OUT
    // for each of the images, define it
    const listingArray = resultArray.data.children;
    // use map to pop out the URLs into an image array!
    listingArray.forEach(listing => {
        // check if it has a data.preview
        if (!listing.data.preview) {
            return;
        } else {
        // assign that img url to currentImageURL
        let imageURL = listing.data.preview.images[0].source.url;
        // this replaces the preview part of reddit to correct i.
        let correctURL = imageURL.replace(/preview.redd.it/, 'i.redd.it');
        if (correctURL.includes('external')) {
            return;
        }
        if (correctURL.includes('jpg') || correctURL.includes('png') || correctURL.includes('gif')) {
            imageArray.push(correctURL);
        }
        //return console.log(correctURL);
        }
    })
    for (let i=0; i<imageArray.length; i++) {
        updateImage(i);
    }
}

const onGetImageFailure = (resultArray) => {
    console.log('on get image failure.');
}

container.addEventListener('DOMContentLoaded', () => {
    container.innerText = 'hello, im loaded';
})

//need to add event listener to stop button
stopButton.addEventListener('click', (e) => {
    console.log('stop button clicked!');
    // onclick stopButton"
    // images removed
    // form title desc shown again
    textDiv.style.display = 'block';
    // user can enter new search term.
})

function updateImage(i) {
    setTimeout(function() {
            console.log(`${i}`)
            console.log(imageArray[i]);
            container.style = `background-image: url('${imageArray[i]}')`;
    }, 5000 * i);
}

