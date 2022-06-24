
    const container = document.querySelector('#container')
    // get the button to see results
    const seeResults = document.querySelector('#input')
    // get search form
    const form = document.querySelector('#form')

    
    const onGetResultSuccess = () => {
        console.log('get result success')
    }
    const onGetResultFailure = () => {
        console.log('failed to get results')
    }
    const onShowResultSuccess = () => {
        console.log('show result success')
    }
    const onShowResultFailure = () => {
        console.log('failed to show results')
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const searchTerm = input.value.replace(/\s/g,'+')
    
        fetch(`https://www.reddit.com/search.json?q=${searchTerm}+nsfw:no+type:image`) 
            .then(res => res.json())
            .then(onShowResultSuccess)
            .catch(onShowResultFailure)
            
        })
        // once the DOM is loaded run said block of code
        document.addEventListener('DOMContentLoaded', () => {
            // fetch is an interface of AJAX
            fetch(`https://www.reddit.com/search.json?`)
            .then(res => (res.json()))
            .then(res => res.data.children)
            .then(res => res.map(post => ({
                author: post.data.author,
                link: post.data.url,
                img: post.data.thumbnail,
                title: post.data.title
            })))
            .then(onGetResultSuccess)
            .catch(onGetResultFailure)
    })

let index = 0
let img = document.querySelector('img')
let results 

function render(res) {
    results = res
    img.setAttribute("src", res[index].link)
    index = index < results.length == index + 1;
}
