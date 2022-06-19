///&&&&&& LOCAL FILE I/O
const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
      URL.revokeObjectURL(a.href);
  };

  let text = "test stuff here"
      
/// how to call:  downloadToFile(text, 'my-new-file.txt', 'text/plain');


//&&&&&&&&&&&&&&&&&&&&&&&&&&&

var globalImgUrlsArray = [] // global USED VAR TO keep it globally scoped

const form = document.querySelector('#form')  //global

var iterator = 5 // global iterator

var iterator2 = 4

var A = ''

var timerIDtoEnd = 0 
console.log('31:timerIDtoEnd'+timerIDtoEnd);

var endLoop = false /// testing for altloop


// universal FUNCTION To pause   // cal is sleep(3000)   //doesn't really work how i want
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }


// var timerID = undefined



// submit event kicks off the fetch
form.addEventListener('submit', (event) => {

    event.preventDefault()  //stops submit page refresh

    const userSearchTerm = input.value

    // new fetch
    // fetch(`https://www.reddit.com/r/pics/search.json?q=${userSearchTerm}&limit=22&t=1&nsfw:no`)
    // old fetch below
    fetch(`https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image&limit=50`)

    // alt fetch
    // fetch(`https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image`)
        


    .then(res => res.json())  // formates redditqueryobject to json 


    .then(photoLoopSuccess,photoLoopFail) // WORKING

    
    .catch((error)=>{
           console.log("Oh no, there's been an error!", error)})

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
        // console.log('FOR loop in photoloopSc:') //testing
        arrayOfImgUrls.push(arrayObject.data.children[i].data.url) //does this work?
    }    

    console.log("107:"+arrayOfImgUrls);


    const setOutsideArray = (arrayOfImgUrls) => {
        globalImgUrlsArray = [...arrayOfImgUrls]

    }
    console.log("114:"+arrayOfImgUrls)

    setOutsideArray(arrayOfImgUrls)

    console.log("118:"+globalImgUrlsArray)

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
// NEED TO COPY THE arrayOfImgUrlsParam then use it inside loop




const altLoop = () => {

        // GRAB ARRAY CONTENT FOR DLing to see whats in file
        // downloadToFile(arrayOfImgUrls[7], 'my-new-file.txt', 'text/plain');

    
    
    
    ////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    
   function mainLoop(){

        console.log('mainloop:iterator2:'+iterator2);
        if (iterator2 === globalImgUrlsArray.length ){
            console.log('timerIDtoEnd:mainloop:'+timerIDtoEnd)
            clearInterval(timerIDtoEnd)  // DOUBLE CHECK THIS ID TO MAKE SURE IT MATCHES
        }
      
        console.log('IN TIMER MAINLOOP');

        // DO STUFF HERE EVERY 1 second

        const makeImg = document.querySelector('#imgDiv1')
        makeImg.src = globalImgUrlsArray[iterator2] 
    
        iterator2++

        console.log('mainloopEND:iterator2:'+iterator2);

    }

    ///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
       
    const ticker = () => {



        let intervalID = setInterval(mainLoop,3000)     


        timerIDtoEnd = intervalID
        console.log('timerIDtoEnd:ticker:'+timerIDtoEnd);

    }
    
    ticker()
}



//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const photoLoopFail = () => {
    console.log('FAILED REQUEST')
}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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