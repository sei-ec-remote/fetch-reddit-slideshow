// Variable for the API URL we want to pull data from
const fetchURL = "https://www.reddit.com/search.json"
// Variables for the user's search input
const searchBox = document.getElementById("form-input")
let searchText = searchBox.value
let picsArray = []
// Variables to select HTML elements for DOM manipulation
const btnSubmit = document.getElementById("button-submit")
const userPics = document.getElementById("user-img")
const formBlock = document.getElementById("form-block")
// Creating new controller for the fetch request so we
// can stop it when we're done.
const controller = new AbortController();
const signal = controller.signal;

// Set all the stuff that'll happen when the page has loaded.
document.addEventListener("DOMContentLoaded", () => {
    // First things first, let's not show our image
    // hanging space yet.
    userPics.style.display = "none"

    // When the button is clicked, take away the form area
    // and show the images space.
    btnSubmit.addEventListener("click", (event) => {
        // Prevents default behavior happening with the
        // button click.
        event.preventDefault()
        formBlock.style.display = "none"
        userPics.style.display = "block"
        // Create and make the stop button available.
        const btnStop = document.createElement("button")
        btnStop.innerText = "I'm done with this."
        btnStop.id = "btnStop"
        document.body.appendChild(btnStop)
        // Pull the user's image request into a variable
        // for use in the API search.
        searchText = searchBox.value
        console.log("Searching for:", searchText)
        // The setInterval method populates a new image
        // URL every time interval declared (in milliseconds)
        // to the user-image element so the user can see it.
        // It then updates the counter and array position
        // with every loop.
        let counter = 0
        const picTiming = setInterval(() => {
            userPics.src = picsArray[counter]
            counter++
            if (picsArray.length - 1 === counter)
            {
                counter = 0
            }
        }, 2000)
        
        // Set the stop button to remove itself and the
        // image space when clicked, reset the search,
        // and results, and bring back all the initial
        // elements for starting the slideshow.
        btnStop.addEventListener("click", () => {
            searchBox.value = ""
            picsArray = []
            btnStop.style.display = "none"
            userPics.src = ""
            userPics.style.display = "none"
            formBlock.style.display = "block"
            // Stopping the fetch request and stopping the
            // interval from trying to load new pictures
            // once the stop button has been pressed.
            controller.abort();
            console.log('Fetch request stopped.');
            clearInterval(picTiming)
            console.log('Interval cleared, nothing should be happening right now.');
            })
        
        // The Fetch method will check the URL and search
        // terms (set above) and begin the process of
        // distlling the data according to our needs as
        // specified in the method.
        fetch(`${fetchURL}?q=${searchBox.value}+nsfw:no`)
        // Take the API data and return it as JSON so we can pull
        // out what we need.
            .then(responseAPI => {
                return responseAPI.json()
            })
            // Find the information on where the images are
            // located and put that information into an array
            // so we can render it to the user.
            .then(responseJSON => {
                // console.log("Let's look at picData", picData)
                let picData = responseJSON.data.children
                for (let i = 0; i < picData.length; i++) {
                    // Remove entries that are flagged in relation
                    // to the user being logged (or not) into Reddit.
                    if ((picData[i].data.thumbnail !== "default")
                    && (picData[i].data.thumbnail !== "self")
                    && (picData[i].data.thumbnail !== "spoiler")) {
                        picsArray.push(picData[i].data.thumbnail)   
                    }
                }
                // console.log(picsArray)

            })
            // A catch-all error to display in the console.log if
            // something goes wrong with the fetch (404, no image,
            // etc.)
            .catch(err => console.log("Uh oh, error!", err))
        })
})

// DELIVERABLE REQUIREMENTS
// Page should load with
// ✔ Some sort of title
// ✔ A short description telling the user what to do
// ✔ A blank text field
// ✔ A Button ("start" or "go" or "search")
// When the user enters a search term and presses enter
// ✔ The form / title / description should hide
// Show a loading message (optional)
// ✔ Fetch related posts from reddit (with fetch)
// ✔ Display animation / slideshow of images (with DOM manipulation)
// ✔ Show a button to stop slideshow
// ✔ Repeat animation until user clicks "stop", then redisplay the original form/title/description
// When the user clicks the "stop" button
// ✔ Animation stops / images are removed
// ✔ Form / title / description are shown again
// ✔ User can enter a new search term
