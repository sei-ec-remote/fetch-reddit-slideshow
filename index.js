
// document.querySelector('#stopBtn').addEventListener('click ', (Event) =>{
//      clearInterval(timeSet)
//    })

//const stopBtn = document.getElementById("stopBtn");
//stopBtn.addEventListener("click", mainloop);
// const container = document.querySelector('#container')
// const seeAllPics = document.querySelector('#see-all-pics')
// const form = document.querySelector('#form')
//container.style.display = 'none'

let i = 0
  

//let start = false


const mainloop = (redditobject) => {
  
  
     
  let arrayOfUrls =[] 
    
    //console.log(redditobject.data.children[0].data.url)
    
    for(let i = 0; i < 25; i++ ){
      arrayOfUrls[i] =  redditobject.data.children[i].data.url 
      
        const innerLoop =( ) => {
   
            if( i > 24){
             location.reload()
        }

    
     document.getElementById("catImg").style.height = "600px";
     const getImg = document.querySelector('#catImg');
     catImg.src = arrayOfUrls[i];
     console.log(arrayOfUrls[0]);

        i++
    }
  //let timeSet = setInterval(innerLoop,3000)
  
  
   
  

  }
  
}


// function startGame() {
//   let startDiv = document.getElementById("start");
//   let gameOver = document.getElementById("game-over");
//   startDiv.style.display = "none";
//   gameOver.style.display = "none";
//   //startGame();
// }

// function gameOver() {
//   let startDiv = document.getElementById("start");
//   let gameOver = document.getElementById("game-over");
//   startDiv.style.display = "none";
//   gameOver.style.display = "block";
//   let i = 0;
//   //gameOver();
// }









 document.addEventListener('DOMContentLoaded', () =>  { 

   fetch(`http://www.reddit.com/search.json?q=cats+nsfw:no+type:image`)
         
         .then(res => res.json())
         
         .then(mainloop)//onGetRedditCatSuccess

         //.catch()//onGetRedditCatFailure


    ///console.log()



})




  
 





//document.getElementById("container").style.border = "thick solid #0000FF";
 //document.getElementById('form').addEventListener('sumbit', function(){})


 
const stopSlide = () => {

  mainloop()

}

document.querySelector('#startBtn').addEventListener('click ', (stopSlide) =>{
  clearInterval(timeSet)
 })
