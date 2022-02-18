const searchButton = document.querySelector('#searchButton');
const stopButton = document.querySelector('#stopButton');
const imageList = document.querySelector('#imageList')
let photoArray = [];


//need to fetch images from json link 
const getImages = () => {
   
    const searchButton = document.querySelector('#searchButton').value;
    const searchResult = `http://www.reddit.com/search.json?q=${searchButton}+nsfw:no`;
    fetch(searchResult)
        .then((response) => response.json())
        .then((data) => {
            const arrayData = data.data.children
            // console.log('this should log an array of fromt he json', photoArray)
            const imageMap = arrayData.map((element) => {
                if (element.data.url.includes('.jpg' || '.png')) {
                    // console.log('These are the images', element.data.url)
                  photoArray.push(element.data.url);
                  console.log('this should log all photos when submitted', photoArray)
                }
                //need to now get images from array and link to DOM
              for (let i = 0; i<photoArray.length;i++) {
                const imgElement = document.createElement('img')
                  imgElement.id = `#img${[i]}`
                //   console.log('should show images ',imgElement.id)
                  imgElement.src = photoArray[i]
                //   console.log('this should load all images', photoArray)
                  imageList.appendChild(imgElement) 
                  let imageTime = 0
                     //need to now shove images into a 'slide show'
                     
              } 
            })
          
        })
        .catch((err) => console.log('error!', err));
}

// if (imageTime < photoArray[i].length -1) {
//     imageTime++
//     } else {
//     imageTime= 0
//     } 
//need to remove photos when stop button is clicked


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', (event) => {
        
        event.preventDefault();
        const pictureTimer =  setInterval(getImages, 3000);
        const headerone = document.querySelector('#headerone')
        const headertwo = document.querySelector('#headertwo')
        headerone.remove()
        headertwo.remove()
        stopButton.addEventListener('click', () => {
            clearInterval(pictureTimer)
        }) 
    })
});

