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
        // if this is successful it will resolve and be passed to a `.then()`
        // intake a `res` or response from  fetch and change to JSON
        // ALWAYS want to change Response object to JSON
        // () => {}
        .then(res => res.json())
        // passing our JSON  from the prevous .then() to our success function
        .then(onGetImageSuccess)
        // if this fails for whatever reason it will be rejected and passed to the `.catch()`
        // passing an error to our failure function
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
    // and set that as the innerHTML of the containerDiv
    // makeinterval so that every X amount of time, another image is changed out
    // create setInterval for create showImage function
    // interval time of 15000ms
}

const onGetImageFailure = (resultArray) => {
    console.log('on get image failure.')
}
