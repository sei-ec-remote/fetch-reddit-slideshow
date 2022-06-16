const search = document.getElementById("search")
const imageDisplay = document.getElementById("scuz")


const onSucces = (stuff) => {
    
    children = stuff.data.children
    
    const imageArr = children.filter((datNew) => {
        if(datNew.data.url.includes("jpg")){
            return datNew
        }else if(datNew.data.url.includes("png")){
            return datNew
        }else if(datNew.data.url.includes("jpeg")){
            return datNew
        }
    })
    
    console.log(imageIndex)

    console.log(imageArr)

    changeImage
}

const onFailure = () => {
    console.log('failure')
}

const url = `http://www.reddit.com/r/pics/search.json?q=cats+nsfw:no`;

search.addEventListener('keypress', e => {
    
    if (e.key === 'Enter'){
       fetch(url) 
       .then(rep => rep.json())
       .then(onSucces)
       .catch(onFailure)

    }
});

let goatArray = []
let i = 0
goatArray[0] = 'css/Dolos.jpg'
goatArray[1] = "css/rain.jpg"
const changeImage = () => {
    imageDisplay.setAttribute('src', goatArray[i])
    if (i < imageDisplay.length - 1){
        i++
    }else {
        i = 0
    }
    setInterval(changeImage, 1000);

}

