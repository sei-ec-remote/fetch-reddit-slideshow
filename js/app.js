// example of what to request?
// https://www.reddit.com/search.json?q=cats+nsfw:no

//define container div
const container = document.querySelector('#container')
// define form
const form = document.getElementById('form');

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
    console.log('after Fetch')
})

//code to run when image get success
const onGetImageSuccess = (resultArray) => {
    console.log('on get image success!');
    console.log(resultArray);
    // make a slideshow! 
    // to do that!!! iterate through array with forEach
        // IF THERE IS ALREADY CONTENT IN THE CONTAINER,
        // EMPTY IT OUT
    // for each of the images, define it
    const listingArray = resultArray.data.children;
    console.log(listingArray);
    listingArray.forEach(listing => {
        // check if it has a data.preview
        // check if it's external
        return console.log(listing.data.preview);
    })
    // and set that as the innerHTML of the containerDiv
    // makeinterval so that every X amount of time, another image is changed out
    // create setInterval for create showImage function
    // interval time of 15000ms
}

const onGetImageFailure = (resultArray) => {
    console.log('on get image failure.')
}
