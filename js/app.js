
const testImage = document.getElementById("testImage")
const input = document.getElementById("imgSearch")
const search = document.getElementById("searchButton")
const stopButton = document.getElementById("stopButton")
const intro = document.getElementById("intro")








document.addEventListener("DOMContentLoaded", ()=>{
    console.log("hello")
    console.log('Script is running');
    const defaultView = () =>{
        testImage.src = ""
        testImage.style.display = "none"
            stopButton.style.display = "none"
            search.style.display = "inline"
            intro.style.display = "block"
            input.style.display = "block"
    }

    // const addImage = (image) =>{
    //     const redditImage = document.getElementById("testImage")
    //     redditImage.src = `${imageUrl}`
        // document.getElementById("images").appendChild(image)
    // }
    search.addEventListener("click", (event)=>{
        const searchTerm = input.value.replace(/\s/g, "")
        console.log(searchTerm)
        const requestURL = `http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`
        event.preventDefault()
        console.log(requestURL)
        let i = 0
        // remove the search bar, start button and h1
        search.style.display = "none"
        intro.style.display = "none"
        input.style.display = "none"
        // let's me know it's running because it was taking awhile
        console.log("searching")
        // this gets the data from the API and sets an img src equal to it
        const updateImage = ()=>{
            fetch(requestURL)
        .then(apiResponse =>{
            return apiResponse.json()
        })
        .then(jsonData =>{

            let redditChildren = jsonData.data.children
            let arr = []
            let thumbnails = redditChildren.filter(obj =>{
                if(obj.data.thumbnail_height !== null && obj.data.thumbnail !== "default"){
               arr.push(obj.data.thumbnail)}
            })
                    console.log("hello")
                    testImage.src = arr[i]
                    testImage.style.display = "block"
                    stopButton.style.display = "block"
                    i++
                    if(i===arr.length){i = 0}
                    // wait one second then do it again
            
        })
        .catch(err => console.log("error!", err))
    } 
        
        const refresh = setInterval(updateImage, 4000)
        stopButton.addEventListener("click", ()=>{
            clearInterval(refresh)
            defaultView()
            
        })

        
    })

    })