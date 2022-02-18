// global references to html elements
const body = document.getElementsByTagName('body')[0]
const bodyElements = body.children
const inputSearch = document.getElementById('inputSearch').value
const buttonSearch = document.getElementById('buttonSearch')

//function to hide content after form has been submitted

console.log("bodyElements.length, ",bodyElements.length)
console.log("bodyElements, ", bodyElements)
console.log("bodyElements[0],", bodyElements[0])
bodyElements[0].remove
console.log(bodyElements.length)

const hideForm = () => {
    for(let i=0; i < bodyElements.length; i++){
        console.log('hiding element; ', bodyElements[i])
        bodyElements[i].style.display = "none"
    }
}



//add listeners 
document.addEventListener('DOMContentLoaded', () => {
    //console.log("DOM Content Loaded")
    buttonSearch.addEventListener("click",(event) => { 
        event.preventDefault()
        hideForm()
        console.log("search has been clicked")
    }
    )
})