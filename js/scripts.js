const redditAPI = "https://www.reddit.com/search.json?q="
let image = []
let currentIndex = 0
let interval
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("form").addEventListener("submit", redditFetch)
    document.getElementById("prev").addEventListener("click", function(){
        if(currentIndex>0){
            currentIndex--
            loadImg()
        }else{
            loadImg()
        }
    })
    document.getElementById("next").addEventListener("click", slideMove)
    document.getElementById("stop").addEventListener('click',function(){
        clearInterval(interval)
    })
})

function redditFetch(e){
    e.preventDefault()

    const query = document.getElementById("query").value

    if(query){
        fetch(redditAPI+query)
        .then(function(response){
            return response.json()
        })
        .then(function(JsonResults){
            const results = JsonResults.data.children

            image = results.map(function(posts){
                return{
                    subreddit: posts.data.subreddit,
                    title: posts.data.title,
                    url: posts.data.url.replace(".gifv", ".gif")
                }
            })
            .filter(function(item){
                return item.url.includes("i.imgur") || item.url.includes("i.redd")
            })
    
            currentIndex = 0
            loadImg()
            clearInterval(interval)
            interval = setInterval(slideMove, 3000)
        })

        .catch(function(err){
            console.log("Error", err)
        })
    }
    else{
        console.log("Working")
    }
}
function loadImg(){
    const container = document.getElementById('container')
    container.innerHTML = ""

    const newImg = document.createElement('img')
    newImg.src = image[currentIndex].url
    newImg.style.width = "350px"
    newImg.style.height = "auto"
    container.append(newImg)
    
}
function slideMove(){
    currentIndex++
    if(currentIndex>=image.length){
        currentIndex = 0
    }
    loadImg()
}
