
    const container = document.querySelector('#container')
    // get the button to see results
    const seeResults = document.querySelector('#input')
    // get search form
    const form = document.querySelector('#form')
    // assign carousel
    const carousel = document.querySelector('#carousel')

    const arrayurl = []
    
    // const onGetResultSuccess = () => {
    //     console.log('get result success')
    // }
    // const onGetResultFailure = () => {
    //     console.log('failed to get results')
    // }
    const onShowResultSuccess = (json) => {
        // console.log(json.data.children)
        for (let i = 0; i < 6; i++) {
            arrayurl[i] = json.data.children[i].data.url
        }
        let i = 1
        // console.log(arrayurl)
        arrayurl.forEach(image => {
            console.log(image)
            document.getElementById(`slide${i}`).setAttribute('src', `${image}`)
            i++
            container.style.display = 'none'
            carousel.style.display = 'flex'
        })

        // console.log(json)
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
    //     document.addEventListener('DOMContentLoaded', () => {
    //         // fetch is an interface of AJAX
    //         fetch(`https://www.reddit.com/search.json?`)
    //         .then(res => (res.json()))
    //         .then(res => res.data.children)
    //         .then(res => res.map(post => ({
    //             author: post.data.author,
    //             link: post.data.url,
    //             img: post.data.thumbnail,
    //             title: post.data.title
    //         })))
    //         .then(onGetResultSuccess)
    //         .catch(onGetResultFailure)
    // })


const reset = document.getElementById('stop-slide')
reset.addEventListener('click', function(){
    container.style.display = 'flex'
    carousel.style.display = 'none'
    
})