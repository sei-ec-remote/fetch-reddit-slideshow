// # Reddit photo slideshow

// We are going to use what we've learned so far to create a basic slideshow using images taken from reddit via AJAX.

// #### Content Warning

// Reddit sometimes contains some offensive images be careful with your search terms. If you want to ensure that you do not get NSFW (Not Safe For Work) items. You can filter it by adding "nsfw:no" to the end of the search query.

// **Example:** http://www.reddit.com/search.json?q=cats+nsfw:no

// ## Getting Started

// * Fork and clone this repository
// * Rough out how you want your basic site to look

// ## Requirements/User Experience

// #### Page should load with

// * Some sort of title
// * A short description telling the user what to do
// * A blank text field
// * A Button ("start" or "go" or "search")

// #### When the user enters a search term and presses enter

// * The form / title / description should hide
// * Show a loading message (optional)
// * Fetch related posts from reddit (with `fetch`)
// * Display animation / slideshow of images (with DOM manipulation)
// * Show a button to stop slideshow
// * Repeat animation until user clicks "stop", then redisplay the original form/title/description

// #### When the user clicks the "stop" button

// * Animation stops / images are removed
// * Form / title / description are shown again
// * User can enter a new search term


// ## Suggested proccess

// It is important to break down any development project in to smaller pieces and tackle them one at a time. Here is a list of how you might want to attack this project.

// * Create your form (HTML/CSS)
// * Prevent default form submission and verify that you can type something into the form
// * Use AJAX to make a request. Show data in console
// * Create an array of image URLs (tip: use [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)).
// * Make the form / title / description hide
// * Cycle through images
//     * tip: use [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)
//     * Either add images, or change the `src` of a single image tag
// * Add some interesting style / animation
// * Create button to stop animation (tip: use [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval)).

// ## Example Deliverables

// ![Slide 1](./examples/ajaxexample1.jpg)

// ---

// ![Slide 2](./examples/ajaxexample2.jpg)


// Retrieve the Carousel
const carouselOutter = document.getElementById('carousel');
const carouselInner = document.getElementsByClassName('carousel-inner');


const initialUrl = "http://www.reddit.com/search.json?q=";

// Hardcoded values to get JSON working from Reddi
// let requestUrl = "http://www.reddit.com/search.json?q=cats+nsfw:no";
let requestUrl = "";


const createCarousel = () => {
    return (new bootstrap.Carousel(carouselOutter, {
        interval: 2000
    }));
}

// NOT USED - would not work.
const stopCarousel = (carousel) => {
     carouselOutter.removeAttribute ('data-ride');
     carouselOutter.setAttribute ('data-interval','false');
}

// Gets the stop button and makes it visible using css.
// Creates an event listener.  Listen for a click on the stop button 
// Once a click occurs, pause the carousel
const createStopButton = (carousel) => {

    // Create the Stop button.
    // let button = document.createElement("button");
    //  button.className = "btn btn-danger btn-lg";
    //  button.id = "stop-button";
    //  button.value = "Stop";
    const stopButton = document.getElementById('stop-button');
    stopButton.style.visibility = 'visible';


    // Listen for the click and then pause the carousel.
    stopButton.addEventListener("click", function () {

        // Disable the carousel by removing the data-ride
        // stopCarousel(carousel);
        carousel.pause();

        // Remove all the images - get all the divs carousel-items
        const firstImage = document.getElementsByClassName("carousel-item active");
        for (let i=0; i < firstImage.length; i++) {
            firstImage[i].remove();
        }
        const restImages = document.getElementsByClassName("carousel-item");
        for (let i=0; i < restImages.length; i++) {
            restImages[i].remove();
        }

        // Hide the stop button again.
        stopButton.style.visibility = 'hidden';


        // Reset the search input display area
        // Form, title and descripton are displayed
        // User can enter new searchable string
        showTheDisplay();
    });

}

// Gets the search display area and hides everything it contains from the
//   display.
const hideTheDisplay = () => {

    // Disable the display for search-display
    const searchDisplay = document.getElementById('search-display');
    searchDisplay.style.display = 'none';
}
// Gets the search display area and enables the display to be visible
//   and the text input field to be empty.
const showTheDisplay = () => {

   // Enable the display for search-display
   const searchDisplay = document.getElementById('search-display');
   searchDisplay.style.display = 'initial'; 

   // Make sure the input text field is empty
   const searchInput = document.getElementById("search-string");
   searchInput.value = "";
}

// Process the JSON data returned from the requested URL.
//    Reddit data is in a specific JSON format where images are
//     in a data.children array.  Loop through those images to get
//     at the image thumbnail stored in the data.thumbnail.
//    Setup divs necessary for Bootstrap carousel to work properly
//     and append the divs to the correct carousel parent element.
const processData = () => {

    fetch(requestUrl)
    .then((responseData)=>{

     // Fetch will package the response into an object with some methods that allow us to do some useful things with the response.
     // Use the .json method to return the data in JSON format
     return responseData.json();
     })
     .then((jsonData)=>{

        const childArray = jsonData.data.children;
        const imageArray = childArray.filter(getImageUrl);

        // make sure the image urls are not empty
        function getImageUrl(image) {
            return (image.data.thumbnail !== "");
        }

        // Process the images array and add to the carousel-inner
        for (let i= 0; i < imageArray.length; i++) {
             // Create the divs for carousel items the first must 
            // be set to active
            const div = document.createElement("div");
            if (i === 0) {
                 // first element
                div.className = "carousel-item active"; 
            } else {
                div.className = "carousel-item";
             }
            // Create the image element.
            const img = document.createElement("img");
            img.className = 'd-block w-100';
            img.src = `${imageArray[i].data.thumbnail}`;
            img.alt = `${i} slide`;

            // Append image to div, append div to carousel-inner
            div.appendChild(img);

            carouselInner[0].appendChild(div);
        }

        // Set up the carousel to run. Now instantiate it so we can 
        //   change properties.
        createCarousel();

    })

    // fetch can throw an error.
    .catch((error)=>{
        // If any error is sent bac, you will have access to it here.
        console.log("error!!!:", error);
    });
}

// A document is loaded, get the search string from the input box, set up the
//   url, process the data from that search string, hide the form display,
//   and using bootstraps carousel we create a stop button.
document.addEventListener("DOMContentLoaded", ()=>{
    
    form.addEventListener('submit', (e)=>{

        // Stops the page from reloading on submit
        e.preventDefault()

        // get the value in the input box.
        const searchQuery = document.getElementById("search-string").value;

        // create a new query search string and url
        requestUrl = `${initialUrl}${searchQuery}` + `+nsfw:no`;

        // wow - this works too.
        // console.log("user input other way is:", document.getElementById('form').elements['search-string'].value);

        processData();
        hideTheDisplay();
        createStopButton(createCarousel());
    })
});

