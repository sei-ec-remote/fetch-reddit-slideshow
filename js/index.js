const searchButton = document.querySelector("#button")
const stopButton = document.querySelector ('#stop')
const  beginningInfo = document.querySelector("#header")
const userInput = document.querySelector("#user-input")
const form = document.querySelector('#userRequest')
const pictureFrame = document.querySelector("#slides-container")
// let slides = document.querySelectorAll(".mySlides")


const initalArray = ()=>{
    
    fetch(`http://www.reddit.com/search.json?q=${userInput.value}+nsfw:no`)
    .then(res => res.json())
    .then(makeImageArray)
    // .then(res => console.log(res.thumbnail))
    .catch(console.error)
}


const makeImageArray = (jsonArray) =>{
   
    const imageArray = jsonArray.data.children.map((element) =>{
        return element.data.thumbnail  
    })
    imageArray.forEach((url)=>{
        
        // pictureDiv.setAttribute("class", "mySlides")
        // pictureDiv.setAttribute("id", "fade")
        
       const picture = document.createElement('img')
        picture.setAttribute("class","imageSlides")
        picture.setAttribute("src", url)
        pictureFrame.appendChild(picture)
       //console.log(pictureDiv)
        //console.log(picture)
        let slides = document.querySelectorAll(".imageSlides")
        let slideIndex = 0;
        showSlides();
        
        function showSlides() {
            let i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";}
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    }) 
 
        
    
     
}
  


 



searchButton.addEventListener('click',(e) =>{
    e.preventDefault()
    
    initalArray()
    pictureFrame.style.visibility="visible"
    beginningInfo.style.visibility = "hidden"
})

stopButton.addEventListener('click', (e)=>{
    beginningInfo.style.visibility = "visible"
    pictureFrame.style.visibility="hidden"
})