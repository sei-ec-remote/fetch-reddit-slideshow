const submissionForm = document.querySelector("#search-form");


const onSearchSuccess = (searchJSON) => {
    const after = searchJSON.data.after;
    const imgRegex = /\.(jpg|png|gif)$/;

    const searchRaw = searchJSON.data.children;
    const searchedURLs = searchRaw.map(result => result.data.url);
    const imageURLs = searchedURLs.filter(url => imgRegex.test(url));

    console.log(after);
    console.log(imageURLs);
}

const onSearchFailure = () => {
    alert("Search failed!");
}

submissionForm.addEventListener("submit", (event) => {
    // don't refresh the page when form submitted
    event.preventDefault();

    fetch(`http://www.reddit.com/search.json?q=${input.value}+nsfw:no`)
        .then(resultObj => resultObj.json())
        .then(onSearchSuccess)
        .catch(onSearchFailure)
})