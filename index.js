const startSearch = document.querySelector('#startSearch')
const container = document.querySelector('#container')


const showPic = (dog) => {
    container.styke.display = 'none'
const dogDex = document.createElement('div')
dogDex.innerHTML `
    <img src="https://b.thumbs.redditmedia.com/8v8pXCCWiMetMxqBU2XWiNzVOo6xsUy4F6ukb9ZnI4c.jpg"/>
`
}


document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.reddit.com/search.json?q=dogs+nsfw:no')
    .then(res => res.json())
    .then(startSearch)
    .catch(console.error)
})

const form = document.querySelector('#form')

form.addEventListener('search', event => {
    event.preventDefault()
    fetch(`https://b.thumbs.redditmedia.com/8v8pXCCWiMetMxqBU2XWiNzVOo6xsUy4F6ukb9ZnI4c.jpg`)
    .then(res => res.json())
    .then(showPic)
    .catch(console.error)
})
