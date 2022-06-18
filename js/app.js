
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


        const altLoop = (arrayOfImgUrlsParam) => {
            console.log('in altLoop');
        

            // if (iterator < 25){

            // console.log('altLoop:Iterator:' + iterator)
                
            // const slidePhotoDivGrab = document.querySelector("#slideshowContainer")

            // let slideUrlPath = arrayOfImgUrlsParam[iterator]

            // // slidePhotoDivGrab.innerHTML = `slideUrlPath`  
            // slidePhotoDivGrab.innerHTML = `<img alt="${slideUrlPath}" src="${slideUrlPath}" + width=300 + height=300 /img>`
            // // slidePhotoDivGrab.innerHTML = `<img src="${slideUrlPath}" + width=300 + height=300 /img>`  // alt

            // document.querySelector('body').appendChild(slidePhotoDivGrab)  // THIS IS NECESSARY

            // iterator++

            // console.log('altLoop:IteratorPost++:' + iterator)

            // } else{console.log("altLoop:iterator FAIL")}


            // ALT ALT pass 1 -SERIAL PAUSES 11111111111111111111111111111
            // ISSUE WITH FILLING IMG DIVS

            // const slidePhotoDivGrab = document.getElementById("#img1div") //grab attempt
            const newImg1 = document.createElement('img')  // create new attempt

            newImg1.setAttribute('id','img1')
            console.log("iterator:"+iterator)
            console.log("in1stPASS")
            let slideUrlPath = arrayOfImgUrlsParam[iterator]
            newImg1.src = slideUrlPath
            newImg1.style.width = "200px"
            newImg1.style.height = "200px"
            document.querySelector('body').appendChild(newImg1)
            iterator++

// universal FUNCTION To pause   // cal is sleep(3000)   //doesn't really work how i want
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }

            // Alt alt pass 2 22222222222222222222222222222222222
           
            // const slidePhotoDivGrab1 = document.querySelector("#testdiv2")
            
            // CLEARING TEST %%%%%%%%%%%%%%%
            // if (slidePhotoDivGrab1) {

            //     // remove this element from the dom
            //     slidePhotoDivGrab1.remove()
            // }
            // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // sleep(5000) // try to sleep for 5 seconds. Not returning correctly for divs, but iterator yes

            const newImg2 = document.createElement('img')  // create new attempt

            newImg1.setAttribute('id','img2')
            console.log("iterator:"+iterator)
            console.log("in2stPASS")
            let slideUrlPath2 = arrayOfImgUrlsParam[iterator]
            newImg2.src = slideUrlPath2
            newImg2.style.width = "200px"
            newImg2.style.height = "200px"

            document.querySelector('body').appendChild(newImg2)
            iterator++

            
            // Alt alt pass 3  33333333333333333333333333    // ITS MAKING NO UPDATES THEN DOING IT ALL IN LAST

            // sleep(5000) 
            const newImg3 = document.createElement('img')  // create new attempt
            newImg1.setAttribute('id','img3')
            console.log("iterator:"+iterator)
            console.log("in3rdPASS")
            let slideUrlPath3 = arrayOfImgUrlsParam[iterator]
            newImg3.src = slideUrlPath3
            newImg3.style.width = "200px"
            newImg3.style.height = "200px"
            document.querySelector('body').appendChild(newImg3)
            iterator++

            console.log('end 3rd pass');

        }

        
        // console.log(arrayOfImgUrlsParam[2])
        // // DO ALL PASSES in a LOOP
        // arrayOfImgUrlsParam.foreach( url = () =>{
        //     const ImG = document.createElement('div')
        //     ImG.src = url
        //     document.querySelector('body').appendChild(ImG)

        // } )




        // //for the big loop
        // iterator++



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