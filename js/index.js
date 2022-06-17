

document.addEventListener('DOMContentLoaded',() => {
    console.log('DOM Loaded');
})

const chooseImages = (dataJSON) => {
    const filteredImages = dataJSON.data.children.filter((here,i) => dataJSON.data.children[i].data.url.slice(-3) === 'jpg')
    console.log(filteredImages)
    
}

document.getElementById('search-button').addEventListener('click', (event) => {
    event.preventDefault();
    userText = document.getElementById('input-box').value.replaceAll(' ', '+')
    console.log(userText)
    
    fetch(`https://www.reddit.com/r/images/search.json?q=${userText}+nsfw:no&limit=100`) 
        .then((responseData)=> responseData.json())
        .then((jsonData)=>{
            chooseImages(jsonData)
        })
        .catch((jsonData)=> console.log(`ERROR: Data not loaded`))
})



// add event listener to listen for 'search-button' to be clicked
// when 'search-button' is clicked, run function called 'getSearchData' and set the parameter pulled by 'getSearchData'(like 'searchedText') to the return value of another function called 'getUserTextInput'
    // getUserTextInput' will simply set a variable (userInputId) equal to 'document.getElementById('input') and then set a new variable (userInput) to 'userInputId.innerText'
// when event listener is clicked, concatenate the 'value' inside of the 'input' id into the fetch URL
    // i.e. fetch('https://www.reddit.com/r/images/search.json?q=${+nsfw:no&limit=100')