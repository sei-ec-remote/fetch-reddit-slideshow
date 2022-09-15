const searchButton = document.querySelector("#button")
const stopButton = document.querySelector ('#stop')
const  beginningInfo = document.querySelector("#header")
const userInput = document.querySelector("#user-input")
const form = document.querySelector('#userRequest')

form.addEventListener('click', event => {
    // prevent default behavior of refresh
    // almost will always have to do this
    event.preventDefault()
})

searchButton.addEventListener('click', ()=>{
   
    console.log(userInput.value)

})