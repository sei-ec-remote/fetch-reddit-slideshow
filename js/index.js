const p = (str) => {console.log(str)}
//js ingredients
    //Message strArr for the submit button, when there no .backButton on it
    // messageHolder = 
    const buttonMessage = [
        document.getElementById('submit').textContent, //Starting message
        'back'
    ]
    //The button #submit //To request the search Or go back
    const submit = document.getElementById('submit')
    //the input #input //To get user search request
    input = document.getElementById('#input')
    // div #container to hold the users answers
    resaltsPanal = document.getElementById('container')

// funct start search //arg searchItem
const search = (e) => (
    //if !.backButton
    if (submit.innerText === buttonMessage) {
        // fetches 
        // fill the container with <img>
        // toggle my submit/backbutton add class name to .backButton
        toggleSubmitButton()
    }
    //else
        // remove content of div
        // toggle my submit/backbutton remove class name to .backButton 

)

// funct toggle my submit/back button
const toggleSubmitButton = () => {
    //if .backButton 
    if (submit.getAttribute('class', 'backButton'))
        //remove .backButton
        submit.classList.toggle('back-button')
        //change innerText = message[0]
        submit.innerText = buttonMessage[1]
    //else 
        //add .backButton
        submit.classList.toggle('back-button')
        //change innerText = message[1]
        submit.innerText = buttonMessage[0]
}

//addEventL
    // on #submit to start the search
    submit.addEventListener('click', search)
