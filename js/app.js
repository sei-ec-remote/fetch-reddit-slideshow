// example of what to request?
// https://www.reddit.com/search.json?q=cats+nsfw:no

//define container div
const container = document.querySelector('#container')
// define form
const form = document.getElementById('form');

// create currentImageURL placeholder
let currentImageURL;
let currentDisplayURL;

//create array for slideshow container
const imageArray = [];

// on click of submit button run this code
form.addEventListener('submit', (event) => {
    // prevent default refresh
    event.preventDefault();
    // fetch is an interface of AJAX
    const inputText = input.value;
    console.log('submit')
    fetch(`https://www.reddit.com/search.json?q=${inputText}+nsfw:no`)
        .then(res => res.json())
        .then(onGetImageSuccess)
        .catch(onGetImageFailure)
    // update container background image
    setInterval(() => {
        // we want to iterate through elements of imageArray on a set Interval
        // and after each interval, change container.style.background-image = `url('${image')`
            goThroughImages(imageArray)
            //container.innerHTML += " Hello";
        }, 5000);
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
    console.log(listingArray)
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
        if (correctURL.includes('jpg') || correctURL.includes('png') || correctURL.includes('gif')) {
        // possible to filter out any urls not ending in jpg, gif, png
            imageArray.push(correctURL);
        }
        return console.log(correctURL);
        }
    })
    // and set that as the innerHTML of the containerDiv
    // makeinterval so that every X amount of time, another image is changed out
    // create setInterval for create showImage function
    // interval time of 15000ms
}

const onGetImageFailure = (resultArray) => {
    console.log('on get image failure.');
}

container.addEventListener('DOMContentLoaded', () => {
    container.innerText = 'hello, im loaded';
})


//image iterator!
const goThroughImages = (array) => {
    array.forEach((image) => {
        container.style = `background-image: url('${image}')`;
    })
}
