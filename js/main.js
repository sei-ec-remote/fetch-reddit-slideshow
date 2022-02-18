// global references to html elements
const body = document.getElementsByTagName('body')[0]
const bodyElements = body.children
const buttonSearch = document.getElementById('buttonSearch')

//function to hide content after form has been submitted

console.log("bodyElements.length, ",bodyElements.length)
console.log("bodyElements, ", bodyElements)
console.log("bodyElements[0],", bodyElements[0])
bodyElements[0].remove
console.log(bodyElements.length)

const hideForm = () => {
    for(let i=0; i < bodyElements.length; i++){
        bodyElements[i].style.display = "none"
    }
}

// create an empty variable to hold the resultUrl after submit has been clicked
const resultUrl = ""

// create a function that will put the search term into the request url
const pulledSearchTerm = () =>{
    const searchInput =  document.getElementById('inputSearch').value
    console.log("searchInput ", searchInput)
    const resultUrl = `http://www.reddit.com/search.json?q=${searchInput}+nsfw:no`
    return resultUrl
}

//create a function to fetch data from reddit
const fetchRedditPics = (requestUrl) => {
    console.log("requestUrl,", requestUrl)
    fetch(requestUrl)
        .then((responseData)=>{
            return responseData.json();
        })
        .then((jsonData)=>{
            console.log("this is the returned json data, ",jsonData)
        })
        .catch((error)=>{
            console.log("shoot there is an error..", error)
        })
}



//add listeners 
document.addEventListener('DOMContentLoaded', () => {
    //console.log("DOM Content Loaded")
    buttonSearch.addEventListener("click",(event) => { 
        event.preventDefault()
        hideForm()
        fetchRedditPics(pulledSearchTerm())
    }
    )
})