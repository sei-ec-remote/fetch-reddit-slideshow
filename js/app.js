// We want to make a request to the Random User API
document.addEventListener("DOMContentLoaded", () => {
    //request URL base, the query input is populated by the user
    const requestURL = "http://www.reddit.com/search.json?q="
    const image = document.getElementById('#image')
    const peopleList = document.querySelector('#peopleList')
    const submitButton = document.querySelector('#submitButton')
    const stopButton = document.querySelector('#stopButton')

    // click listener to submit request on click
    submitButton.addEventListener('click', (event) => {
        // stops page from reloading on form submit
        event.preventDefault()
        // console.log('clicky!', event)
        // extract the value from our number input and send it our request
        fetch('https://www.reddit.com/search.json?q=')
        // handle the response that we receive (convert it to JSON)
        .then(apiResponse => {
            return apiResponse.json()
        })
        // locate our data and store it so we can render
        .then(jsonData => {
            console.log(jsonData)
            console.log('this is the data we want:', jsonData.results)
            let people = jsonData.results
            // use that data to create some HTML elements to display
            // render those elements
            people.forEach(addPerson)
        })
            .catch(err => console.log('error!', err))
        // console.log('number input value:', numberInput.value)
    })

})