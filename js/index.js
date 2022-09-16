const container = document.querySelector('#container')
const singleDog = document.querySelector('#single-dog')
const  getAllDogsBtn = document.querySelector('#see-all-dogs')
const form = document.querySelector('#form')

const getDogsImages = (dogs) => {

    while (singleDog.firstChild) {
        singleDog.removeChild(singleDog.firstChild)
    }

    console.log(dogs)
    container.style.display = 'none'
    const dogList = document.createElement('div')
    dogList.classList.add('single-dog')
    dogList.innerHTML=`
         <h1>${dogs.name}</h1>
         <img src="${dogs.sprites.front_default}"/>
    `
    singleDog.appendChild(dogList)
}

const showDog = (event) => {
    const dogUrl = event.target.getAttribute('data-url')
    fetch(dogUrl)
    .then(res => res.json())
    .then(getDogsImages)
    .catch(console.error)
}

const getAllDogsImages = (dogArray) => {
    dogArray.results.forEarch(dogs => {
        const dogPic = document.createElement('div');
        dogPic.innerText = dogs.name
        dogPic.classList.add('dog-pic');
        dogPic.setAttribute('data-url', dogs.url);
        dogPic.addEventListener('click', showDog);
        container.appendChild(dogPic);
    });
}
         


document.addEventListener('DOMContentLoaded', () => {
    fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
    .then(res => res.json())
    .then(getAllDogsImages)
    .catch(console.error)
})

getAllDogsBtn.addEventListener('click', () => {
    while (singleDog.firstChild) {
        singleDog.removeChild(singleDog.firstChild)
    }
     container.style.display = 'flex'
})

   form.addEventListener('submit', event => {
    event.preventDefault()
    const dogNumber = input.value

    fetch(`http://www.reddit.com/search.json/${dogNumber}`)
    .then(res => res.json())
    .then(getDogsImages)
    .catch(console.error)
   })