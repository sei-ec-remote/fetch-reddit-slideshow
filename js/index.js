const p = (str) => {console.log(str)}
//js ingredients
    //Message strArr for the submit button, when there no .backButton on it
    // messageHolder = 
    let buttonMessage = [
        document.getElementById('submit').textContent, //Starting message
        'back'
    ]
    //The button #submit //To request the search Or go back
    const search = document.getElementById('submit')
    //the input #input //To get user search request
    input = document.getElementById('#input')
    // div #container to hold the users answers
    resaltsPanal = document.getElementById('container')

// funct start search //arg searchItem
    //if !.backButton
        // fetches 
        // fill the container with <img>
        // toggle my submit/backbutton add class name to .backButton
    //else
        // remove content of div
        // toggle my submit/backbutton remove class name to .backButton 

// funct toggle my submit/back button
    //if .backButton 
        //remove .backButton
        //change innerText = message[0]
    //else 
        //add .backButton
        //change innerText = message[1]

//addEventL
    // on #submit to start the search
        //pass input value #input
