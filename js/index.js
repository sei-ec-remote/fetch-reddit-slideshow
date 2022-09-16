//container images are going into
const container = document.querySelector('#container')

let button = document.querySelector('#next-reddit')
let slide = document.getElementById("slide")
let input = document.querySelector('#input').innerText
let frame = document.getElementById('slideshow')



//create Element. input value needs to be tied to click. 

// imagesArray[0]= {
// image:whiteKitty (), 
// src: "https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg", "WhiteKitty"
// caption: "WhiteKitty"
// }

// //imagefactory
// const createImage = creatingImageArray(https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg, whiteKitty)
// const img = newImage(); 
// img.src = "https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg"
// img.alt = "White Kitty"
// img.title = "White Kitty"
// return img;
// }


//pushing two images to the array
image.push(createImage("https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg", "White Kitty"))
image.push(createImage("https://a.thumbs.redditmedia.com/u2P9aNDI8BL7apOH7QfJUYjWR6h1P59JtB4Hf9kdzi8.jpg", "Black and White Kitty"))
console.log(image); 

//array of images to be looped through in slideshow
const imagesArray = (imagesArray) => {
    imagesArray.results.forEach(image => {
        //creating div for each image
        const imageSpace = document.createElement('div')
        //naming image div
        imageSpace.imageOneSpace = image.name
        //add a class to each div
        imageSpace.classList.add('imageClass')
        //setter-method
        imageSpace.setAttribute(img src="https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg", imageUrl)
        //click event
        imageSpace.addEventListener('click', moveImageForward)
        //take image and add to the container
        container.appendChild(image)
    })
}

const showImageSuccess = (image) => {
    container.getElementsByClassName.display = 'none'
    const 
}
//images slideshow
const images = document.querySelectorAll("img");
  let i = 0;
    setInterval(function(){ 
    if(i == 0) {
      images[i].className = "fade-in-image";
    } else if(i == images.length ) {
      images[i - 1].className = "fade-out-image";
      images[0].className = "fade-in-image";
      i = 0;
    } else {
      images[i - 1].className = "fade-out-image";
      images[i].className = "fade-in-image";
    }
    i++;
  }, 2000);

  //showImage
const showImage = (image) => {
    //getter method - getAttribute
    const imageUrl = image.target.getAttribute('https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg')
    //console.log(pokeUrl)
    fetch(imageUrl)
    //have to return as JSON
    .then(res => res.json())
    .then(showImageSuccess) //formerly onShowPokemonSuccess
    .catch(console.error)

document.addEventListener('searchClick', () => {
    fetch()
})

//functional search bar
const f = document.getElementById('form');
const q = document.getElementById('query');
const reddit = 'https://www.reddit.com/';
const site = 'reddit.com';

function submitted(event) {
  event.preventDefault();
  const url = reddit + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('search', submitted);
