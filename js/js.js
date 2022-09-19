let count = 4
const newImg = document.createElement('img')
document.addEventListener("DOMContentLoaded", () => {
  
  fetch('https://www.reddit.com/search.json?q=cats')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    function img() {
      // const newImg = document.createElement('img')
        newImg.src = data.data.children[count].data.thumbnail
        newImg.style.width = '300px'
        newImg.style.height = 'auto'
        const window = document.getElementById('window')
        window.appendChild(newImg)
      }
      document.querySelector('#start').addEventListener('click', () => {
        let interval = setInterval(() =>{
          img()
          count+=1
         },2000)
         document.querySelector('#stop').addEventListener('click', ()=> {
          newImg.src=""
          count = 4
          clearInterval(interval)
        })
        })
    })
  })
  .catch(error => {
    console.log('Error', error)
  })


