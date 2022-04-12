document.addEventListener('DOMContentLoaded', () => {

const text = document.getElementById('get')
const stopB = document.getElementById('stop')
const searchB = document.getElementById('search')
const pic = document.getElementById('pic')
const form = document.querySelector('form')


searchB.addEventListener('click', (e) => {
    e.preventDefault()
    const reqUrl = `http://www.reddit.com/search.json?q=${text.value}+nsfw:no`
    console.log('this is in the url', text.value)
    console.log('this is the url', reqUrl)
    fetch(reqUrl)
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            // console.log(json.data.children[0].data.url)
            let cats = json.data.children
            let show = 0
            let imagecontainer = document.createElement('div')
            document.querySelector('body').appendChild(imagecontainer)
            // console.log('this is cats', cats)
            let cat_image = json.data.children[0].data.thumbnail
            // console.log('this is the image', cat_image)
            let img = document.createElement('img')
            img.src = cat_image
            imagecontainer.appendChild(img)

            console.log(img)
            // pic = cat_image
            // for (let i = 0; i < cats.length; i++) {
            //     show = cats[i].data.url
            //     if (show.includes('.jpg')) {
            //         const img = document.createElement('img')
                    
            //         imagecontainer.appendChild(img)
            //         img.src = show
                    
            //     }
            //     console.log(show)
            // }
        })
})
})

