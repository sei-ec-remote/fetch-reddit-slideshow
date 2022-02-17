
//test that example link
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("hello")
    console.log('Script is running');

    const input = document.getElementById("imgSearch")
    const search = document.getElementById("searchButton")
    // const addImage = (image) =>{
    //     const redditImage = document.getElementById("testImage")
    //     redditImage.src = `${imageUrl}`
        // document.getElementById("images").appendChild(image)
    // }
    search.addEventListener("click", (event)=>{
        const requestURL = `http://www.reddit.com/search.json?q=${input.value}+nsfw:no`
        event.preventDefault()
        console.log(requestURL)
        let i = 0
        // remove the search bar, start button and h1
        search.style.display = "none"
        document.getElementById("intro").style.display = "none"
        document.getElementById("imgSearch").style.display = "none"
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
               arr.push(obj.data.thumbnail)
            })
                    console.log("hello")
                    document.getElementById("testImage").src = arr[i]
                    document.getElementById("testImage").style.display = "block"
                    document.getElementById("stopButton").style.display = "block"
                    i++
                    if(i===arr.length){i = 0}
                    // wait one second then do it again
            
        })} 
        
        const refresh = setInterval(updateImage, 2000)
        document.getElementById("stopButton").addEventListener("click", ()=>{
            document.getElementById("testImage").style.display = "none"
            document.getElementById("stopButton").style.display = "none"
            clearInterval(refresh)
            search.style.display = "block"
            document.getElementById("intro").style.display = "block"
            document.getElementById("imgSearch").style.display = "block"
        })

        
    })

    })