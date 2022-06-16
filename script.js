const search = document.getElementById("search")
const imageDisplay = document.getElementById("scuz")
let imageIndex = 0

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

    imageDisplay.setAttribute('src', imageArr[imageIndex].data.url)

    const increment = () => {
        imageIndex++;
    }
    
    setInterval(increment, 1000);
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



