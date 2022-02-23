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
            for(let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].data.url.includes('.jpg'))
                photoArray.push(arrayData[i].data.url);
                // console.log('these are the photos', photoArray[i])
                }
                //need to now get images from array and link to DOM
                const imgElement = document.createElement('img')
                  imageList.appendChild(imgElement) 
                  //need to show show different images 
                     let timer = 0
                    pictureTimer = setInterval( () => {
                        imageList.src = photoArray[timer]
                      timer++
                    if(timer === photoArray.length - 1)
                    {
                      timer = 0
                      
                    }
                } ,3000)
            })

        .catch((err) => console.log('error!', err));
}


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', (event) => {
        
        event.preventDefault();
        const pictureTimer =  setInterval(getImages, 5000);
        const headerone = document.querySelector('#headerone')
        const headertwo = document.querySelector('#headertwo')
        headerone.remove()
        headertwo.remove()
        stopButton.addEventListener('click', () => {
            location.reload()
        }) 
    })
}); 