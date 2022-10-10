let counter = 4
const theImg = document.createElement('img')


document.addEventListener('DOMContentLoaded', () => {

    fetch('https://www.reddit.com/search.json?q=pets+nsfw:no')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        function img() {
            theImg.src = data.children[count].data.thumbnail
            theImg.style.width = '400px'
            theImg.style.height= '400px'
            const window = document.getElementById('window')
            window.appendChild(theImg)
            

        }
    document.querySelector('#start').addEventListener('click', () => {
        let interval = setInterval(() =>{
            img()
            counter+=1
        },1500)
        document.querySelector('#stop').addEventListener('click', () => {
            theImg.src=""
            counter = 4
            clearInterval(interval)
        })
    })
    })
    .catch(error => {
        console.log('Error',error)
    })
} )
