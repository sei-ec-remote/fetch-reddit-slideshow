
let globalImgUrlsArray = [] // global

const form = document.querySelector('#form')  //global

let iterator = 0 // glocal iterator


// submit event kicks off the fetch
form.addEventListener('submit', (event) => {

    event.preventDefault()  //stops submit page refresh

    const userSearchTerm = input.value

    fetch(`https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image`)

    .then(res => res.json())  // formates redditqueryobject to json 

    .then(photoLoopSuccess,photoLoopFail) // WORKING

    
    .catch(console.log("FAIL:HIT CATCH"))
})

///////////////////////******************************************** */





const photoLoopSuccess = (arrayObject) => {

    //////////////////////////***************** working below */
    console.log('in:photoLoopSuccess') //testing


    const x = 3
    const urlPath = arrayObject.data.children[x].data.url
    const urlPathThumbnail = arrayObject.data.children[x].data.thumbnail   // alt path
    
    console.log("urlPath:"+urlPath);
    console.log("urlPath:"+urlPathThumbnail);


    // gives the aray of list of URLs, set to empty at first
    let arrayOfImgUrls = []

    //this for belongs to arrayOfImgUrls 
    for (let i = 0;i < 25; i++){   // FIX i < 25
        console.log('FOR loop in photoloopSc:') //testing
        arrayOfImgUrls[i] = arrayObject.data.children[i].data.url //does this work?
    }    
        // arrayOfImgUrls[i] = arrayObject.data.children[i].data.thumbnail // alt path
        

    // puts just the URL in an array
    for (let x= 0; x < arrayOfImgUrls.length; x++){
        console.log("arrayOfImgUrls-index:"+ x + ":" +  arrayOfImgUrls[x])
    }


    // CONSLE OUT test
    let string1 = arrayOfImgUrls[5]
    console.log("strINpls:"+string1)



    // console.log('arrayOfImgUrls:' + arrayOfImgUrls) // seems to work TESTING

    // slideLoop(arrayOfImgUrls)  /// regular loop

    



    setInterval(altLoop(arrayOfImgUrls),3000)  // ALT loop

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


            // ALT ALT pass 1
            setTimeout(() => {

            const slidePhotoDivGrab = document.querySelector("#slideshowContainer")
            console.log("iterator:"+iterator)
            let slideUrlPath = arrayOfImgUrlsParam[iterator]
            slidePhotoDivGrab.innerHTML = `${slideUrlPath}`  
            document.querySelector('body').appendChild(slidePhotoDivGrab)
            iterator++

        },3000)



            // Alt alt pass 2

            setTimeout(() => {

            const slidePhotoDivGrab1 = document.querySelector("#slideshowContainer")
            console.log("iterator:"+iterator)
            let slideUrlPath1 = arrayOfImgUrlsParam[iterator]
            slidePhotoDivGrab1.innerHTML = `${slideUrlPath1}`  
            document.querySelector('body').appendChild(slidePhotoDivGrab1)
            iterator++

            
            },3000)

            
            // Alt alt pass 3


            setTimeout(() => {

            const slidePhotoDivGrab2 = document.querySelector("#slideshowContainer")
            console.log("iterator:"+iterator)
            let slideUrlPath2 = arrayOfImgUrlsParam[iterator]
            slidePhotoDivGrab2.innerHTML = `${slideUrlPath2}`  
            document.querySelector('body').appendChild(slidePhotoDivGrab2)
            iterator++


            },3000)


        }

        
        
        


        // //for the loop
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