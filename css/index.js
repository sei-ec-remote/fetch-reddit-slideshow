
//Setting global stop/start variable
let global_start_stop = 0


function stop_scroll() {
    global_start_stop = 0
}

function start_scroll(){
    //calling the slideShow() function every 3 seconds
    global_start_stop = 1;
    //slideShow();
    setInterval(function() {
        slideShow();
    }, 3000);
}


// #3) creating the div that will store the images 
const load_photos = (arrayObject) => {    
    //const slidePhotoDivGrab = document.querySelector('#slideshow')
    let slideShowElement = document.querySelector('.slideshow-container');
    

    let imageArray = arrayObject.data.children;

    //console.log('this is the length: ' + imageArray.length)

    let arr_len = imageArray.length;
    

    //Load in the first of images
    i = 0
    counter = 0
    while (i < arr_len) {
    //imageArray.length
    //for (let i = 0; i < imageArray.length; i++) {

        //Check if url contains the correct sub text
        let url = imageArray[i].data.url;
        let result = url.includes("i.redd.it");
        //console.log(url)
        //if the url doesn't contain the text, go to the next image
        if (!result){
            arr_len = arr_len - 1;
            i = i + 1;
            continue;
        }

        // #4)  create image tag
        let imgTag = document.createElement('img');
        //Set Source Image
        imgTag.src = url;

    
        imgTag.setAttribute('data-id', counter);
        imgTag.style.heigh = "350px";
        imgTag.style.width= "600px";

         //console.log(arrayObject.data.children[0].data.url)

      
        // #5)  Setting image to active or inactive
        //active shows current image, inactive hides the rest of the images 
        if (i === 0) {
            imgTag.className = "active";
        } else {
            imgTag.className = "inactive";
        }

        //Giving the last item the loop back id so program knows when its the last slide and to loop back to the first
        if (i === (arr_len - 1)){
        //imageArray.lenght//
            imgTag.setAttribute('data-last', 0);
        }
        //console.log(imgTag)
        //Add current image to the slide show element array of images
        slideShowElement.appendChild(imgTag);

        i = i + 1;
        counter = counter + 1;

    }


}


let slideShow = function () {

    if (global_start_stop === 1) {

        //Grabbing the active image
        let activeImageElement = document.querySelector('.active');

        
        //console.log('this is the active element: ' + activeImageElement.getAttribute('data-id'));

        
        //Getting the id of the element
        let id = activeImageElement.getAttribute('data-id');

        //Checking to see if the picture we are on is the last image, setting the counter back to the beginning
        let newId = id;
        console.log(id)
        if (activeImageElement.getAttribute('data-last') === "0"){
            console.log('this one')
            console.log(activeImageElement.getAttribute('data-last'))
            newId = 0;
        } else {
            console.log('that one')
            newId = parseInt(id) + 1;
        }

        //Setting the current image to inactive 
        activeImageElement.className = 'inactive';

        //console.log(newId)

        //Adding the new element to the screen by making it active
        document.querySelector('[data-id="' + newId + '"]').className = 'active';
 
        

    }


}



// Search bar and results
const form = document.getElementById('form')
console.log(form)
//#1)
form.addEventListener('submit', (event) => {

    event.preventDefault()

    const userSearchTerm = input.value
    console.log(userSearchTerm)

    const API_URL = `https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image`

//#2)
    fetch(API_URL)
    .then(response => response.json())

    //.then(imageData => load_photos(imageData));
    .then(load_photos)
    
    .catch()
})










