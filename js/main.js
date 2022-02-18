// URL References:
const url = 'http://www.reddit.com/search.json?q='

// global references to html elements
const body = document.getElementsByTagName('body')[0]
const bodyElements = body.children
const buttonSearch = document.getElementById('buttonSearch')

//function to hide content after form has been submitted
const hideForm = () => {
    for(let i=0; i < bodyElements.length; i++){
        bodyElements[i].style.display = "none"
    }
}

// create a function that will put the search term into the request url
const pulledSearchTerm = () =>{
    const searchInput =  document.getElementById('inputSearch').value
    const resultUrl = `${url}${searchInput}+nsfw:no`
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
            const dataChildren = jsonData['data']['children']
            for(let i =0; i< dataChildren.length; i ++){
            const imageUrl = dataChildren[i]['data']['thumbnail']
            console.log('imageUrl, ', imageUrl)
            }
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