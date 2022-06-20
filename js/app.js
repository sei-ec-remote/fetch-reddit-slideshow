// TO DO:
// conform to requirements below
// Clean URL list



//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let globalImgUrlsArray = [] // global USED VAR TO keep it globally scoped

const form = document.querySelector('#form')  //global

var iterator2 = 0

var timerIDtoEnd = 0 

//*********Functions *********************************************************** */

const photoLoopSuccess = (arrayObject) => {



    // gives the aray of list of URLs, set to empty at first
    let arrayOfImgUrls = []

    for (let z = 0; z < arrayObject.data.children.length; z++) {
        arrayOfImgUrls.push(arrayObject.data.children[z].data.url)
    }


    const setOutsideArray = (arrayOfImgUrls) => {
        globalImgUrlsArray = [...arrayOfImgUrls]
        return globalImgUrlsArray
    }

    //copies the array to global array for use later
    setOutsideArray(arrayOfImgUrls)

    altLoop()// ALT loop
}    



const altLoop = () => {

    console.log('inAltLOOP');

   function mainLoop(){

        if (iterator2 === globalImgUrlsArray.length ){
            console.log('HIT END');
            clearInterval(timerIDtoEnd)  // DOUBLE CHECK THIS ID TO MAKE SURE IT MATCHES
        }

        const makeImg = document.querySelector('#imgDiv1')
        makeImg.style.height = "400px"
        makeImg.style.width = "400px"
        makeImg.src = globalImgUrlsArray[iterator2] 
    
        iterator2++

        
        
        document.querySelector("#stopSlideButton").addEventListener('click',event =>{
            clearInterval(timerIDtoEnd)
        })

    
    }

       
    const startInterval = () => {

        let intervalID = setInterval(mainLoop,3000)   

        timerIDtoEnd = intervalID
        console.log('timerIDtoEnd:ticker:'+timerIDtoEnd);
    }
    
    startInterval()
}

const photoLoopFail = () => {
    console.log('FAILED REQUEST')
}


// submit event kicks off the fetch
form.addEventListener('submit', (event) => {
    console.log('inFETCH');

    event.preventDefault()  //stops submit page refresh

    let userSearchTerm = input.value

    
    // fetch(`https://www.reddit.com/search.json?q=${userSearchTerm}+nsfw:no+type:image&limit=50`)

    // fetch(`https://www.reddit.com/r/pics/search.json?q=${userSearchTerm}&limit=50&nsfw:no`)


    fetch(`https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image&limit=50`)


    .then(response => response.json())  // formates redditqueryobject to json 

    .then(photoLoopSuccess) // WORKING

    
    .catch((error)=>{
           console.log("Oh no, there's been an error!", error)})

})


//////////**************************************************************


// Requirements/User Experience
// Page should load with

//     Some sort of title  DONE
//     A short description telling the user what to do DONE
//     A blank text field DONE
//     A Button ("start" or "go" or "search") DONE

// When the user enters a search term and presses enter

//     The form / title / description should hide !!! 
//     Show a loading message (optional) 
//     Fetch related posts from reddit (with fetch) DONE
//     Display animation / slideshow of images (with DOM manipulation) DONE
//     Show a button to stop slideshow !!!
//     Repeat animation until user clicks "stop", then redisplay the original form/title/description !!!

// When the user clicks the "stop" button

//     Animation stops / images are removed !!!
//     Form / title / description are shown again
//     User can enter a new search term
// */