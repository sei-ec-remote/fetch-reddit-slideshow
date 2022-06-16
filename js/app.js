
const form = document.querySelector(
    "#form"
)

const frame1 = document.querySelector("#frame1")
const frame2 = document.querySelector("#frame2")
const stopRow = document.querySelector("#secondRow")
const buttonContainer = document.querySelector("#buttonContainer")
const searchPage = document.querySelector('#searchPage')
const resultsPage = document.querySelector("#resultsPage")
let frameNumb = 0


const frameHandler = (urlArray, imageArray) => {
    for(let i = 0;i<imageArray.length;i++){
        imageArray[i].src = urlArray[frameNumb % urlArray.length]
        frameNumb++
        //console.log(frameNumb)
    }
    }


const cycle = (urlArray) => {
    
    console.log(searchPage)
    searchPage.style.display = 'none'
    let image1 = document.createElement('img')
    frame1.appendChild(image1)
    image1.classList.add("img-fluid")
    image1.setAttribute("alt", "Error 403: access forbidden")
    let image2 = document.createElement('img')
    frame2.appendChild(image2)
    image2.classList.add("img-fluid")
    image2.setAttribute("alt", "Error 403: access forbidden")
    let imageArray = [image1, image2]

    let framerotate = setInterval(frameHandler, 2000, urlArray, imageArray)
    frameHandler(urlArray, imageArray)
    
    let endbutton=document.createElement('button')

    endbutton.setAttribute('type','button')
    endbutton.innerText = "End Animation"
    buttonContainer.appendChild(endbutton)
    endbutton.addEventListener('click', () =>{
        clearInterval(framerotate, 10)
        searchPage.style.display = 'block'
        image1.remove()
        image2.remove()
        resultsPage.style.display = "none"
        endbutton.remove()

    })

    
}

const onShowImagesSuccess = (body) => {
    resultsPage.style.display = "block"
    after=body.data.after
    console.log(body.data)
    console.log("BODYDATAAFTER",body.data.after)
    let urlArray=[]
    //console.log(body.data.children)
    //console.log(typeof body.data.children)
    for (let index=0;index<body.data.children.length;index++){

        //console.log(body.data.children[index].data.post_hint)
        if(body.data.children[index].data.post_hint == 'image'){

            //         //console.log(body.data.children[index].data.url_overridden_by_dest)
            //         let div=document.createElement('div')
            //         let img = document.createElement('img')
        urlArray.push(body.data.children[index].data.url_overridden_by_dest)
                 }
    }
    //console.log(urlArray)
    cycle(urlArray)
    // for(let index=0;index<body.data.children.length;index++){

        
    //     console.log("sucess5")
    //     if(body.data.children[index].data.post_hint == 'image'){
    //         //console.log(body.data.children[index].data.url_overridden_by_dest)
    //         let div=document.createElement('div')
    //         let img = document.createElement('img')
            
    //     }
    // }
    
}
const onShowImagesFailure = () => {
    console.log('failure')
}

form.addEventListener('submit', (event) => {
    //default behavior is to refresh the page
    //most of the time you will have to prevent the default behavior
    event.preventDefault()

    //cover serach page
    //searchContainer.style.display = "none"
    //log input
    const searchTerm = input.value
    //console.log(searchTerm)

    //fetch input
    fetch(`http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no+limit=50`)
    .then(res=>res.json())
    .then(onShowImagesSuccess)
    .catch(onShowImagesFailure)
    
})