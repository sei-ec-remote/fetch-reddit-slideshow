// as a user I want to:
// get the first 150 pokemon
    // on page load get pokemon - 'DOMContentLoaded'
// get a single pokemon
    // click on a pokemon
    // change view to just that pokemon - display none, another button to undo that none display
    const container = document.querySelector('#container')
    // get the button to see all pokemon
    const stopButton = document.querySelector('#stop-slide')
    // intake a single pokemon and display it
    const form = document.querySelector('#form')

    const carousel = document.getElementById('carousel-container')

    function removeAllChildNodes(carousel) {
        while (carousel.firstChild) {
            carousel.removeChild(carousel.firstChild);
        }
    }
    // const container = document.querySelector('#container');

    function stopSlide() {
        // const carouselInner = document.querySelector(".carousel-inner")
        container.style.display = "none"
        removeAllChildNodes(carousel)
 
    }
    stopButton.addEventListener('click', stopSlide)

    
    // this function will run on success of getting all 150 pokemon
    const onGetCatsSuccess = (array) => {
        //console.log(typeof array, Array.isArray(array))
         //console.log(array.data.children[0].data)
         const carouselInner = document.querySelector(".carousel-inner")
         const catDivActive = document.createElement('div')
         catDivActive.setAttribute('id', 'catDivA')
         catDivActive.setAttribute('class', 'carousel-item active')
         carouselInner.appendChild(catDivActive)
         //catDivActive.innerHTML = `<img src="${catImg}" class = "w-100 d-block img-fluid" alt="">`
         let input = document.getElementById("userInput").value
        catDivActive.innerHTML = `<div class = "w-100 d-block img-fluid" alt="">${input}</div>`

        const catArray = array.data.children
        //const testArray = []

        catArray.forEach(cat => {
            const catDiv = document.createElement('div')            
            catDiv.setAttribute('class', 'carousel-item')
            // testArray.push(cat.data.preview.images[0].source.url)
            //testArray.push(cat.data.preview.images[0].source.url)
            if (!cat.data.is_video && cat.data.thumbnail) {
                //const catImg = cat.data.thumbnail
                const catImg = cat.data.thumbnail
                //const catImg = cat.data.preview.images[i],source.url
                catDiv.innerHTML = `<img src="${catImg}" class = "w-100 d-block img-fluid" alt="">`
                carouselInner.appendChild(catDiv)
            }  
                  
         })

         //console.log("here is the testArray" + testArray)
    }
    
    const onGetCatsFailure = (failure) => {
        console.log('on failure', failure)
    }
    
                 // once the DOM is loaded run said block of code
//     document.addEventListener('DOMContentLoaded', () => {
//         // fetch is an interface of AJAX
//         fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
//             // if this is successful it will resolve and be passed to a `.then()`
//             // intake a `res` or response from  fetch and change to JSON
//             // ALWAYS want to change Response object to JSON
//             // () => {}
//             .then(res => res.json())
//             // passing our JSON  from the prevous .then() to our success function
//             .then(onGetPokemonSuccess)
//             // if this fails for whatever reason it will be rejected and passed to the `.catch()`
//             // passing an error to our failure function
//             .catch(onGetPokemonFailure)
//     })

//     // if my see all pokemon button is clicked run said code
//     seeAllPokemon.addEventListener('click', () => {
//         // since we start as a display of 'flex' we want to go back
//         container.style.display = 'flex'
//     })

//     // listen for a submit event and run said block of code
//     form.addEventListener('submit', (event) => {
//         // prevent the default refresh
//         // 99 percent of the time you will need to prevent that default behavior
//         event.preventDefault()
//         // since I'm in a form submit I can refere to my input
//         const pokeNumber = input.value

//         // make a fetch request for a single pokemon
//         fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
//         .then(res => res.json())
//         // then take json and handle it
//         // since we have a function that already intakes a single pokemon
//         // use it again
//         .then(onShowPokemonSuccess)
//         // since we already have a function that handles a single pokemon failure
//         // use it again
//         .catch(onShowPokemonFailure)

//         console.log(p)
//     }) 

        // once the DOM is loaded run said block of code
    // document.addEventListener('DOMContentLoaded', () => {
       
    //     fetch('https://www.reddit.com/search.json?q=cats+nsfw:no')         
    //         .then(res => res.json())
    //         .then(onGetCatsSuccess)
    //         // if this fails for whatever reason it will be rejected and passed to the `.catch()`
    //         .catch(onGetCatsFailure)
    // })

    // if my see all pokemon button is clicked run said code
    // showAllPokemon.addEventListener('click', () => {
    //     // since we start as a display of 'flex' we want to go back
    //     container.style.display = 'flex'
    // })

    // listen for a submit event and run said block of code
    form.addEventListener('submit', (event) => {
        container.style.display = 'flex'
        // prevent the default refresh
        // 99 percent of the time you will need to prevent that default behavior
        event.preventDefault()
        let input = document.getElementById("userInput").value
    
        fetch(`https://www.reddit.com/search.json?q=${input}+nsfw:no`)         
            .then(res => res.json())
            .then(onGetCatsSuccess)
            // if this fails for whatever reason it will be rejected and passed to the `.catch(`
            .catch(onGetCatsFailure)
    }) 

