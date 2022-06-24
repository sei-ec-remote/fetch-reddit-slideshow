// RD FIN


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let globalImgUrlsArray = [] // global USED VAR TO keep it globally scoped

const form = document.querySelector('#form')  //global

var iterator2 = 1

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

    const makeImg = document.querySelector('#imgDiv1')
    makeImg.style.height = "400px"
    makeImg.style.width = "400px"
    makeImg.src = globalImgUrlsArray[0]


    altLoop()// ALT loop
}    



const altLoop = () => {



    function mainLoop(){

        if (iterator2 === globalImgUrlsArray.length ){
            window.alert("Please try another search");
            location.reload()
            clearInterval(timerIDtoEnd)
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

    let intervalID = setInterval(mainLoop,4000)   

    timerIDtoEnd = intervalID
    console.log('timerIDtoEnd:ticker:'+timerIDtoEnd);
    }
    
startInterval()


} // altLoop END }

const photoLoopFail = () => {
    console.log('FAILED REQUEST')
}


const buttonGet1 = document.getElementById("stopSlideButton")
buttonGet1.addEventListener('click', (event)=> {

    buttonGet1.style.display = "none"

    const titleGrab = document.getElementById("title")
    titleGrab.style.display = "block"


    const instructionGrab = document.getElementById("instruction")
    instructionGrab.style.display = "block"

    const searchBtnGet = document.getElementById('searchbtn')
    searchBtnGet.style.display = "block"

    const inputBoxGet = document.getElementById('input')
    inputBoxGet.style.display = "block"
    inputBoxGet.value = ""

    const makeImg = document.querySelector('#imgDiv1')
    makeImg.style.display = "none"

    iterator2 = 1

    location.reload()

})




// submit event kicks off the fetch
form.addEventListener('submit', (event) => {
    console.log('inFETCH');

        event.preventDefault()  //stops submit page refresh

        const titleGrab = document.getElementById("title")

        const buttonGet = document.getElementById("stopSlideButton")
        buttonGet.style.display = "block"

        if (titleGrab.style.display === "display"){
            titleGrab.style.display ="none" 
        } else {titleGrab.style.display ="none" }


        const instructionGrab = document.getElementById("instruction")
        instructionGrab.style.display = "none"

        const searchBtnGet = document.getElementById('searchbtn')
        searchBtnGet.style.display = "none"

        const inputBoxGet = document.getElementById('input')
        inputBoxGet.style.display = "none"



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

//     The form / title / description should hide !!!  DONE
//     Show a loading message (optional)  NA
//     Fetch related posts from reddit (with fetch) DONE
//     Display animation / slideshow of images (with DOM manipulation) DONE
//     Show a button to stop slideshow !!!  DONE
//     Repeat animation until user clicks "stop", then redisplay the original form/title/description !!!

// When the user clicks the "stop" button

//     Animation stops / images are removed !!! DONE
//     Form / title / description are shown again  DONE
//     User can enter a new search term DONE
// */