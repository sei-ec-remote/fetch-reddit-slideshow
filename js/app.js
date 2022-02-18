const requestURL = 'http://www.reddit.com/search.json?q=cats+nsfw:no'
const submitButton = document.querySelector('#submit-button')
const description = document.getElementById("description")
const imageSrc = document.getElementById('imageSource')
const title = document.getElementById('title')
let setInt = null;
const userInput = document.getElementById('userInput')

document.addEventListener('DOMContentLoaded', ()=> {


    imageSrc.remove()
    
    
    submitButton.addEventListener('click', (event) => {
        
        event.preventDefault()
        console.log(`click`, event);
        document.body.appendChild(imageSrc)
        submitButton.remove()
        title.remove()
        description.remove()

        const stopButton = document.createElement('button') 
        stopButton.id = 'stop'
        stopButton.textContent = 'Stop! My Heart can not take anymore!'
        document.body.appendChild(stopButton)

    
        stopButton.addEventListener('click', () => {
            clearInterval(setInt)
            document.body.appendChild(title)
            document.body.appendChild(description)
            document.body.appendChild(submitButton)
            imageSrc.remove()
            stopButton.remove()

            
          

        })
        
        
        fetch(`${requestURL}`) 
      
            .then(apiResponse => {
                //these thens are what happen if promises happen
                return apiResponse.json()
                //converitng to json then passing down to seeing data
            })
    
            .then(jsonData => {
                console.log('this is the data', jsonData)
                console.log('this is the data children', jsonData.data.children)
                let dataChildren = jsonData.data.children
                let newArr = []

                for(let i = 0; i < dataChildren.length; i++) {
                    if(dataChildren[i].data.thumbnail !== 'default')
                    newArr.push(dataChildren[i].data.thumbnail);
                    console.log('this is the new array', newArr[i])

                }   

            let counter = 0; 
            setInt = setInterval(()=> {
            imageSrc.src = newArr[counter]
                    counter++; 
                    console.log('this is the image', imageSrc)
                if (newArr.length-1 === counter) {
                    counter = 0; 
                }

            }, 1000)
                   
        })
 
        .catch(err => console.log('error!', err))

    })
})




    


         
   

        
