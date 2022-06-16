const search = document.getElementById("search")
const imageDisplay = document.getElementById("scuz")
let goatArray = []
let imageIndex = 0
// goatArray[0] = "https://i.redd.it/onx6r8fd9tx81.jpg"
// goatArray[1] = "https://i.redd.it/k2hrcfdkqqr81.jpg"
const changeImage = () => {
    imageDisplay.setAttribute('src', goatArray[imageIndex].data.url)
    imageIndex = (imageIndex + 1) % goatArray.length
    setTimeout(changeImage, 2000);

}

const onSucces = (stuff) => {
    
    children = stuff.data.children
    
    const imageArr = children.filter((datNew) => {
        if(datNew.data.url.includes("imgur")){
            return false
        }else if(datNew.data.url.includes("jpg")){
            return datNew
        }else if(datNew.data.url.includes("png")){
            return datNew
        }else if(datNew.data.url.includes("jpeg")){
            return datNew
        }
    })
    console.log(`${search.value}`)
    goatArray = imageArr
    console.log(imageArr)
    changeImage()
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


