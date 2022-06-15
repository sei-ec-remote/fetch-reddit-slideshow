// example of what to request?
// https://www.reddit.com/search.json?q=cats+nsfw:no

//define container div
const container = document.querySelector('#container')
// define form
const form = document.getElementById('form');

// create currentImageURL placeholder
let currentImageURL;

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
})

//code to run when image get success
const onGetImageSuccess = (resultArray) => {
    console.log('on get image success!');
    //console.log(resultArray)
    // make a slideshow! 
    // to do that!!! iterate through array with forEach
        // IF THERE IS ALREADY CONTENT IN THE CONTAINER,
        // EMPTY IT OUT
    // for each of the images, define it
    const listingArray = resultArray.data.children;
    console.log(listingArray)
    // use map to pop out the URLs into an image array!
    // only some of the listing have images
    // and check the imageArray we've mapped to for ending in last 3 endings
    listingArray.forEach(listing => {
        // possible to filter out any urls not ending in jpg, gif, png
        // check if it has a data.preview
        // check if it's external
        // assign that img url to currentImageURL
        // change preview.redd.it to i.redd.it
        let image = listing.data.preview.images[0].source.url;
        // returns an object with only one object
        
        // just need to tell it to look inside the only thing in there
        return console.log(image);
    })
    // and set that as the innerHTML of the containerDiv
    // makeinterval so that every X amount of time, another image is changed out
    // create setInterval for create showImage function
    // interval time of 15000ms
}

const onGetImageFailure = (resultArray) => {
    console.log('on get image failure.')
}
