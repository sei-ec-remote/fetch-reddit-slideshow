document.addEventListener('DOMContentLoaded', () => {

const text = document.getElementById('text')
const reqUrl = `http://www.reddit.com/search.json?q=${text.value}+nsfw:no`
const stopB = document.getElementById('stop')
const searchB = document.getElementById('search')
const pic = document.getElementById('pic')


searchB.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`${reqUrl}`)
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            // console.log(json.data.children[0].data.url)
            let cats = json.data.children
            let show = 0
            let imagecontainer = document.createElement('div')
            for (let i = 0; i < cats.length; i++) {
                show = cats[i].data.url
                if (show.includes('.jpg')) {
                    const img = document.createElement('img')
                    
                    imagecontainer.appendChild(img)
                    img.src = show
                    
                }
                console.log(show)
            }
        })
})
})

