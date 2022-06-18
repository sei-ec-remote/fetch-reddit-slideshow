
let globalImgUrlsArray = [] // global

const form = document.querySelector('#form')  //global

let iterator = 5 // glocal iterator

// universal FUNCTION To pause   // cal is sleep(3000)   //doesn't really work how i want
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }





// submit event kicks off the fetch
form.addEventListener('submit', (event) => {

    event.preventDefault()  //stops submit page refresh

    const userSearchTerm = input.value

    // new fetch
    // fetch(`https://www.reddit.com/r/pics/search.json?q=${userSearchTerm}&limit=22&t=1&nsfw:no`)
    // old fetch below
    fetch(`https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image&limit=50`)
        


    .then(res => res.json())  // formates redditqueryobject to json 


    .then(photoLoopSuccess,photoLoopFail) // WORKING

    
    .catch(console.log("FAIL:HIT CATCH"))
})

///////////////////////******************************************** */





const photoLoopSuccess = (arrayObject) => {

    //////////////////////////***************** working below */
    console.log('in:photoLoopSuccess') //testing


    const x = 6
    const urlPath = arrayObject.data.children[x].data.url               //orig path
    const urlPathThumbnail = arrayObject.data.children[x].data.thumbnail   // alt path
    
    console.log("urlPath:"+urlPath);
    console.log("urlPath:"+urlPathThumbnail);


    // gives the aray of list of URLs, set to empty at first
    let arrayOfImgUrls = []

    //this for belongs to arrayOfImgUrls. Adds IMG URLs to new array
    for (let i = 0;i < 25; i++){   // FIX i < 25
        console.log('FOR loop in photoloopSc:') //testing
        arrayOfImgUrls[i] = arrayObject.data.children[i].data.url //does this work?
    }    
        // arrayOfImgUrls[i] = arrayObject.data.children[i].data.thumbnail // alt path
        

    // puts just the URL in a new Array
    for (let x= 0; x < arrayOfImgUrls.length; x++){
        console.log("arrayOfImgUrls-index:"+ x + ":" +  arrayOfImgUrls[x])
    }


    // CONSLE OUT test
    let string1 = arrayOfImgUrls[5]
    console.log("strINpls:"+string1)



    // console.log('arrayOfImgUrls:' + arrayOfImgUrls) // seems to work TESTING

    // slideLoop(arrayOfImgUrls)  /// regular loop

    altLoop(arrayOfImgUrls)// ALT loop

}    

// this take the list of URLs , grabs a div and puts it in it
// const slideLoop = (arrayOfImgUrlsParam) => { 
//         console.log('SLDLParrayOfImgUrlsParam:' + arrayOfImgUrlsParam); // works


//         // get the div to hold slide photo
//         const slidePhotoDivGrab = document.querySelector("#slideshowContainer")

//         let slideUrlPath = arrayOfImgUrlsParam[iterator]


//         // set the photo with the img
//         slidePhotoDivGrab.innerHTML = `<img alt="${slideUrlPath}" src="${slideUrlPath}" + width=300 + height=300 /img>` // added the ALT
        
//         //adds image to page
//         document.querySelector('body').appendChild(slidePhotoDivGrab)





        ////// TESTING
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
const altLoop = (arrayOfImgUrlsParam) => {
    console.log('in altLoop');


    console.log("hello")

    const picUrlArray1 = ["1.jpg"] 
    const picUrlArray2 = ["1.jpg","2.jpg"] 
    const picUrlArray3 = ["1.jpg","2.jpg","3.jpg"] 
    
    
    const makeImg = document.querySelector('#imgDiv1')
    
    async function slideShow(){
    
        for(let i = 0; i < arrayOfImgUrlsParam.length; i++){
    
            let boxSize = "400px"

            makeImg.src= arrayOfImgUrlsParam[i] 
            makeImg.style.height = boxSize
            makeImg.style.width = boxSize
            await new Promise(r => setTimeout(r, 5000));
    
        }
    
    }
    
    slideShow()



}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const photoLoopFail = () => {
    console.log('FAILED REQUEST')
}

    // const photoDiv = document.createElement('div') //WORKS


    // setInterval(slideLoop,2000)




    // const image1 = "https://static4.depositphotos.com/1005353/308/i/950/depositphotos_3088768-stock-photo-handicap-bathtub.jpg" //testing
    

    // const slidePhotoDivGrab = document.querySelector('#imgDiv1')  /// WORKS
    // const photoDiv = document.createElement('div')
    // photoDiv.innerHTML = `<img src="${urlPath}" + width=300 + height=300 /img>`

    // console.log(arrayObject.data.children[0].data.url)




    // photoDiv.innerHTML = `<img src="${arrayObject.data.children[2].data.url}" + width=300 + height=300 /img>`  /// THIS WORKS

    //you want it to see if they have a preview return it, if not keep going
    //.data.preview.img[i].source.url

    // if it includes external

    // if its an image file then push it

    // grabbing preview image and replace with i.reddit.


    // document.querySelector('body').appendChild(photoDiv)  // WORKS


    ///////******************** works above */




// TESTING @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// attempt to use map. function

// const jsonParse = (redditJSONobj) => {

// const dataInfo = redditJSONobj.map(function(data) {
//  if( data.status !== false){
//      let info = { "data.data": data.data,
//                   "data.data.children": data.data.children
//                  }
//      return info;
//  }
// });


// console.log(dataInfo);
// }
////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



///////////// STEPS

// page loads with search bar and submit

// user gets a prompt and types in a term
    // screen changes and displays

// prog goes out and grabs a bunch of info related to the search
    // then displays the photos


// the photos slide show until stop button is hit
    // then the images are removed
    // the original search pops back up

// research another item

// workingarray = obj.data.children
// if(dat.data.url.includes"jpg") {
//     // USE INCLUDES
// }


// sleep(5000)  DOESN'T WORK PROPERLY




// const redditApiUrl = 'https://www.reddit.com/r/pics/.json?jsonp+nsfw:no'
// const redditApiUrl1 =  https://www.reddit.com/r/aww.json

// let imageSearch = "dogs"   // THIS WORKED 
// const redditApiUrl2 =  `https://www.reddit.com/search.json?q="${imageSearch}"+nsfw:no+type:image`  // THIS WORKED


// https://www.reddit.com/r/aww.json

// redditFetch(redditApiUrl2)





////////////////////********************** */
//  testing photo get




//********************TIMED LOOP */


// this works
// mainLoop does the stuff
// calling ticker starts the timer, which calls mainloop
// intervaldID is need to get the id for the timer
// end the timer by calling clearInterval(intervalID)

// if the iterator hits 5 or whatever, it stops

// let iterator = 0
// let endLoop = false

// let timerID = undefined
// console.log("timerID:"+timerID)


// const mainLoop = () => {

//     if (iterator === 5 ){
//         clearInterval(timerID)
//     }

//     // DO STUFF HERE EVERY 1 second



//     console.log(iterator)
//     iterator++
// }


// const ticker = () => {
    
//     let intervalID = setInterval(mainLoop,1000)
//     console.log("intervalID:"+intervalID)

//     timerID = intervalID
//     console.log("timerIDin:"+timerID)
// }

// ticker()