///////////////////////////////////////////////////////////////////////

// // as a user I want to:
// // get the first 150 pokemon
//     // on page load get pokemon - 'DOMContentLoaded'
// // get a single pokemon
//     // click on a pokemon
//     // change view to just that pokemon - display none, another button to undo that none display
//     const container = document.querySelector('#container')
//     // get the button to see all pokemon
//     const seeAllPokemon = document.querySelector('#see-all-pokemon')
//     // intake a single pokemon and display it
//     const form = document.querySelector('#form')

//     const onShowPokemonSuccess = (pokemon) => {
//         console.log(pokemon)

//         // select a div that has a class of single-pokemon
//         const singlePokemon = document.querySelector('.single-pokemon')

//         // if there is a something contained in the varible singlePokemon
//         // not null and not undefined
        
//         if (singlePokemon) {
//             // remove this element from the DOM
//             singlePokemon.remove()
//         }

//         // change a view
//         // display of none on my container
//         container.style.display = 'none'
//         // create a div
//         const pokeDex = document.createElement('div')
//         // add a class
//         pokeDex.classList.add('single-pokemon')
//         // craft some HTML with innerHTML
//         pokeDex.innerHTML = `
//             <h1>${pokemon.name}</h1>
//             <img src="${pokemon.sprites.front_default}" />
//         `
//         // add our new div (pokeDex) to the body 
//         document.querySelector('body').appendChild(pokeDex)
//     }
    
//     const onShowPokemonFailure = () => {
//         console.log('on failure')
//     }
    
//     // addEventListener will ALWAYS pass us an evet
//     const showPokemon = (event) => {
//         // console.log(event.target)
//         // getter method
//         // getting the `data-url` that we set in our on success function
//         const pokeURL = event.target.getAttribute('data-url')
//         // making an api call 
//         fetch(pokeURL)
//             // turn our response object into JSON
//             // ALWAYS GOING TO DO that
//             .then(res => res.json())
//             // handle for success
//             .then(onShowPokemonSuccess)
//             // handle for failure
//             .catch(onShowPokemonFailure)
//     }
    
//     // this function will run on success of getting all 150 pokemon
//     const onGetPokemonSuccess = (pokeArray) => {
//         // console.log(pokeArray.results)
//         // loop over all pokemon and handle them
//         pokeArray.results.forEach(pokemon => {
//             // create a div to house each pokemon
//             const pokeCard = document.createElement('div')
//             // adding pokemon-card class
//             pokeCard.classList.add('pokemon-card')
//             // innerText to be the pokemons name
//             pokeCard.innerText = pokemon.name
//             // set the url to a data attribute inside of this div
//             // setter method
//             // data attrubute needs to start with `data-*`
//             pokeCard.setAttribute('data-url', pokemon.url)
//             // add an event listener
//             pokeCard.addEventListener('click', showPokemon)
//             // append all divs to the container
//             container.appendChild(pokeCard)
//         })
    
//     }
    
//     const onGetPokemonFailure = () => {
//         console.log('on failure')
//     }
    
//         // once the DOM is loaded run said block of code
//     document.addEventListener('DOMContentLoaded', () => {
//         // fetch is an interface of AJAX
//         fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
//             // if this is successful it will resolve and be passed to a `.then()`
//             // intake a `res` or response from  fetch and change to JSON
//             // ALWAYS want to change Response object to JSON
//             // () => {}
//             .then(res => res.json())
//             // passing our JSON  from the prevous .then() to our success function
//             .then(onGetPokemonSuccess)
//             // if this fails for whatever reason it will be rejected and passed to the `.catch()`
//             // passing an error to our failure function
//             .catch(onGetPokemonFailure)
//     })

//     // if my see all pokemon button is clicked run said code
//     seeAllPokemon.addEventListener('click', () => {
//         // since we start as a display of 'flex' we want to go back
//         container.style.display = 'flex'
//     })

//     // listen for a submit event and run said block of code
//     form.addEventListener('submit', (event) => {
//         // prevent the default refresh
//         // 99 percent of the time you will need to prevent that default behavior
//         event.preventDefault()
//         // since I'm in a form submit I can refere to my input
//         const pokeNumber = input.value

//         // make a fetch request for a single pokemon
//         fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
//         .then(res => res.json())
//         // then take json and handle it
//         // since we have a function that already intakes a single pokemon
//         // use it again
//         .then(onShowPokemonSuccess)
//         // since we already have a function that handles a single pokemon failure
//         // use it again
//         .catch(onShowPokemonFailure)

//         console.log(pokeNumber)
//     }) 

