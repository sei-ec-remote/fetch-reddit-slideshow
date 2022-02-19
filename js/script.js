document.addEventListener("DOMContentLoaded", () => {
    const requestURL = 'https://www.reddit.com/search.json?q=${SearchTerm}+nsfw:no'
    const submitButton = document.getElementById = ("submitButton")
    const stopButton = document.getElementById = ("stopButton")



    
    fetch(requestURL)
    .then((apiResponse)=>{
        return apiResponse.json();
    })
    .then(jsonData=>{
        let pictures = jsonData.results;
        console.log('this is the data we want: ', jsonData)
        
    })
    .catch((error)=>{
        // any errors encountered in the request or the .then promises above will be passed into this callback
        console.log("Oh no, there's been an error!", error);
    })
})






// submitButton.addEventListener('click', (event)=>{
//     event.preventDefault()
    // console.log("user input is:", event)
// });
