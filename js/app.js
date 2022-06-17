// TO DO
// onclick stopButton"
    // images removed
    // user can enter new search term.

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

// create currentImageURL placeholder
let currentImageURL;
let currentDisplayURL;

let imageArray = [];

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
    stopDiv.appendChild(stopButton);
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
// currently not working as intended
    // for (let i=0; i<imageArray.length; i++) {
    //     updateImage(i);
    // }
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
    console.log('stop button clicked!');
    // images removed
    // imageArray = [];
    // form title desc shown again
    textDiv.style.display = 'block';
    // user can enter new search term.
})

// not working as of 20.05 june 6
// function updateImage(i) {
//     setTimeout(function() {
//             console.log(`${i}`)
//             console.log(imageArray[i]);
//             container.style = `background-image: url('${imageArray[i]}')`;
//     }, 4000 * i);
//     console.log(setTimeout());
// }

function loopThroughImageArray(imageArray) {
    for (let i = 0; i < imageArray.length; i++) {
        // for each iteration console.log a word
        // and make a pause after it
        (function (i) {
            setTimeout(function () {
                // thing to happen on timer
                console.log(imageArray[i]);
                container.style.backgroundImage = `url(imageArray[i])`;
                slide.src = imageArray[i];
            }, 2000 * i);
        })(i);
    };
}

