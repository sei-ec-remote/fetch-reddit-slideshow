document.addEventListener("DOMContentLoaded", () => {
    const requestURL = "http://www.reddit.com/search.json?q="
    const searchInput = document.querySelector('#searchInput')
    const submitButton = document.querySelector('#submitButton')
    const stopButton = document.querySelector('#stopButton')
  
  //show and hide HTML Elements
  const hideElement = () => {
    let x = document.getElementById('submitForm')
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none" ;
    }

    let y = document.getElementById('stopButton')
    if (y.style.display === "none") {
        y.style.display = "inline";
    } else {
        y.style.display = "none" ;
    }


    }

  
    submitButton.addEventListener('click', () => {
        //preventing page refresh on press of submit
        event.preventDefault()
        // console.log('clicky', event)
        hideElement()

        fetch(`${requestURL}${searchInput.value}`)
        // handle the response that we receive (convert it to JSON)
            .then(apiResponse => {
                return apiResponse.json()
            })
            // locate our data and store it so we can render
            .then(jsonData => {
                console.log(jsonData)
                console.log('this is the data we want:', jsonData.data.children[1].data.url)
                // let people = jsonData.results
                // use that data to create some HTML elements to display
                // render those elements
                // people.forEach(addPerson)
            })

        .catch(err => console.log('error!', err))


    })

    stopButton.addEventListener('click', () => {
      //preventing page refresh on press of submit
      event.preventDefault()
      // console.log('clicky', event)
      hideElement()

    })


})