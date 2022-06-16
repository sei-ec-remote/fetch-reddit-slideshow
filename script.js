const search = document.getElementById("search")
const imageDisplay = document.getElementById("scuz")
let goatArray = []
let imageIndex = 0
//let url

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
    console.log(`${url}`)
    goatArray = imageArr
    console.log(imageArr)
    changeImage()
}

const onFailure = () => {
    console.log('failure')
}

search.addEventListener('keypress', e => {
    
    if (e.key === 'Enter'){
        url = `http://www.reddit.com/r/pics/search.json?q=${search.value}+nsfw:no`
        fetch(url) 
       .then(rep => rep.json())
       .then(onSucces)
       .catch(onFailure)

    }
});


